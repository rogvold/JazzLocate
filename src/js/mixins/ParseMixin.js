/**
 * Created by sabir on 06.12.15.
 */

var constants = require('../constants');


var Parse = require('parse').Parse;
var $ = require('jquery');

var ParseMixin = {
    initParse: function(){
        var appId = constants.PARSE_APP_ID;
        var jsKey = constants.PARSE_JS_KEY;
        Parse.initialize(appId, jsKey);
    },

    loadClassItem: function(classNameOrParseClass, objectId, callback, errorCallback){
        this.initParse();
        if ((typeof classNameOrParseClass) == 'string'){
            this.loadClassItemById(classNameOrParseClass, objectId, callback, errorCallback);
        }else{
            this.loadClassItemByParseClass(classNameOrParseClass, objectId, callback, errorCallback);
        }
    },

    loadClassItemById: function(className, objectId, callback, errorCallback){
        var parseClass = Parse.Object.extend(className);
        this.loadClassItemByParseClass(parseClass, objectId, callback, errorCallback);
    },

    loadClassItemByParseClass: function(parseClass, objectId, callback, errorCallback){
        var q = new Parse.Query(parseClass);
        q.get(objectId, {
            success: function(o){
                callback(o);
            },
            error: function(){
                if (errorCallback != undefined){
                    errorCallback();
                }
            }
        });
    },

    uploadFileOnParse: function(file, callback){
        this.initParse();
        console.log('uploadFileOnParse occured: file = ', file);
        var name = Math.floor(1000 * Math.random()) + '_' + (new Date()).getTime();
        var serverUrl = 'https://api.parse.com/1/files/' + name;
        $.ajax({
            type: "POST",
            beforeSend: function(request) {
                request.setRequestHeader("X-Parse-Application-Id", constants.PARSE_APP_ID);
                request.setRequestHeader("X-Parse-REST-API-Key", constants.PARSE_REST_API_KEY);
                request.setRequestHeader("Content-Type", file.type);
            },
            url: serverUrl,
            data: file,
            processData: false,
            contentType: false,
            success: function(data) {
                callback(data.url);
            },
            error: function(data) {
                console.log('error while uploading file: ', data);
                //var obj = $.parseJSON(data);
                //alert(obj.error);
            }
        });
    },

    createParseObject: function(className, fields, callback){
        this.initParse();
        var A = Parse.Object.extend(className);
        var a = new A();
        for (var i in fields){
            var f = fields[i];
            a.set(f.name, f.val);
        }
        a.save().then(function(obj){
            callback(obj);
        });
    },

    updateParseObject: function(parseObject, fields, callback){
        this.initParse();
        if (parseObject == undefined){
            return;
        }
        var a = parseObject;
        for (var i in fields){
            var f = fields[i];
            a.set(f.name, f.val);
        }
        a.save().then(function(obj){
            callback(obj);
        });
    },

    /**
     *
     * @param parseObject - Parse Object
     * @param items - [name: '', val: '']
     */
    safeSet: function(parseObject, items){
        console.log('safeSet occured: items = ', items);
        if (parseObject == undefined || items == undefined || items.length == 0){
            return parseObject;
        }
        for (var i in items){
            var name = items[i].name;
            var val = items[i].value;
            if (name == undefined){
                continue;
            }
            if (val == undefined){
                parseObject.unset(name);
            }else{
                parseObject.set(name, val);
            }
        }
        return parseObject;
    },

    loadAllDataFromParseRecursively: function (q, page, createdAt, results, callback){
        console.log('loadAllDataFromParseRecursively occured: q = ', q);
        if (q == undefined){
            callback({error: 'q is not defined'});
            return;
        }
        q.limit(1000);
        q.skip(page * 1000);
        q.greaterThan('createdAt', createdAt);
        q.addAscending('createdAt');
        var self = this;
        q.find(function(list){
            if (page > 8){
                page = 0;
                createdAt = results[results.length - 1].createdAt;
            }
            page = page + 1;

            results = results.concat(list);
            if (list.length < 1000){
                callback(results);
                return;
            }
            self.loadAllDataFromParseRecursively(q, page, createdAt, results, callback);
        });
    },

    loadAllDataFromParse: function(q, callback){
        this.loadAllDataFromParseRecursively(q, 0, new Date(0), [], callback);
    }



}


module.exports = ParseMixin;
/**
 * Created by sabir on 06.12.15.
 */

var React = require('react');
var assign = require('object-assign');

var ContentEditor = require('../components/editor/ContentEditor');
var FileUploader = require('../components/file/FileUploader');

var CreateNewEventButton = require('../components/event/CreateNewEventButton');

var Datetime = require('react-datetime');

var SelfInitHeader = require('../components/header/SelfInitHeader');

var LoginMixin = require('../mixins/LoginMixin');

var SelfLoadingCardsList = require('../components/event/card/SelfLoadingCardsList');

var TopHeaderPanel = require('../components/panels/TopHeaderPanel');

var EventMixin = require('../mixins/EventMixin');

var TestApp = React.createClass({
    getDefaultProps: function () {
        return {
            user: undefined
        }
    },

    getInitialState: function () {
        return {}
    },

    componentWillReceiveProps: function (nextProps) {

    },

    componentDidMount: function () {

    },

    componentStyle: {
        placeholder: {

        }
    },

    onClick: function(){
        EventMixin.migrateTestEvents();
    },

    render: function () {

        return (
            <div style = {this.componentStyle.placeholder} >

                <button onClick={this.onClick} >
                    migrate
                </button>



            </div >
        );
    }
});

module.exports = TestApp;
/**
 * Created by sabir on 06.12.15.
 */

var React = require('react');
var assign = require('object-assign');

//var ReactQuill = require('react-quill');
var ReactQuill = require('react-quill');
var FileUploader = require('../file/FileUploader');

var PatientEditor = React.createClass({
    getDefaultProps: function () {
        return {
            noteId: undefined,
            //value: '<div>' +
            //'<img src="https://d13yacurqjgara.cloudfront.net/users/4593/screenshots/2300532/designtaughtmefreedom.png" /></div>' +
            //'<br/>'
            value: '',
            onContentChange: function(content){

            },
            fileMode: true
        }
    },

    getInitialState: function () {
        console.log('PatientEditor: getInitialState occured');
        return {
            value: this.props.value,
            updatingValue: false,
            mode: 'edit'
        }
    },

    componentWillReceiveProps: function (nextProps) {
        console.log('PatientEditor: componentWillReceiveProps occured: value = ', nextProps.value);
        if (nextProps.value != undefined){
            if (this.props.value == nextProps.value){
                console.log('this.props.value == nextProps.value --- returning');
                return;
            }
            this.updateValue(nextProps.value);
        }
    },

    componentDidMount: function () {

    },

    componentStyle: {
        placeholder: {
            //width: 630,
            //margin: '0 auto',
            border: '1px solid #EFF0F1',
            backgroundColor: 'white',
            position: 'relative',
            borderRadius: 3
        },

        customBlock: {
            position: 'absolute',
            right: 15,
            top: 8,
            //width: 70,
            height: 20
        },

        quillPlaceholder: {

        },

        fileUploaderStyle: {
            display: 'inline-block'
        },

        imageUploader: {
            display: 'inline-block',
            marginRight: 5
        },

        attachmentUploader: {
            display: 'inline-block'
        },

        switcherPlaceholder: {
            borderTop: '1px solid #EFF0F1',
            marginTop: 10,
            padding: 5,
            textAlign: 'right'
        },

        toggleButton: {
            cursor: 'pointer',
            opacity: 0.5,
            fontSize: '12px'
        },

        previewPlaceholder: {
            padding: 15
        }

    },

    onTextChange: function(value, delta, source){
        //console.log('onChange occured', value, delta, source);
        //console.log('value = ', value);
        this.setState({
            value: value
        });
        this.props.onContentChange(value);
    },

    updateValue: function(val){
        console.log('updateValue occured: val = ', val);
        this.setState({
            updatingValue: true
        });
        setTimeout(function(){
            this.setState({
                value: val,
                updatingValue: false
            });
            this.props.onContentChange(val);
        }.bind(this), 200);
    },

    onImageUploaded: function(url){
        var s = '<br/><br/><div style="text-align: center; max-width: 100%;" ><img style="max-width: 100%;" src="' + url + '" /></div><br/><br/>';
        var st = this.state.value + s;
        console.log('file uploaded: url = ' + url);
        console.log('new state = ', st);
        this.updateValue(st);
    },

    onAttachmentUploaded: function(url){
        var s = '<br/><div><a target="_blank" href="' + url + '" >загруженный файл (отредактируйте название)</a></div><br/>';
        var st = this.state.value + s;
        console.log('file uploaded: url = ' + url);
        console.log('new state = ', st);
        this.updateValue(st);
    },

    toggleMode: function(){
        if (this.state.mode == 'edit'){
            this.setState({mode: 'view'});
        }else{
            this.setState({mode: 'edit'});
        }
    },


    render: function () {

        var editorKey = 'patient_editor_' + this.props.noteId;
        var toolbarKey = 'patient_editor_toolbar_' + this.props.noteId;

        //console.log('PatientEditor render occured: value = ', this.state.value);

        return (
            <div style={this.componentStyle.placeholder}>


                {this.state.mode == 'edit' ?

                    <div>

                        {this.props.fileMode == false ? null :
                            <div style={this.componentStyle.customBlock}  >
                                <div style={this.componentStyle.imageUploader}>
                                    <FileUploader onFileUploaded={this.onImageUploaded} iconFiletypes={[]} containerClassName={'PatientEditorUploader'} style={this.componentStyle.fileUploaderStyle} />
                                </div>

                                <div style={this.componentStyle.attachmentUploader}>
                                    <FileUploader customIconClassName={'icon attach'} onFileUploaded={this.onAttachmentUploaded} iconFiletypes={[]} containerClassName={'PatientEditorUploader'} style={this.componentStyle.fileUploaderStyle} />
                                </div>
                            </div>
                        }


                        <div style={this.componentStyle.quillPlaceholder}>
                            {this.state.updatingValue == true ?
                                <div style={{minHeight: 70}} >
                                    <div className="ui active inverted dimmer">
                                        <div className="ui small text loader">Loading</div>
                                    </div>
                                </div>
                                :
                                <ReactQuill theme="snow" onChange={this.onTextChange}  >
                                    <ReactQuill.Toolbar key={toolbarKey}
                                                        ref="toolbar"
                                                        items={ReactQuill.Toolbar.defaultItems} />
                                    <div key={editorKey}
                                         ref="editor"
                                         className="quill-contents PatientEditorContents"
                                         dangerouslySetInnerHTML={{__html:this.state.value}} />
                                </ReactQuill>
                            }
                        </div>
                    </div>
                    :
                    <div style={this.componentStyle.previewPlaceholder} className={'PatientNote'} >
                        <div dangerouslySetInnerHTML={{__html:this.state.value}} ></div>
                    </div>
                }


                <div style={this.componentStyle.switcherPlaceholder}>
                        <span onClick={this.toggleMode} style={this.componentStyle.toggleButton} >
                            {this.state.mode == 'edit' ?
                                <span>
                                    <i className="file text outline icon" ></i> просмотр
                                </span>
                                :
                                <span>
                                    <i className="pencil icon" ></i> редактирование
                                </span>
                            }
                        </span>
                </div>

            </div>
        );
    }

});

module.exports = PatientEditor;
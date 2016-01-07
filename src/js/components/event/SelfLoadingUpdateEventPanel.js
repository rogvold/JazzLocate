/**
 * Created by sabir on 06.12.15.
 */

var React = require('react');
var assign = require('object-assign');

var EventMixin = require('../../mixins/EventMixin');

var FileUploader= require('../file/FileUploader');

var ContentEditor = require('../editor/ContentEditor');

var TopPanel = require('../event/TopPanel');

var DeleteButton = require('../button/DeleteButton');

var CommonMixin = require('../../mixins/CommonMixin');

var Datetime = require('react-datetime');

var moment = require('moment');

var SelfLoadingUpdateEventPanel = React.createClass({
    getDefaultProps: function () {
        return {
            userId: undefined,
            eventId: undefined,

            onEventUpdated: function(ev){

            },

            onEventCreated: function(ev){

            }
        }
    },

    getInitialState: function () {
        return {
            loading: false,
            needToSave: false,

            name: undefined,
            description: undefined,
            content: undefined,
            defaultContent: undefined,
            avatar: undefined,
            address: undefined,
            timestamp: undefined,

            datePickerVisible: true
        }
    },

    componentWillReceiveProps: function (nextProps) {

    },

    componentDidMount: function () {
        this.load();
    },

    componentStyle: {
        placeholder: {
            textAlign: 'left'
        },

        buttonPlaceholder: {
            marginTop: 15,
            textAlign: 'right'
        },

        contentBlock: {
            border: '1px solid #EFF0F1',
            backgroundColor: 'white',
            position: 'relative',
            borderRadius: 3,
            width: 900,
            padding: 5,
            margin: '0 auto',
            marginTop: 10
        },

        topBlock: {

        },

        label: {
            fontWeight: 'bold'
        }
    },


    load: function(){
        var eventId = this.props.eventId;
        if (eventId == undefined){
            return;
        }
        this.setState({
            loading: true
        });
        EventMixin.loadEvent(eventId, function(ev){
            console.log('evented loaded: ', ev);
            this.setState({
                loading: false,

                name: ev.name,
                description: ev.description,
                content: ev.content,
                defaultContent: ev.content,
                avatar: ev.avatar,
                address: ev.address,
                timestamp: ev.timestamp,
                creatorId: ev.creatorId

            });
        }.bind(this));
    },


    getValueFromEvt: function(evt){
        var val = evt.target.value;
        if (val == undefined) {return undefined;}
        if (val.trim() == '') {
            return undefined;
        }
        return val;
    },

    onNameChange: function(evt){
        this.setState({
            name: this.getValueFromEvt(evt),
            needToSave: true
        });
    },

    onAddressChange: function(evt){
        this.setState({
            address: this.getValueFromEvt(evt),
            needToSave: true
        });
    },

    onDescriptionChange: function(evt){
        this.setState({
            description: this.getValueFromEvt(evt),
            needToSave: true
        });
    },

    onSave: function(){
        var eventId = this.props.eventId;
        var name = this.state.name;
        var description = this.state.description;
        var content = this.state.content;
        var avatar = this.state.avatar;
        var address = this.state.address;
        var timestamp = this.state.timestamp;
        var creatorId = this.props.userId;
        this.setState({
            loading: true
        });
        if (eventId == undefined){

            EventMixin.createEvent(creatorId, name, description, content, avatar, address, timestamp,function(ev){
                this.setState({
                    loading: false
                });
                this.props.onEventCreated(ev);
            }.bind(this));

        }else {
            EventMixin.updateEvent(eventId, name, description, content, avatar, address, timestamp, function(ev){
                this.setState({
                    loading: false
                });
                this.props.onEventUpdated(ev);
            }.bind(this));
        }

    },

    deleteAvatar: function(){
        this.setState({
            avatar: undefined,
            needToSave: true
        });
    },

    onAvatarUploaded: function(url){
        this.setState({
            avatar: url,
            needToSave: true
        });
    },

    onContentChange: function(html){
        this.setState({
            content: html,
            needToSave: true
        });
    },

    onDelete: function(){
        var eventId = this.props.eventId;
        this.setState({
            loading: true
        });
        EventMixin.deleteEvent(eventId, function(){
            CommonMixin.forceTransitionTo('/#/');
            this.setState({
                loading: false
            });
        }.bind(this));
    },

    showDatepicker: function(){
        this.setState({
            datePickerVisible: true
        });
    },

    onDateChange: function(mom){
        var t = mom.unix() * 1000;
        console.log('changing date: t = ', t);
        console.log('date = ', new Date(t));
        this.setState({
            timestamp: t
        });
    },

    render: function () {

        var formattedDate = moment(this.state.timestamp).format('YYYY/MM/DD HH:mm');
        var date = new Date(this.state.timestamp);

        return (
            <div style={this.componentStyle.placeholder}>


                <div style={this.componentStyle.topBlock}>
                    <TopPanel name={this.state.name}
                              avatar={this.state.avatar}
                              description={this.state.description} />
                </div>

                <div style={this.componentStyle.contentBlock}>

                    <div className={'ui form'} >
                        <div style={this.componentStyle.label} >Name <sup style={{color: '#FC636B'}} >*</sup> </div>
                        <div className="field">
                            <input type="text" value={this.state.name} onChange={this.onNameChange} placeholder={'Event name'}  />
                        </div>

                        <div style={this.componentStyle.label} >Description <sup style={{color: '#FC636B'}} >*</sup> </div>
                        <div className="field">
                            <textarea type="text" value={this.state.description}
                                      onChange={this.onDescriptionChange}
                                      placeholder={'Event description'} ></textarea>
                        </div>

                        <div style={this.componentStyle.label} >Address <sup style={{color: '#FC636B'}} >*</sup> </div>
                        <div className="field">
                            <input type="text" value={this.state.address} onChange={this.onAddressChange} placeholder={'Event address'}  />
                        </div>


                            <div>
                                <div style={this.componentStyle.label} >Avatar </div>
                                {this.state.avatar == undefined ?
                                    <div>
                                        <div style={this.componentStyle.label} >Avatar</div>
                                        <FileUploader onFileUploaded={this.onAvatarUploaded}  />
                                    </div>
                                    :
                                    <div className={'ui red message'} style={{cursor: 'pointer'}} onClick={this.deleteAvatar} >
                                        <i className={'icon remove'} ></i> Удалить аватар
                                    </div>
                                }
                            </div>


                        <div style={this.componentStyle.label} >Date <sup style={{color: '#FC636B'}} >*</sup> </div>
                        <div className="field">
                            <div style={{width: 250, margin: '0 auto'}} >
                                <Datetime value={date} timeFormat={'HH:mm'} dateFormat={'YYYY/MM/DD'} onChange={this.onDateChange} input={false} open={this.state.datePickerVisible} />
                            </div>
                        </div>

                        <div>
                            <div style={this.componentStyle.label} >Content </div>
                            <ContentEditor value={this.state.defaultContent} onContentChange={this.onContentChange} />
                        </div>


                        <div style={this.componentStyle.buttonPlaceholder}>
                            <button className={'ui primary button '} onClick={this.onSave} disabled={!this.state.needToSave} >
                                <i  className={'icon save'} ></i> Save
                            </button>
                        </div>

                        {this.props.eventId == undefined ? null :
                            <div style={{marginTop: 15, marginBottom: 15}}>
                                <DeleteButton onDelete={this.onDelete} />
                            </div>
                        }



                    </div>

                </div>



                <div className={'ui inverted dimmer ' + (this.state.loading ? ' active ' : '') }>
                    <div className="ui indeterminate text loader">{'loading...'}</div>
                </div>

            </div>
        );
    }

});

module.exports = SelfLoadingUpdateEventPanel;
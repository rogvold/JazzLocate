/**
 * Created by sabir on 06.12.15.
 */

var React = require('react');
var assign = require('object-assign');
var TopPanel = require('./TopPanel');

var EditEventButton = require('./EditEventButton');

var BackgroundPhoto = require('../photo/BackgroundPhoto');

var moment = require('moment');

var EventPanel = React.createClass({
    getDefaultProps: function () {
        return {
            name: undefined,
            description: undefined,
            avatar: undefined,
            content: undefined,
            address: undefined,
            timestamp: undefined,

            eventId: undefined,

            editMode: false,

            onEventUpdated: function(ev){

            }
        }
    },

    getInitialState: function () {
        return {
            currentPage: 'home'
        }
    },

    componentWillReceiveProps: function (nextProps) {

    },

    componentDidMount: function () {

    },

    componentStyle: {
        placeholder: {
            
        },
        
        topPlaceholder: {
            margin: '0 auto',
            width: 915,
            marginBottom: 10,
            borderBottom: '1px solid #f0efef',
            borderLeft: '1px solid #f0efef',
            borderRight: '1px solid #f0efef',
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4
        },
        
        mainBLockPlaceholder: {
            margin: '0 auto',
            width: 915
        },

        leftBlock: {
            display: 'inline-block',
            verticalAlign: 'top',
            backgroundColor: 'white',
            border: '1px solid #f0efef',
            borderRadius: 4,
            width: 300,
            marginRight: 10
        },

        rightBlock: {
            display: 'inline-block',
            verticalAlign: 'top',
            backgroundColor: 'white',
            border: '1px solid #f0efef',
            padding: 10,
            borderRadius: 4,
            width: 605
        },

        contentPlaceholder: {

        },


        editButtonPlaceholder: {
            padding: 5,
            float: 'right',
            display: 'inline-block'
        },

        controlsBlock: {
            height: 40,
            backgroundColor: 'white',
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4
        },

        eventButtonStyle: {
            //cursor: 'pointer',
            //textDecoration: 'underline'
        },

        leftPhotoBlock: {
            padding: 10,
            borderBottom: '1px solid #f0efef'
        },

        addressBlock: {
            padding: 10,
            paddingBottom: 0,
            textAlign: 'justify',
            fontWeight: 'bold',
            fontSize: 16,
            color: '#2E3C54'
        },

        dateBlock: {
            padding: 10,
            borderBottom: '1px solid #f0efef',
            color: '#2E3C54'
        }

    },

    onEventUpdated: function(ev){
        this.props.onEventUpdated(ev);
    },

    render: function () {
        var content = this.props.content;
        var formattedDate = moment(this.props.timestamp).format('LLL');

        return (
            <div style={this.componentStyle.placeholder}>
    
                <div style={this.componentStyle.topPlaceholder}>
                    <TopPanel name={this.props.name}
                              description={this.props.description}
                              avatar={this.props.avatar} />

                    <div style={this.componentStyle.controlsBlock}>

                        {this.props.editMode == false ? null :
                            <div style={this.componentStyle.editButtonPlaceholder}>
                                <EditEventButton buttonClassName={'ui basic mini button'} style={this.componentStyle.eventButtonStyle} onEventUpdated={this.onEventUpdated} eventId={this.props.eventId}  />
                            </div>
                        }

                    </div>

                </div>


                {this.state.currentPage == 'home' ?
                    <div>
                        <div style={this.componentStyle.mainBLockPlaceholder}>

                            <div style={this.componentStyle.leftBlock}>

                                {this.props.avatar == undefined ? null :
                                    <div style={this.componentStyle.leftPhotoBlock}>
                                        <BackgroundPhoto photo={this.props.avatar} />
                                    </div>
                                }

                                {this.props.address == undefined ? null :
                                    <div style={this.componentStyle.addressBlock}>
                                        <i className={'icon marker'} ></i>
                                            {this.props.address}
                                    </div>
                                }

                                {this.props.timestamp == undefined ? null :
                                    <div style={this.componentStyle.dateBlock}>
                                        <i className={'icon calendar'} ></i>
                                        {formattedDate}
                                    </div>
                                }

                            </div>

                            <div style={this.componentStyle.rightBlock}>

                                {(content == undefined || content.trim() == '') ? null :
                                    <div style={this.componentStyle.contentPlaceholder} className={'event-content'} >
                                        <div dangerouslySetInnerHTML={{__html: content}} ></div>
                                    </div>
                                }

                            </div>

                        </div>

                    </div> : null
                }



                
            </div>
        );
    }

});

module.exports = EventPanel;
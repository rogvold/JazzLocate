/**
 * Created by sabir on 06.12.15.
 */

var React = require('react');
var assign = require('object-assign');

var EventMixin = require('../../mixins/EventMixin');

var EventPanel = require('./EventPanel');

var SelfLoadingEventPanel = React.createClass({
    getDefaultProps: function () {
        return {
            eventId: undefined,
            userId: undefined,
            editMode: false
        }
    },

    getInitialState: function () {
        return {
            loading: false,

            name: undefined,
            description: undefined,
            content: undefined,
            avatar: undefined,
            address: undefined,
            creatorId: undefined
        }
    },

    componentWillReceiveProps: function (nextProps) {

    },

    componentDidMount: function () {
        this.load();
    },

    componentStyle: {
        placeholder: {}
    },

    onEventUpdated: function(ev){
        this.setState({
            name: ev.name,
            description: ev.description,
            content: ev.content,
            avatar: ev.avatar,
            address: ev.address
        });
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
                avatar: ev.avatar,
                address: ev.address,
                timestamp: ev.timestamp,
                creatorId: ev.creatorId
            });
        }.bind(this));
    },

    render: function () {
        var eventLoaded = (this.state.name != undefined);

        var editMode = false;
        if (this.state.creatorId != undefined && this.props.userId != undefined && this.state.creatorId == this.props.userId){
            editMode = true;
        }

        console.log('rendering SelfLoadingEventPanel: editMode = ', editMode);

        return (
            <div style={this.componentStyle.placeholder}>

                {eventLoaded == false ? null :

                    <div>
                        <EventPanel name={this.state.name} description={this.state.description}
                                    content={this.state.content} avatar={this.state.avatar}
                                    address={this.state.address}
                                    timestamp={this.state.timestamp}
                                    eventId={this.props.eventId}
                                    editMode={editMode}
                                    onEventUpdated={this.onEventUpdated}
                        />

                    </div>

                }

                <div className={'ui inverted dimmer ' + (this.state.loading ? ' active ' : '') }>
                    <div className="ui indeterminate text loader">{'loading...'}</div>
                </div>

            </div>
        );
    }

});

module.exports = SelfLoadingEventPanel;
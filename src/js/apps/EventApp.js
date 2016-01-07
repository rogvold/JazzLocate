/**
 * Created by sabir on 06.12.15.
 */

var React = require('react');
var assign = require('object-assign');
var LoginMixin = require('../mixins/LoginMixin');


var CreateNewEventButton = require('../components/event/CreateNewEventButton');

var SelfInitHeader = require('../components/header/SelfInitHeader');

var SelfLoadingEventPanel = require('../components/event/SelfLoadingEventPanel');



var EventApp = React.createClass({
    getDefaultProps: function () {
        return {}
    },

    getInitialState: function () {
        return {
            user: LoginMixin.getCurrentUser()
        }
    },

    componentWillReceiveProps: function (nextProps) {

    },

    componentDidMount: function () {

    },

    getLinksComponent: function(){
        var user = LoginMixin.getCurrentUser();
        var isLoggedIn = (user != undefined);
        return (
            <div>
                {isLoggedIn == false ? null :
                    <div style={this.componentStyle.topLinksBlock} >
                        <div style={this.componentStyle.buttonsContainer}>
                            <CreateNewEventButton
                                buttonClassName={'ui button inverted white mini'} />
                        </div>
                    </div>
                }
            </div>
        );
    },

    componentStyle: {
        placeholder: {}
    },

    render: function () {
        var currentUser = this.state.user;
        var userId = ((currentUser == undefined) ? undefined : currentUser.id);
        var eventId = this.props.params.eventId;

        console.log('rendering event app: eventId = ' + eventId + ' , userId = ' + userId);


        return (
            <div style={this.componentStyle.placeholder}>
                <SelfInitHeader customHeaderComponent={this.getLinksComponent()} />
                <SelfLoadingEventPanel userId={userId} eventId={eventId} />
            </div>
        );
    }

});

module.exports = EventApp;
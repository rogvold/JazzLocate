/**
 * Created by sabir on 06.12.15.
 */

var React = require('react');
var assign = require('object-assign');

var ProducthuntDialog = require('../dialog/producthunt/ProducthuntDialog');

var SelfLoadingUpdateEventPanel = require('./SelfLoadingUpdateEventPanel');

var CommonMixin = require('../../mixins/CommonMixin');

var LoginMixin = require('../../mixins/LoginMixin');

var CreateNewEventButton = React.createClass({
    getDefaultProps: function () {
        return {

            buttonName: 'New event',
            icon: 'icon plus',
            buttonClassName: 'ui basic button',

            style: {

            }

        }
    },

    getInitialState: function () {
        return {
            dialogVisible: false
        }
    },

    componentWillReceiveProps: function (nextProps) {

    },

    componentDidMount: function () {

    },

    componentStyle: {
        placeholder: {
            display: 'inline-block'
        }
    },

    onEventCreated: function(ev){
        console.log('event is created! ', ev);
        CommonMixin.forceTransitionTo('/#/event/' + ev.id);
    },

    getDialogContent: function(){


        var currentUser = LoginMixin.getCurrentUser();
        var userId = (currentUser == undefined) ? undefined : currentUser.id;

        return (
            <SelfLoadingUpdateEventPanel userId={userId} onEventCreated={this.onEventCreated} />
        );

    },

    onClose: function(){
        this.setState({
            dialogVisible: false
        });
    },

    onClick: function(){
        this.setState({
            dialogVisible: true
        });
    },

    render: function () {

        var st = assign({}, this.componentStyle.placeholder, this.props.style);

        return (
            <div style={st} >
                <div className={this.props.buttonClassName} onClick={this.onClick} >
                    <i className={this.props.icon} ></i> {this.props.buttonName}
                </div>

                {this.state.dialogVisible == false ? null :

                    <ProducthuntDialog onClose={this.onClose} content={this.getDialogContent()} />

                }

            </div>
        );
    }

});

module.exports = CreateNewEventButton;
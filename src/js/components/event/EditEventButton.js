/**
 * Created by sabir on 06.12.15.
 */

var React = require('react');
var assign = require('object-assign');

var ProducthuntDialog = require('../dialog/producthunt/ProducthuntDialog');

var SelfLoadingUpdateEventPanel = require('./SelfLoadingUpdateEventPanel');

var CommonMixin = require('../../mixins/CommonMixin');

var LoginMixin = require('../../mixins/LoginMixin');

var EditEventButton = React.createClass({
    getDefaultProps: function () {
        return {

            eventId: undefined,

            buttonName: 'Edit event',
            icon: 'icon pencil',
            buttonClassName: 'ui basic button',

            style: {

            },

            onEventUpdated: function(ev){

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

    onEventUpdated: function(ev){
        console.log('event is created! ', ev);
        this.setState({
            dialogVisible: false
        });
        this.props.onEventUpdated(ev);
    },

    getDialogContent: function(){


        var currentUser = LoginMixin.getCurrentUser();
        var userId = (currentUser == undefined) ? undefined : currentUser.id;

        return (
            <SelfLoadingUpdateEventPanel eventId={this.props.eventId} userId={userId}
                                         onEventUpdated={this.onEventUpdated} />
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

module.exports = EditEventButton;
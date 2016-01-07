/**
 * Created by sabir on 06.12.15.
 */

var React = require('react');
var assign = require('object-assign');

var AuthForm = require('../components/user/AuthForm');
var LoginMixin = require('../mixins/LoginMixin')

var CommonMixin = require('../mixins/CommonMixin');

var LoginApp = React.createClass({
    getDefaultProps: function () {
        return {
            onLogin: function(){

            }
        }
    },

    getInitialState: function () {
        return {}
    },

    componentWillReceiveProps: function (nextProps) {

    },

    componentDidMount: function () {

    },

    onLogin: function(){
        //LoginMixin.lo
        console.log('onLogin occured - redirecting');
        //window.location.reload();
        CommonMixin.forceTransitionTo('/#/');
    },

    componentStyle: {
        placeholder: {

        },

        topBlock: {
            margin: '0 auto',
            marginTop: 20,
            marginBottom: 20,
            width: 300,
            textAlign: 'center'
        },

        logo: {
            width: 120
        }


    },

    render: function () {

        return (
            <div style={this.componentStyle.placeholder}>

                <div style={this.componentStyle.topBlock} >
                    Welcome to JazzLocate website
                </div>

                <AuthForm onLogin={this.onLogin} />
            </div>
        );
    }

});

module.exports = LoginApp;
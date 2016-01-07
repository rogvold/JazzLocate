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

var IndexApp = React.createClass({
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

            },

            topLinksBlock: {
                display: 'inline-block',
                paddingRight: 50
            },

            buttonsContainer: {
                display: 'inline-block'

            },

            cardsPlaceholder: {
                width: 930,
                margin: '0 auto',
                marginTop: 10
            }
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

        render: function () {

            return (
                <div style = {this.componentStyle.placeholder} >
                    <SelfInitHeader customHeaderComponent={this.getLinksComponent()} />

                    <TopHeaderPanel />

                    <div style={this.componentStyle.cardsPlaceholder}>
                        <SelfLoadingCardsList />
                    </div>



                </div >
            );
        }
});

module.exports = IndexApp;
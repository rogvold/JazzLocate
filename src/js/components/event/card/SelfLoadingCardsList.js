/**
 * Created by sabir on 11.12.15.
 */

var React = require('react');
var assign = require('object-assign');

var EventMixin = require('../../../mixins/EventMixin');

var EventCardsList = require('./EventCardsList');

var SelfLoadingCardsList = React.createClass({
    getDefaultProps: function () {
        return {}
    },

    getInitialState: function () {
        return {
            loading: false,
            cards: []
        }
    },

    componentWillReceiveProps: function (nextProps) {

    },

    componentDidMount: function () {
        this.load();
    },

    load: function(){
        this.setState({
            loading: true
        });
        EventMixin.loadAllEvents(function(cards){
            this.setState({
                loading: false,
                cards: cards
            });
        }.bind(this));
    },

    componentStyle: {
        placeholder: {

        },
        cardsPlaceholder: {

        }
    },

    render: function () {

        return (
            <div style={this.componentStyle.placeholder}>

                <div style={this.componentStyle.cardsPlaceholder}>
                    <EventCardsList cards={this.state.cards} />
                </div>

                <div className={'ui inverted dimmer ' + (this.state.loading ? ' active ' : '') }>
                    <div className="ui indeterminate text loader">{'loading...'}</div>
                </div>


            </div>
        );
    }

});

module.exports = SelfLoadingCardsList;
/**
 * Created by sabir on 11.12.15.
 */

var React = require('react');
var assign = require('object-assign');

var EventCard = require('./EventCard');
var CommonMixin = require('../../../mixins/CommonMixin');

var EventCardslist = React.createClass({
    getDefaultProps: function () {
        return {
            cards: []
        }
    },

    getInitialState: function () {
        return {

        }
    },

    componentWillReceiveProps: function (nextProps) {

    },

    componentDidMount: function () {

    },

    componentStyle: {
        placeholder: {}
    },

    onCardClick: function(card){
        var id = card.id;
        CommonMixin.forceTransitionTo('/#/event/' + id);
    },

    render: function () {
        var list = this.props.cards;
        return (
            <div style={this.componentStyle.placeholder}>
                {list.map(function(card, k){
                    var key = 'card_' + k;
                    var onCardClick = this.onCardClick.bind(this, card);
                    return (
                        <EventCard key={key} name={card.name}
                                   onCardClick={onCardClick}
                                   description={card.description} avatar={card.avatar} />
                    );

                }, this)}
            </div>
        );
    }

});

module.exports = EventCardslist;
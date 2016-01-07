/**
 * Created by sabir on 06.12.15.
 */
var React = require('react');

var UserItem = React.createClass({

    getDefaultProps: function() {
        return {
            name: null,
            avatar: null
        };
    },

    componentStyle: {
        member: {
            display: 'inline-block',
            margin: 5
        },
        avatar: {
            width: 50,
            height: 50
        },
        name: {
            fontSize: 11,
            textAlign: 'center'
        }
    },

    render: function() {
        return (
            <div style={this.componentStyle.member}>
                <img style={this.componentStyle.avatar} src={this.props.avatar}/>

                <div style={this.componentStyle.name}><span>{this.props.name}</span></div>
            </div>
        );
    }

});

module.exports = UserItem;
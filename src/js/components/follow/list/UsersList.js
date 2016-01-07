/**
 * Created by sabir on 06.12.15.
 */
var React = require('react');
var assign = require('object-assign');

var UserItem = require('./UserItem');

var UsersList = React.createClass({

    getDefaultProps: function() {
        return {
            list: [],
            style: {}
        };
    },

    componentDidMount: function() {
        console.log(this.props.list);
    },

    componentStyle: {
        placeholder: {
            width: 300,
            height: 200,
            border: 'solid 2px',
            overflowY: 'auto'
        },
        members: {
            width: 184,
            margin: '0 auto'
        }
    },

    render: function() {
        var self = this;
        var st = assign({}, this.componentStyle.placeholder, this.props.style);
        return (
            <div style={st}>
                <div style={this.componentStyle.members}>
                    {this.props.list.map(function(e, i) {
                        return (
                            <UserItem avatar={e.avatar} name={e.name}/>
                        );
                    })
                    }
                </div>
            </div>
        );
    }
});

module.exports = UsersList;
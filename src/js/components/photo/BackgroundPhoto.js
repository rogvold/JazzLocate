/**
 * Created by sabir on 06.12.15.
 */

var React = require('react');
var assign = require('object-assign');

var BackgroundPhoto = React.createClass({
    getDefaultProps: function () {
        return {

            photo: undefined,
            style: {
                height: 150,
                width: '100%'
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

    componentStyle: {
        placeholder: {
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
        }
    },

    render: function () {
        var st = assign({}, this.componentStyle.placeholder, this.props.style, {backgroundImage: 'url("' + this.props.photo + '")'});

        return (
            <div style={st}>

            </div>
        );
    }

});

module.exports = BackgroundPhoto;
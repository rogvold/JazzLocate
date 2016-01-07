/**
 * Created by sabir on 11.12.15.
 */

var React = require('react');
var assign = require('object-assign');

var TopHeaderPanel = React.createClass({
    getDefaultProps: function () {
        return {
            avatar: 'http://jazz.englishpatient.org/assets/img/ButmanTiny.jpg',
            name: 'Jazz Locate',
            description: 'Here you can find recent jazz concerts and events near you'
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
            height: 400,
            borderBottom: '3px solid white',
            //textAlign: 'center',
            color: 'white',
            position: 'relative',
            width: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
        },

        topPanelOverlay: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: 1,
            backgroundColor: '#2E3C54',
            opacity: 0.9
        },

        topPanelOverlayPanel: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: 2,
            padding: 20
        },

        namePlaceholder: {
            fontSize: 50,
            marginTop: 20
        },

        descriptionPlaceholder: {
            marginTop: 25,
            fontSize: 32,
            width: 500,
            lineHeight: '40px',
            opacity: 0.9
        },

        contentPlaceholder: {
            width: 930,
            margin: '0 auto',
            marginTop: 100
        }
    },

    render: function () {
        var st = assign({}, this.componentStyle.placeholder, {backgroundImage: 'url("' + this.props.avatar + '")'});

        return (
            <div style={st}>
                <div style={this.componentStyle.topPanelOverlay}></div>

                <div style={this.componentStyle.topPanelOverlayPanel}>

                    <div style={this.componentStyle.contentPlaceholder}>
                        <div style={this.componentStyle.namePlaceholder}>
                            {this.props.name}
                        </div>

                        <div style={this.componentStyle.descriptionPlaceholder}>
                            {this.props.description}
                        </div>
                    </div>




                </div>
            </div>
        );
    }

});

module.exports = TopHeaderPanel;
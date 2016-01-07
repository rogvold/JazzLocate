/**
 * Created by sabir on 09.12.15.
 */

var React = require('react');
var assign = require('object-assign');

var EventCard = React.createClass({
    getDefaultProps: function () {
        return {
            avatar: 'http://www.unoosa.org/res/timeline/index_html/space-2.jpg',
            name: 'Default Name',
            description: '',
            onCardClick: function(){

            },
            style: {

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
            minHeight: 160,
            margin: 10,
            display: 'inline-block',
            cursor: 'pointer',
            position: 'relative',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        },

        overlayPanel: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1,
            backgroundColor: '#2E3C54',
            opacity: 0.7,
            borderRadius: '3px'
        },

        panel: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            padding: 5,
            zIndex: 2,
            color: 'white'
        },

        editablePanel: {
            zIndex: 3,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            cursor: 'pointer'
        },

        information: {
            width: '90%',
            position: 'absolute',
            bottom: 10,
            left: 10
        },

        header: {
            fontSize: '18px',
            fontWeight: 'bold'
        },

        description: {
            fontSize: '13px',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            maxWidth: '100%',
            opacity: 0.8,
            whiteSpace: 'nowrap'
        },

        superOverlay: {
            zIndex: 5,
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#2E3C54',
            opacity: 0.95,
            borderRadius: '3px'
        },

        superOverlayPanel: {
            zIndex: 10,
            left: 0,
            right: 0,
            bottom: 0,
            position: 'absolute',
            top: 0,
            padding: 5,
            height: '100%',
            display: 'table',
            color: 'white'
        },

        hoverPanelsPlaceholder: {
            top: 0,
            bottom: 0,
            right: 0,
            textAlign: 'center',
            left: 0,
            position: 'absolute'
        }
    },

    render: function () {
        var st = assign({}, this.componentStyle.placeholder,
            {backgroundImage: 'url(\'' + this.props.avatar + '\')'}, this.props.style);
        return (
            <div style={st} className={'ui card'} onClick={this.props.onCardClick} >
                <div className={'exerciseCardOverlay'} style={this.componentStyle.overlayPanel} ></div>

                <div style={this.componentStyle.panel} >
                    <div style={this.componentStyle.information}>
                        <div style={this.componentStyle.header}>
                            {this.props.name}
                        </div>
                        <div style={this.componentStyle.description}>
                            {this.props.description}
                        </div>
                    </div>
                </div>

            </div>
        );
    }

});

module.exports = EventCard;
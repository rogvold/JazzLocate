/**
 * Created by sabir on 06.12.15.
 */


var React = require('react');
var ParseMixin = require('../../mixins/ParseMixin');

//var HeaderPanel = require('../../../react/commonComponents/headers/HeaderPanel');
var HeaderPanel = require('./HeaderPanel');
var AuthButton = require('../user/AuthButton');

var Parse = require('parse').Parse;

var SelfInitHeader = React.createClass({
    getDefaultProps: function () {
        return {
            links: [],
            //logo: 'http://beta.englishpatient.org/home/img/logo_mini.png',
            logo: 'http://www.iconhot.com/icon/png/music-library/256/saxophone.png',
            logoText: 'Jazz Locate',
            dropdownLinks: [{
                name: 'Sign out',
                icon: 'ui sign out icon',
                onClick: function(){
                    Parse.User.logOut().then(function(){
                        window.location.reload();
                    });
                }
            }],
            extraLogo: undefined,
            extraLogoText: undefined,
            customHeaderComponent: null
        }
    },

    getInitialState: function () {
        return {
            user: undefined
        }
    },

    initCurrentUser: function(){
        var u = Parse.User.current();
        if (u != undefined){
            var firstName = u.get('firstName');
            var lastName = u.get('lastName');
            var name = (firstName == undefined ? '' : firstName) + ' ' + (lastName == undefined ? '' : lastName);
            if (name == ' '){
                name = u.get('email');
            }
            this.setState({
                user: {
                    name: name,
                    avatar: u.get('avatar')
                }
            });
        }

    },

    componentWillReceiveProps: function (nextProps) {

    },

    onDropdownLinkClick: function(num){
        var ls = this.props.dropdownLinks;
        if ( ls!= undefined && ls.length > num ){
            ls[num].onClick();
        }
    },

    componentDidMount: function () {
        ParseMixin.initParse();
        this.initCurrentUser();
    },

    componentStyle: {
        placeholder: {}
    },

    render: function () {
        var isLoggedIn = (this.state.user != undefined);
        return (
            <div style={this.componentStyle.placeholder}>
                <HeaderPanel extraLogo={this.props.extraLogo} extraLogoText={this.props.extraLogoText}
                             logo={this.props.logo} logoText={this.props.logoText}
                             onDropdownLinkClick={this.onDropdownLinkClick} dropdownLinks={this.props.dropdownLinks}
                             isLoggedIn={isLoggedIn} user={this.state.user} links={this.props.links}
                             customLoginButtonComponent={<AuthButton />}
                             customHeaderComponent={this.props.customHeaderComponent}
                    />
            </div>
        );
    }

});

module.exports = SelfInitHeader;
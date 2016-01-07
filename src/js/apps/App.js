var React = require('react');
var assign = require('object-assign');

var createHashHistory = require('history').createHashHistory;

var LoginMixin = require('../mixins/LoginMixin');
var ParseMixin = require('../mixins/ParseMixin');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;
var createHashHistory = require('history').createHashHistory;

var IndexApp = require('./IndexApp');
var EventApp = require('./EventApp');
var LoginApp = require('./LoginApp');
var TestApp = require('./TestApp');

var App = React.createClass({
    getDefaultProps: function () {
        return {

        }
    },

    getInitialState: function () {
        return {}
    },

    componentWillReceiveProps: function (nextProps) {

    },

    componentDidMount: function () {
        ParseMixin.initParse();
    },

    componentStyle: {
        placeholder: {}
    },

    getNotLoggedInContent: function(){
        return (
            <Router history={createHashHistory({queryKey: false})}>
                <Route useAutoKeys={false} path="/" component={IndexApp} >
                    <IndexRoute component={IndexApp} />
                </Route>
                <Route path="/login" component={LoginApp}>
                    <IndexRoute component={LoginApp} />
                </Route>
                <Route path="/test" component={TestApp}>
                    <IndexRoute component={TestApp} />
                </Route>

                <Route path="/event/:eventId" component={EventApp}/>
            </Router>
        );
    },

    getLoggedInContent: function(){
        return (
            <Router history={createHashHistory({queryKey: false})}>
                <Route useAutoKeys={false} path="/" component={IndexApp} >
                    <IndexRoute component={IndexApp} />
                </Route>
                <Route path="/test" component={TestApp}>
                    <IndexRoute component={TestApp} />
                </Route>
                <Route path="/event/:eventId" component={EventApp}/>
            </Router>
        );
    },

    render: function () {

        var currentUser = LoginMixin.getCurrentUser();
        console.log('RENDERING APP: current user is ', currentUser);
        var content = null;
        var isLoggedIn = LoginMixin.isLoggedIn();
        if (isLoggedIn == false){
            content = this.getNotLoggedInContent();
        }else{
            content = this.getLoggedInContent();
        }

        return (
            <div style={this.componentStyle.placeholder}>
                {content}
            </div>
        );
    }

});


React.render((<App />

), document.getElementById('main'));

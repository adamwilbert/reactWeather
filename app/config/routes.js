var React = require('react')
var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var IndexRoute = ReactRouter.IndexRoute
var hashHistory = ReactRouter.hashHistory
var Main = require('../components/Main')
var Home = require('../components/Home')
var Weather = require('../components/Weather')


var routes = (
  <Router history = {hashHistory}>
    <Route path='/' component={Main}>
      <Route path='/getWeather' component={Weather}/>
      <IndexRoute component={Home}/>

    </Route>
  </Router>
)

module.exports = routes

var React = require('react')
var ReactRouter = require('react-router')
var MainContainer = require('./MainContainer')
var styles = require('../styles')

var Home = React.createClass({
  render: function () {
    return (
      <MainContainer style={styles.bg}>
      <h1>Hello World</h1>
      </MainContainer>
    )
  }
})

module.exports = Home

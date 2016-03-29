var React = require('react')
var ReactRouter = require('react-router')
var MainContainer = require('./MainContainer')
var styles = require('../styles')

var Home = React.createClass({
  render: function () {
    return (
      <MainContainer>
      <h1 style={styles.mainTitle}>Enter a City and State </h1>
      <input className="form-control" type="text" placeholder="Los Angeles, CA"></input>
      <button className='btn btn-success'>Get Weather</button>

      </MainContainer>
    )
  }
})

module.exports = Home

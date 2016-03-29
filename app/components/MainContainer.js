var React = require('react')
var styles = require('../styles')

function MainContainer (props) {
  return (
    <div style={styles.bg} >
    {props.children}
    </div>
  )
}

module.exports = MainContainer

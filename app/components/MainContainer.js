var React = require('react')
var styles = require('../styles')

function MainContainer (props) {
  return (
    <div style={styles.bg} className='container' >
    {props.children}
    </div>
  )
}

module.exports = MainContainer

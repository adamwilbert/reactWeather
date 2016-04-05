var React = require('react')
var styles = require('../styles')

function MainContainer (props) {
  return (

    <div style={styles.bg} className='container' >
      <div>
        <h1>
        WHETHER
        </h1>
      </div>
    {props.children}
    </div>
  )
}

module.exports = MainContainer

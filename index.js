import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'

const App = ({ name }) => {
  return (
     <h1>Hello, {name}!</h1>
  )
}
App.propTypes = {
  name: PropTypes.string.isRequired,
}

ReactDOM.render(
  <App name='React' />,
  document.getElementById('root')
)

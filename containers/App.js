import React, { Component, PropTypes } from 'react'

const Greeting = ({ msg }) => {
  return (
    <div>
      <h1>{msg}</h1>
    </div>
  )
}

Greeting.propTypes = {
  msg: PropTypes.string,
}

class App extends Component {
  render() {
    return (
      <div>
        <Greeting msg='Hello React!' />
      </div>
    )
  }
}

App.propTypes = {
  name: PropTypes.string,
}

export default App


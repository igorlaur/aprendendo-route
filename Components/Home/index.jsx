import React from 'react'
import { Link, Route } from 'react-router-dom'

export default class Home extends React.Component {

  render () {
    return (
      <Route>
        <h1>Seja bem-vindo</h1>
        <Link to="/nextPage">Nova página</Link>
      </Route>
    )
  }
}
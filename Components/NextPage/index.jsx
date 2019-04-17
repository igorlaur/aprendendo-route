import React from 'react'
import { Route } from 'react-router-dom'

export default class NextPage extends React.Component {
  render () {
    return (
      <Route>
        <p>Seja bem-vindo a nova página!</p>
      </Route>
    )
  }
} 
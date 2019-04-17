import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../Components/Home'
import NextPage from '../Components/NextPage'

export default class Route extends React.Component{
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/nextPage" component={NextPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}
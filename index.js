import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link, Router } from 'react-router-dom'
import Routes from './routes'
import './style.css'

class App extends Component {

  render() {
    return (
      <Routes/>
    );
  }
}

render(<App />, document.getElementById('root'));

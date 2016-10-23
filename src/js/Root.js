import React, { Component, PropTypes } from 'react'
import { Router } from 'react-router'

export default class Root extends Component {
  render() {
    const { history, routes } = this.props;

    return (
      <Router
        history={history}
        routes={routes} />
      )
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired
}

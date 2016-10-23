import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'
import { aboutPath, contactPath } from './constants/routeNames'

import App from './containers/App'
import BookList from './containers/BookList'

export default (
  <Route path="/" component={App}>
    <Route path="book-list" component={BookList} />
    <Route path={aboutPath} component={BookList} />
    <Route path={contactPath} component={BookList} />
  </Route>
)

import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import BookList from './containers/BookList'

export default (
  <Route path="/" component={App}>
    <Route path="book-list" component={BookList} />
  </Route>
)

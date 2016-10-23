/* eslint-env browser */

import Root from './Root';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import routes from './routes';

//Styles
import styles from '../sass/styles.scss';

const root = document.getElementById('root');

ReactDOM.render(<Root history={browserHistory} routes={routes}/>, root);

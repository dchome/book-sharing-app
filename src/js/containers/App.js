import React from 'react';
import Header from './Header'

export default class App extends React.Component {
    constructor () {
        super();
    }

    render() {
      const { children } = this.props;
        return (
            <div className="site-root">
                <Header />
                {children}
            </div>
        );
    }
}

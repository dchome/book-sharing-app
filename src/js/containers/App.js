import React from 'react';

export default class App extends React.Component {
    constructor () {
        super();
    }

    render() {
      const { children } = this.props;
        return (
            <div>
            hello from app
                {children}
            </div>
        );
    }
}

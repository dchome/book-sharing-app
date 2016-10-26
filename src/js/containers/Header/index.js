import React, { Component, PropTypes } from 'react'
import HeaderTemplate from './template'
import { withRouter } from 'react-router'
import { headerLinks } from './constants'
import { tablet, desktop } from '../../constants/breakpoints'

// TODO: add logic for authentication / showing logged in state

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            links: headerLinks,
            isMobileNavOpen: false,
        };
    }

    handleTitleClick(event) { // TODO debounce
        const { router } = this.props;
        const { isMobileNavOpen } = this.state;

        if (window.innerWidth >= tablet || isMobileNavOpen) {
            this.setState({
                isMobileNavOpen: false
            }, () => {
                router.push({pathname: "/"});
            });
        } else {
            this.setState({
                isMobileNavOpen: true
            })
        }
    }

    render() {
        const { links, isMobileNavOpen } = this.state;

        return (
            <HeaderTemplate links={links}
                            isMobileNavOpen={isMobileNavOpen}
                            handleTitleClick={this.handleTitleClick.bind(this)}/>
        )
    }
}

Header.propTypes = {

};

export default withRouter(Header);
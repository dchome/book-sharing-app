import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

class HeaderLink extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { children, linkTo, className, onClick } = this.props;

        return (
            <Link className={classNames("header-link", {[className]: className})}
                  to={linkTo}
                  onClick={onClick}>
                {children}
            </Link>
        )
    }
}

HeaderLink.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onClick: PropTypes.func,
    linkTo: PropTypes.object.isRequired,
    className: PropTypes.string,
};


export default class HeaderTemplate extends Component {
    constructor(props) {
        super(props)
    }

    handleTitleClick() {
        const { handleTitleClick } = this.props;

        handleTitleClick();
    }

    render() {
        const { links, isMobileNavOpen } = this.props;
        let keyCounter = 0;

        return (
            <div className={classNames("site-main-header-root", {"active": isMobileNavOpen})}>
                <div className="header-inner">
                    <h1 className="site-title" onClick={this.handleTitleClick.bind(this)}>
                        BookFinder
                    </h1>
                    <h3 className="site-subheading">
                        Rent or share books in your neighborhood
                    </h3>
                    <ul className="header-link-list">
                        {(() => {
                            return (
                                links.map((link) => {
                                    return (
                                        <li className="header-link-item" key={keyCounter++}>
                                            <HeaderLink linkTo={link.path}>
                                                {link.displayText}
                                            </HeaderLink>
                                        </li>
                                    )
                                })
                            )
                        })()}
                    </ul>
                </div>
            </div>
        )
    }
}

HeaderTemplate.propTypes = {
    links: PropTypes.array.isRequired,
    handleTitleClick: PropTypes.func.isRequired,
    isMobileNavOpen: PropTypes.bool.isRequired
};
import React, { Component } from 'react';

/**
 * Renders the header component.
 */
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand">Github User Directory</div>
                </div>
            </nav>
        );
    }
}

export default Header;
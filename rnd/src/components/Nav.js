import React, { Component } from 'react';

class Nav extends Component {
    state = {  }
    render() {
        console.log('Nav.render called');
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
            </nav>
        );
    }
}

export default Nav;
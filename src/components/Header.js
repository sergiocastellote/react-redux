import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {

        return (
            <section id="header">
                <div className="container">
                    <div className="row">
                        <div className="header">
                            <h1 className="header-title title"><a href="index.html" id="logo">React & Redux Example</a></h1>
                            <nav className="header-menu" id="nav">
                                <Link to='/form'>New Post</Link>
                                <Link to='/'>List</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;
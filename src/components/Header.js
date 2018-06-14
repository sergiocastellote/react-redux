import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <section id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>React & Redux Example</h1>
                            <nav id="nav">
                                <div>
                                    <li><Link to='/form'>New Post</Link></li>
                                    <li><Link to='/list'>List</Link></li>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Header;
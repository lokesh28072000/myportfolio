import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="pagetext1">

            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link></li>
                <li>
                    <Link to="/contact">CONTACT</Link>
                </li>
                <li>
                    <Link to="/project">PROJECTS</Link>
                </li>
            </ul>
        </div>
    )
}
export default Navbar

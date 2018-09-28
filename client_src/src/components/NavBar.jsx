import React from "react";
import { Link } from 'react-router-dom';

function NavBar() {
    const styles = {
        display: "flex",
        justifyContent: "center"
    }
    return (
        <nav style={styles} className="nav-extended  blue-grey darken-2">
            <div className="nav-content">
                <ul className="tabs tabs-transparent">
                    <li className="tab"><Link to="/">Leave Details</Link></li>
                    <li className="tab"><Link to='/getdata'>Get Details</Link></li>
                </ul>
            </div>
        </nav>

    );
}

export default NavBar;
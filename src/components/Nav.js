import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="nav">
        <h1>stocks<span className="lightest">pro</span></h1>
        <div className="buttonrow">
            <Link to="/">
                <div>Companies</div>
            </Link>
            <Link to="/companies">
                <div>Home</div>
            </Link>
            <Link to="/about">
                <div>About</div>
            </Link>
            </div>
        </div>
    );
};

export default Nav;
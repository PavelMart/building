import React from "react";
import logo from "../assets/images/logo.png";

const Logo = ({ type, className }) => {
    let src = null;
    switch (type) {
        case "mobile":
            src = logo;
            break;
        case "desktop":
            src = logo;
            break;
        default:
            break;
    }
    return (
        <a className={["navbar-brand", type, className].join(" ")} href="#">
            <img src={src} alt={`${type} logo`} />
        </a>
    );
};

export default Logo;

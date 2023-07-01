import React from "react";

const Navbar = () => {
    const menu = [
        {
            title: "О компании",
            link: "about",
        },
        {
            title: "Проекты",
            link: "projects",
        },
        {
            title: "Наши работы",
            link: "portfolio",
        },
        {
            title: "Отзывы",
            link: "reviews",
        },
    ];

    const closeMenu = (e) => {
        document.querySelector(".navbar-collapse").classList.remove("show");
    };

    return (
        <div className={["collapse", "navbar-collapse"].join(" ")} id="navbarSupportedContent">
            <ul className="navbar-nav">
                {menu.map((item) => (
                    <li key={item.title} className="nav-item" onClick={closeMenu}>
                        <a className="nav-link" href={`#${item.link}`} id="navbarFeaturesMenu" role="button">
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;

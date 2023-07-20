import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        setNav(!nav);
    }

    const mobilePrograms = () => {
        openNav();
        document
        .querySelector('#programs')
        .scrollIntoView({ behavior: "smooth" });
    }

    const openPrograms = () => {
        document
        .querySelector('#programs')
        .scrollIntoView({ behavior: "smooth" });
    }

    const openAbout = () => {
        document
        .querySelector('#about')
        .scrollIntoView({ behavior: "smooth" });
    }

    const mobileAbout = () => {
        openNav();
        document
        .querySelector('#about')
        .scrollIntoView({ behavior: "smooth" });
    }

    const openPricing = () => {
        document
        .querySelector('#pricing')
        .scrollIntoView({ behavior: "smooth" });
    }

    const mobilePricing = () => {
        openNav();
        document
        .querySelector('#pricing')
        .scrollIntoView({ behavior: "smooth" });
    }
    
    return(
        <>
            <nav>
                <div className={`mobile-nav ${nav ? "open-nav" : ""}`}>
                    <div onClick={openNav} className="mobile-nav__close">
                        <p className="mobile-nav__XBtn">X</p>
                    </div>
                    <ul className="mobile-nav__links">
                        <li>
                            <Link onClick={mobilePrograms} to="/">
                                Programs
                            </Link>
                        </li>
                        <li>
                            <Link onClick={mobileAbout} to="/">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link onClick={mobilePricing} to="/">
                                Pricing
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="nav">
                    <div className="nav__left">
                        <Link to="/" id="nav__logo">
                            JavaLift
                        </Link>
                    </div>
                    <ul className="nav__links">
                        <li>
                            <Link className="nav__link" onClick={openPrograms}>
                                Programs
                            </Link>
                        </li>
                        <li>
                            <Link className="nav__link" onClick={openAbout}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className="nav__link" onClick={openPricing}>
                                Pricing
                            </Link>
                        </li>
                    </ul>
                    <div className="nav__btns">
                        <Link className="navBtn__exercise">
                            Get Started
                        </Link>

                    </div>
                    <div className="mobile-nav__hamburger" onClick={openNav}>
                        <svg viewBox="0 0 100 80" width="40" height="40" className="mobile-nav__hamburgerIcon">
                            <rect width="100" height="20"></rect>
                            <rect y="30" width="100" height="20"></rect>
                            <rect y="60" width="100" height="20"></rect>
                        </svg>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;
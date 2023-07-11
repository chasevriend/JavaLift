import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        setNav(!nav);
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
                            <Link onClick={openNav} to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link onClick={openNav} to="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link onClick={openNav} to="/models">
                                Models
                            </Link>
                        </li>
                        <li>
                            <Link onClick={openNav} to="/testimonials">
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            <Link onClick={openNav} to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="nav">
                    <div className="nav__left">
                        <Link to="/" id="nav__logo" onClick={() => window.scrollTo(0, 0)}>
                            JavaLift
                        </Link>
                    </div>
                    <ul className="nav__links">
                        <li>
                            <Link className="nav__link" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="nav__link" to="/">
                                Programs
                            </Link>
                        </li>
                        <li>
                            <Link className="nav__link" to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                    <div className="nav__btns">
                        <Link className="navBtn__exercise" to="/">
                            Exercises
                        </Link>
                        <Link className="navBtn__start" to="/">
                            Start Now
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
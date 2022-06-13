import React, { useEffect, useState } from "react";
import {
    Nav,
    NavContainer,
    Logo,
    MobileIcon,
    NavItems,
    NavItem,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
    const [scrollY, setScrollY] = useState(0);
    function handleScroll() {
        setScrollY(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Nav scrolled={scrollY > 1}>
                <NavContainer>
                    <Logo to="/">Biju Acharju</Logo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavItems>
                        <NavItem to="home">Home</NavItem>
                        <NavItem to="about">About</NavItem>
                        <NavItem to="resume">Resume</NavItem>
                        <NavItem to="services">Servies</NavItem>
                        <NavItem to="portfolio">Portfolio</NavItem>
                        <NavItem to="contact">Contact</NavItem>
                    </NavItems>
                </NavContainer>
            </Nav>
        </>
    );
};

export default Navbar;

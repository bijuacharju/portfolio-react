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
    const [scrolled, setScrolled] = useState(false);
    function handleScroll() {
        if (window.scrollY > 150) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Nav scrolled={scrolled}>
            <NavContainer>
                <Logo to="/">Biju Acharju</Logo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavItems>
                    <NavItem
                        to="home"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                    >
                        Home
                    </NavItem>
                    <NavItem
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                    >
                        About
                    </NavItem>
                    <NavItem
                        to="resume"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                    >
                        Resume
                    </NavItem>
                    <NavItem
                        to="services"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                    >
                        Services
                    </NavItem>
                    <NavItem to="contact">Contact</NavItem>
                </NavItems>
            </NavContainer>
        </Nav>
    );
};

export default Navbar;

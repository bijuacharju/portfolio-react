import React from "react";
import {
    SideContainer,
    Icon,
    CloseIcon,
    NavItems,
    NavItem,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SideContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <NavItems>
                <NavItem
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    onClick={toggle}
                >
                    Home
                </NavItem>
                <NavItem
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    onClick={toggle}
                >
                    About
                </NavItem>
                <NavItem
                    to="resume"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    onClick={toggle}
                >
                    Resume
                </NavItem>
                <NavItem
                    to="skills"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    onClick={toggle}
                >
                    Skills
                </NavItem>
                <NavItem
                    to="services"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    onClick={toggle}
                >
                    Services
                </NavItem>
                <NavItem
                    to="contact"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    onClick={toggle}
                >
                    Contact
                </NavItem>
            </NavItems>
        </SideContainer>
    );
};

export default Sidebar;

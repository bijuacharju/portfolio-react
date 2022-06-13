import React from "react";
import {
    SideContainer,
    Icon,
    CloseIcon,
    NavItems,
    NavItem,
} from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SideContainer isOpen={isOpen}>
            <Icon onClick={toggle} >
                <CloseIcon/>
            </Icon>
            <NavItems>
                <NavItem to="home">Home</NavItem>
                <NavItem to="about">About</NavItem>
                <NavItem to="resume">Resume</NavItem>
                <NavItem to="services">Services</NavItem>
                <NavItem to="contact">Contact</NavItem>
            </NavItems>
        </SideContainer>
    );
};

export default Sidebar;

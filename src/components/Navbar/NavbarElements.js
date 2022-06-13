import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
    background: transparent;
    z-index: 99;
    width: 100%;
    transition: 0.5s all ease;
    position: fixed;
    color: #fff;
    top: 0;
    ${(props) =>
        props.scrolled &&
        `background-color: rgba(25, 28, 31, 0.8); color: #ffffff;`}
`;

export const NavContainer = styled.div`
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 10px 0;
    @media (max-width: 960px) {
        max-width: 720px;
        justify-content: space-between;
    }
`;

export const Logo = styled(LinkS)`
    display: none;
    padding: 10px 0;
    cursor: pointer;
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 800;
    transition: 0.5s all ease-in-out;
    @media (max-width: 960px) {
        display: block;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    padding: 10px 0;
    cursor: pointer;
    font-size: 24px;
    font-weight: 800;
    transition: 0.5s all ease-in-out;
    @media (max-width: 960px) {
        display: flex;
        align-items: center;
    }
`;

export const NavItems = styled.div`
    display: flex;
    justify-content: center;
    transition: 0.5s all ease-in-out;
    @media (max-width: 960px) {
        display: none;
    }
`;

export const NavItem = styled(LinkS)`
    background: transparent;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    transition: 0.3s all ease-in-out;
    &:hover {
        color: #ffb727;
    }
    &.active {
        color: #ffb727;
    }
`;

import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

export const SideContainer = styled.aside`
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: rgba(25, 28, 31, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    transition: 0.5s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: fixed;
    top: 20px;
    right: 40px;
    font-size: 2rem;
    background: transparent;
    outline: none;
    cursor: pointer;
`;

export const NavItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const NavItem = styled(LinkS)`
    padding: 20px 20px;
    cursor: pointer;
    color: #fff;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    transition: 0.3s ease-in-out;
    &:hover {
        color: #ffb727;
    }
`;

import styled, { keyframes } from "styled-components";
import Background from "./../../images/background.jpg";
import { Link as LinkS } from "react-scroll";
import { FaAngleDown } from "react-icons/fa";

export const HeroWrapper = styled.div`
    background: url("${Background}") center;
    background-attachment: fixed;
    background-size: cover;
    object-fit: contain;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.4);
    }
`;

export const HeroContainer = styled.div`
    height: 100vh;
    z-index: 10;
    color: #fff;
    display: flex;
    background: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    z-index: 10;
    color: #ffb727;
    font-size: 64px;
    margin-bottom: 10px;
    font-family: "Satisfy", cursive;
`;

export const Intro = styled.p`
    z-index: 10;
    color: #eee;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 50px;
`;

const upDown = keyframes`0% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(-5px);
  }`;

export const IconWrapper = styled(LinkS)`
    background: transparent;
    z-index: 10;
    cursor: pointer;
    /* transition: 0.4s; */
    color: rgba(255, 255, 255, 0.6);
    animation-name: ${upDown};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate-reverse;
    animation-fill-mode: both;
    animation-delay: 0s;
    animation-play-state: running;
`;

export const IconDown = styled(FaAngleDown)`
    z-index: 10;
    color: #eee;
    font-size: 40px;
`;

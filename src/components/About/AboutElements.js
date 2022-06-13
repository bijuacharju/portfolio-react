import styled from "styled-components";
import About from "./../../images/about.png";
import { FaAngleRight } from "react-icons/fa";

export const AboutWrapper = styled.div`
    padding: 60px 0;
`;

export const AboutContainer = styled.div`
    max-width: 960px;
    margin: auto;

    @media (max-width: 960px) {
        max-width: 720px;
    }
`;

export const TitleContainer = styled.div`
    text-align: center;
    padding: 30px;
    position: relative;
`;

export const TitleShadow = styled.span`
    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
    color: #eeeeee;
    z-index: 1;
    font-weight: 700;
    font-size: 52px;
    line-height: 0;
    text-transform: uppercase;
`;

export const Title = styled.h1`
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 20px;
    padding-bottom: 0;
    color: #ffb727;
    position: relative;
    z-index: 2;
`;

export const SubTitle = styled.p`
    margin-bottom: 0;
    position: relative;
    z-index: 2;
`;

export const AboutContent = styled.div`
    display: flex;
    width: 100%;
`;

export const AboutImage = styled.div`
    min-width: 340px;
    background: url("${About}") top;
    background-size: cover;
    /* height: 600px; */
`;

export const AboutBody = styled.div`
    grid: 1;
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    color: #333;
`;

export const AboutInfo = styled.p`
    font-size: 16px;
    line-height: 28px;
    color: #333;
    margin-bottom: 16px;
    text-align: justify;
`;

export const UserDataRow = styled.div`
    display: flex;
    align-items: center;
    width: inherit;
    margin-bottom: 10px;
`;

export const UserDataIcon = styled(FaAngleRight)`
    font-size: 18px;
    color: #ffb727;
    margin-right: 10px;
`;

export const UserDataTitle = styled.span`
    font-weight: 700;
    width: 30%;
`;

export const UserData = styled.span`
    font-weight: 500;
    width: 70%;
`;

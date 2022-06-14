import styled from "styled-components";
import About from "./../../images/about.png";
import { FaChevronRight } from "react-icons/fa";

export const AboutImage = styled.div`
    min-width: 340px;
    background: url("${About}") top;
    background-size: cover;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const AboutBody = styled.div`
    grid: 1;
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    color: #333;
    box-sizing: border-box;
    @media (max-width: 768px) {
        padding: 0;
    }
`;

export const AboutInfo = styled.p`
    font-size: 16px;
    line-height: 28px;
    color: #333;
    margin-bottom: 16px;
`;

export const UserDataRow = styled.div`
    display: flex;
    align-items: center;
    width: inherit;
    margin-bottom: 10px;
`;

export const UserDataIcon = styled(FaChevronRight)`
    font-size: 14px;
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

import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
export const ContentField = styled.div`
    width: 25%;
    display: flex;
    @media (max-width: 960px) {
        width: 50%;
    }
`;

export const CardTitle = styled.h4`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 15px;
    transition: all 0.5s ease-in-out;
`;
export const Card = styled.div`
    flex: 1;
    height: inherit;
    padding: 30px;
    margin: 10px;
    transition: all 0.5s ease-in-out;
    border-radius: 4px;
    box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.3);
    text-align: center;
    color: #333;
    border: 1px solid #fff;
    cursor: pointer;
    &:hover {
        border: 1px solid #ffb727;
        /* box-sizing: border-box; */
    }
    &:hover ${CardTitle} {
        color: #ffb727;
    }
`;

export const CardIcon = styled.div`
    height: 60px;
    width: 60px;
    margin: 0 auto 20px auto;
    padding: 10px;
    font-size: 32px;
    color: #ffb727;
    background-color: #fff4df;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CardDescription = styled.p`
    font-size: 14px;
    font-weight: 300;
    line-height: 28px;
    margin: 0;
`;

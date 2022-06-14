import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 60px 0;
`;

export const Container = styled.div`
    max-width: 992px;
    margin: auto;

    @media (max-width: 992px) {
        max-width: 768px;
    }
    /* @media (max-width: 768px) {
    } */
`;

export const TitleContainer = styled.div`
    text-align: center;
    padding: 30px 40px;
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
    color: #333;
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    @media (max-width: 768px) {
        padding-left: 40px;
        padding-right: 40px;
    }
`;

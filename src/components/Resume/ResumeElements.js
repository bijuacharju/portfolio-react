import styled from "styled-components";
import { FaRegCircle } from "react-icons/fa";
export const Content = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 40px;
    }
`;

export const ContentField = styled.div`
    width: 50%;
    padding: 12px;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const ContentWrapper = styled.div`
    width: 100%;
`;

export const ContentCategory = styled.h3`
    font-size: 26px;
    font-weight: 600;
    margin: 20px 0;
    color: #333;
`;

export const CategoryData = styled.div`
    position: relative;
`;

export const DataWrapper = styled.div`
    color: #333;
    padding: 0 0 20px 20px;
    border-left: 2px solid #333;
`;

export const LastDataWrapper = styled.div`
    color: #333;
    padding: 0 0 0 20px;
    border-left: 2px solid #333;
`;

export const DataDot = styled(FaRegCircle)`
    font-size: 16px;
    position: absolute;
    left: -7px;
    background: #fff;
`;

export const DataTitle = styled.h4`
    color: #ffb727;
    text-transform: uppercase;
    font-size: 16px;
    margin-bottom: 10px;
    line-height: 18px;
`;

export const DataStamp = styled.h5`
    background: #eeeeee;
    padding: 5px 15px;
    display: inline-block;
    margin-bottom: 10px;
`;

export const DataSubTitle = styled.p`
    margin-bottom: 16px;
    font-style: italic;
    font-size: 15px;
`;

export const DataLink = styled.a`
    display: block;
    color: #333;
    margin-bottom: 16px;
    font-style: italic;
    font-size: 15px;
    text-decoration: none;
    word-wrap: break-word;
    &:hover {
        text-decoration: underline;
        color: #ffb727;
    }
`;

export const DataDescription = styled.p`
    padding-bottom: 10px;
`;

export const UlListWrapper = styled.ul`
    padding-left: 20px;
`;

export const DataList = styled.li`
    font-size: 15px;
    padding-bottom: 10px;
`;

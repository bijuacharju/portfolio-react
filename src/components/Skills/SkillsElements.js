import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    @media (max-width: 768px) {
        flex-direction: column;
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const ContentField = styled.div`
    width: 50%;
    @media (max-width: 960px) {
        width: 100%;
    }
`;

export const SkillItem = styled.div`
    margin: 20px;
    color: #333;
`;

export const SkillData = styled.div`
    padding: 10px 0;
    margin-bottom: 6px;
    display: flex;
    justify-content: space-between;
`;

export const DataItem = styled.span`
    text-transform: uppercase;
    display: block;
    font-weight: 700;
    font-size: 14px;
`;

export const SkillBar = styled.div`
    width: 100%;
    height: 10px;
    background: #e6e8eb;
    border-radius: 4px;
`;

export const SkillLevel = styled.div`
    border-radius: 4px 0 0 4px;
    height: inherit;
    width: ${({ value }) => (value ? value : 10)}%;
    background: #ffb727;
`;

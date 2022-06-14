import styled from "styled-components";

export const ContentField = styled.div`
    width: 50%;
    color: #333;
    @media (max-width: 960px) {
        width: 100%;
    }
`;

export const FieldPanel = styled.div`
    padding: 0 8px;
`;

export const FlexField = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const FlexItem = styled.div`
    width: ${({ width }) => (width ? width : 100)}%;
    margin: 8px 0;
`;

export const ContactItem = styled.div`
    margin: 0 8px;
    box-shadow: 0 4px 20px 0 rgba(68, 88, 144, 0.2);
    text-align: center;
    border-radius: 4px;
`;

export const Card = styled.div`
    padding: 20px 0 30px;
`;

export const CardIcon = styled.div`
    height: 35px;
    width: 35px;
    margin: 0 auto 20px auto;
    padding: 8px;
    font-size: 24px;
    color: #ffb727;
    background-color: #fff4df;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CardTitle = styled.h3`
    font-size: 20px;
    font-weight: 700;
    margin: 10px 0;
    color: #555;
`;

export const CardDescription = styled.p`
    font-size: 13px;
    font-weight: 400;
    line-height: 28px;
    margin: 0;
`;

export const SocialIconHolder = styled.div`
    display: flex;
    margin-top: 15px;
    justify-content: center;
`;

export const SocialIcon = styled.a`
    color: #555;
    text-decoration: none;
    font-size: 20px;
    display: block;
    color: #687683;
    border: 1px solid #dde1e4;
    border-radius: 50%;
    line-height: 1;
    height: 20px;
    width: 20px;
    padding: 12px;
    margin: 0 8px;
    cursor: pointer;
    transition: 0.3s all ease-in-out;

    &:hover {
        color: #fff;
        background-color: #ffb727;
        border-color: #ffb727;
    }
`;

export const FormField = styled.form`
    box-shadow: 0 4px 20px 0 rgba(68, 88, 144, 0.2);
    margin: 8px 0;
    border-radius: 4px;
    padding: 27px;
    text-align: center;
`;

export const InputWrapper = styled.div`
    margin-bottom: 14px;
    width: 100%;
`;

export const InputBox = styled.input`
    padding: 10px 15px;
    font-size: 14px;
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #888;
    border-radius: 4px;
    font-family: "Poppins", sans-serif;
    transition: 0.3s all ease-in-out;
    outline-width: 0;
    &:focus {
        border-color: #ffb727;
    }
`;

export const TextArea = styled.textarea`
    padding: 10px 15px;
    font-size: 14px;
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #888;
    border-radius: 4px;
    line-height: 1.5;
    resize: vertical;
    font-family: "Poppins", sans-serif;
    transition: 0.3s all ease-in-out;
    outline-width: 0;
    &:focus {
        border-color: #ffb727;
    }
`;

export const Button = styled.button`
    text-align: center;
    background: #ffb727;
    padding: 10px 24px;
    color: #fff;
    transition: 0.3s all ease-in-out;
    border-radius: 4px;
    font-family: "Poppins", sans-serif;
    border: none;
    cursor: pointer;
    font-size: 16px;
    &:hover {
        background: #ffc85a;
    }
`;

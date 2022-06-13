import React from "react";
import {
    Container,
    Content,
    SubTitle,
    Title,
    TitleContainer,
    TitleShadow,
    Wrapper,
} from "../Common/CommonElements";

const Service = () => {
    return (
        <Wrapper>
            <Container>
                <TitleContainer>
                    <TitleShadow>Services</TitleShadow>
                    <Title>Services</Title>
                    <SubTitle>Here are the services that I offer to my clients.</SubTitle>
                </TitleContainer>
                <Content>

                </Content>
            </Container>
        </Wrapper>
    );
};

export default Service;

import React from "react";
import {
    Wrapper,
    Container,
    TitleContainer,
    TitleShadow,
    Title,
    SubTitle,
    Content,
} from "./../Common/CommonElements";
import {
    AboutImage,
    AboutBody,
    AboutInfo,
    UserDataRow,
    UserDataTitle,
    UserData,
    UserDataIcon,
} from "./AboutElements";

const Row = ({ title, data }) => {
    return (
        <UserDataRow>
            <UserDataIcon />
            <UserDataTitle>{title}: </UserDataTitle> <UserData>{data}</UserData>
        </UserDataRow>
    );
};

const About = () => {
    return (
        <Wrapper id="about">
            <Container>
                <TitleContainer>
                    <TitleShadow>About Me</TitleShadow>
                    <Title>About Me</Title>
                    <SubTitle>Know more about me? Here you go...</SubTitle>
                </TitleContainer>
                <Content>
                    <AboutImage />
                    <AboutBody>
                        <AboutInfo>
                            Hi! I'm Biju Acharju, resident of Dharan, Nepal. I
                            started learning about computer since 2012 when I
                            was at very young age. My interest on computer and
                            morden technologies grew more and more. When I
                            decided to be the part of this tech world, I started
                            my journey as a Web Developer by working on various
                            small projects.
                        </AboutInfo>
                        <AboutInfo>
                            And later I also started learning about different
                            Objected-Oriented Programming Languages like Java,
                            Python, C++, etc. to develop my professional skills
                            as a Web | Software developer. Now, with the
                            research and practise that I gained from college,
                            bootcamps and trainings, I am known as Professional
                            Web | Software Developer.
                        </AboutInfo>
                        <Row title="Name" data="Biju Acharju" />
                        <Row title="Date of Birth" data="April 14, 2001" />
                        <Row
                            title="Address"
                            data="Dharan-5, Deurali, Sunsari, Nepal"
                        />
                        <Row title="Zip Code" data="56700" />
                        <Row title="Email" data="bijuacharju4@gmail.com" />
                        <Row title="Phone" data="+977-9817380695" />
                    </AboutBody>
                </Content>
            </Container>
        </Wrapper>
    );
};

export default About;

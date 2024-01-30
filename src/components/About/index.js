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
              Hi! I'm Biju Acharju, resident of Dharan, Nepal. As a seasoned
              React Developer with over two years of hands-on experience, I am
              passionate about crafting dynamic and responsive user interfaces.
              My journey in web development has been marked by a continuous
              quest for knowledge and a genuine enthusiasm for exploring
              emerging technologies. With a strong foundation in React, I excel
              in building scalable and efficient front-end solutions.
            </AboutInfo>
            <AboutInfo>
              I am a proactive and dynamic React Developer with a proven track
              record, always eager to embrace new opportunities and contribute
              my expertise to cutting-edge projects in the web development
              landscape.
            </AboutInfo>
            <Row title="Name" data="Biju Acharju" />
            <Row title="Date of Birth" data="April 14, 2001" />
            <Row title="Address" data="Dharan-5, Deurali, Sunsari, Nepal" />
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

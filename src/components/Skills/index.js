import React from "react";
import {
    Container,
    SubTitle,
    Title,
    TitleContainer,
    TitleShadow,
    Wrapper,
} from "../Common/CommonElements";
import {
    Content,
    ContentField,
    SkillItem,
    SkillData,
    DataItem,
    SkillBar,
    SkillLevel,
} from "./SkillsElements";

const Skill = ({ name, value }) => {
    return (
        <SkillItem>
            <SkillData>
                <DataItem>{name}</DataItem>
                <DataItem>{value}%</DataItem>
            </SkillData>
            <SkillBar>
                <SkillLevel value={value} />
            </SkillBar>
        </SkillItem>
    );
};

const Skills = () => {
    return (
        <Wrapper id="skills">
            <Container>
                <TitleContainer>
                    <TitleShadow>Skills</TitleShadow>
                    <Title>Skills</Title>
                    <SubTitle>
                        Here is the list of skill that I excel in.
                    </SubTitle>
                </TitleContainer>
                <Content>
                    <ContentField>
                        <Skill name="HTML" value={90} />
                        <Skill name="CSS" value={90} />
                        <Skill name="JavaScript" value={70} />
                        <Skill name="C#" value={65} />
                        <Skill name="Java" value={75} />
                        <Skill name="Python" value={60} />
                    </ContentField>
                    <ContentField>
                        <Skill name="React JS" value={90} />
                        <Skill name="Node.js" value={80} />
                        <Skill name="ASP.NET" value={70} />
                        <Skill name="MySQL" value={85} />
                        <Skill name="BootStrap" value={90} />
                        <Skill name="SEO" value={50} />
                    </ContentField>
                </Content>
            </Container>
        </Wrapper>
    );
};

export default Skills;

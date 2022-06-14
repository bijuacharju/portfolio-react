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
    Card,
    CardIcon,
    CardTitle,
    CardDescription,
} from "./ServiceElements";
import { FaLaptopCode, FaDatabase, FaGlobe, FaFileVideo } from "react-icons/fa";

const CardObject = ({ icon, title, description }) => {
    return (
        <Card>
            {icon && <CardIcon>{icon}</CardIcon>}
            {title && <CardTitle>{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
        </Card>
    );
};

const Service = () => {
    return (
        <Wrapper id="services">
            <Container>
                <TitleContainer>
                    <TitleShadow>Services</TitleShadow>
                    <Title>Services</Title>
                    <SubTitle>
                        Here are the services that I offer to my clients.
                    </SubTitle>
                </TitleContainer>
                <Content>
                    <ContentField>
                        <CardObject
                            icon={<FaFileVideo />}
                            title="Video Editing"
                            description="I can provide excellent video collaboration using Adobe Premiere Pro with my innovative ideas, I produce promotional and intro videos."
                        />
                    </ContentField>
                    <ContentField>
                        <CardObject
                            icon={<FaLaptopCode />}
                            title="Web Design"
                            description="I provide amazing designs with my graphics designing skills, using photoshop I can provide the designs to my clients as per their requirement."
                        />
                    </ContentField>
                    <ContentField>
                        <CardObject
                            icon={<FaDatabase />}
                            title="Database Analysis"
                            description="I can help my clients in analyzing data according to recent trends and make predictions and suggestions."
                        />
                    </ContentField>
                    <ContentField>
                        <CardObject
                            icon={<FaGlobe />}
                            title="Web Development"
                            description="I can develop responsive websites from scratch and using frameworks like bootstrap and React JS Library as per the client's requirements."
                        />
                    </ContentField>
                </Content>
            </Container>
        </Wrapper>
    );
};

export default Service;

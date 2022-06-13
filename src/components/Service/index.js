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
import { FaFlask, FaLaptopCode, FaDatabase, FaGlobe } from "react-icons/fa";

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
                            icon={<FaFlask />}
                            title="App App Development"
                            description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
                        />
                    </ContentField>
                    <ContentField>
                        <CardObject
                            icon={<FaLaptopCode />}
                            title="Web Design"
                            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                        />
                    </ContentField>
                    <ContentField>
                        <CardObject
                            icon={<FaDatabase />}
                            title="Database Analysis"
                            description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                        />
                    </ContentField>
                    <ContentField>
                        <CardObject
                            icon={<FaGlobe />}
                            title="Web Development"
                            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque"
                        />
                    </ContentField>
                </Content>
            </Container>
        </Wrapper>
    );
};

export default Service;

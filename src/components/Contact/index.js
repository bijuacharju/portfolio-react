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
    ContactItem,
    ContentField,
    FieldPanel,
    FlexField,
    FlexItem,
    FormField,
    Card,
    CardIcon,
    CardTitle,
    CardDescription,
    SocialIconHolder,
    SocialIcon,
    InputWrapper,
    InputBox,
    TextArea,
    Button,
} from "./ContactElements";
import { FiMail, FiShare2, FiPhoneCall } from "react-icons/fi";

import {
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaGithub,
    FaInstagram,
} from "react-icons/fa";

const ContactCard = ({ icon, title, description, social }) => {
    return (
        <Card>
            {icon && <CardIcon>{icon}</CardIcon>}
            {title && <CardTitle>{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
            {social && (
                <SocialIconHolder>
                    {social?.map((icon, index) => {
                        return (
                            <SocialIcon
                                key={index}
                                href={icon.link}
                                target="_blank"
                            >
                                {icon.icon}
                            </SocialIcon>
                        );
                    })}
                </SocialIconHolder>
            )}
        </Card>
    );
};

const InputField = ({ type, name, placeholder, required, rows }) => {
    const textbox =
        type === "textarea" ? (
            <TextArea
                type={type ? type : "text"}
                name={name ? name : ""}
                rows={rows ? rows : 4}
                placeholder={placeholder ? placeholder : ""}
                required={required}
            />
        ) : (
            <InputBox
                type={type ? type : "text"}
                name={name ? name : ""}
                placeholder={placeholder ? placeholder : ""}
                required={required}
            />
        );
    return <InputWrapper>{textbox}</InputWrapper>;
};

const Contact = () => {
    return (
        <Wrapper id="contact">
            <Container>
                <TitleContainer>
                    <TitleShadow>Contact Me</TitleShadow>
                    <Title>Contact Me</Title>
                    <SubTitle>
                        You can contact me for any kinds for any projects works
                        at these addresses.
                    </SubTitle>
                </TitleContainer>
                <Content>
                    <ContentField>
                        <FieldPanel>
                            <FlexField>
                                <FlexItem width={100}>
                                    <ContactItem>
                                        <ContactCard
                                            icon={<FiShare2 />}
                                            title="Social Profiles"
                                            social={[
                                                {
                                                    icon: <FaTwitter />,
                                                    link: "https://twitter.com/AcharjuBiju",
                                                },
                                                {
                                                    icon: <FaFacebook />,
                                                    link: "https://www.facebook.com/biju.acharju",
                                                },
                                                {
                                                    icon: <FaInstagram />,
                                                    link: "https://www.instagram.com/biju.acharju/",
                                                },
                                                {
                                                    icon: <FaLinkedin />,
                                                    link: "https://www.linkedin.com/in/biju-acharju-4b4485182/",
                                                },
                                                {
                                                    icon: <FaGithub />,
                                                    link: "https://github.com/bijuacharju",
                                                },
                                            ]}
                                        />
                                    </ContactItem>
                                </FlexItem>
                                <FlexItem width={50}>
                                    <ContactItem>
                                        <ContactCard
                                            icon={<FiMail />}
                                            title="Email Me"
                                            description="bijuacharju4@gmail.com"
                                        />
                                    </ContactItem>
                                </FlexItem>
                                <FlexItem width={50}>
                                    <ContactItem>
                                        <ContactCard
                                            icon={<FiPhoneCall />}
                                            title="Call Me"
                                            description="+977-9817380695"
                                        />
                                    </ContactItem>
                                </FlexItem>
                            </FlexField>
                        </FieldPanel>
                    </ContentField>
                    <ContentField>
                        <FieldPanel>
                            <FormField>
                                <InputField
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required={true}
                                />
                                <InputField
                                    type="text"
                                    name="email"
                                    placeholder="Your Email"
                                    required={true}
                                />
                                <InputField
                                    type="text"
                                    name="Subject"
                                    placeholder="Subject"
                                    required={true}
                                />
                                <InputField
                                    type="textarea"
                                    name="message"
                                    placeholder="Message"
                                    rows={5}
                                    required={true}
                                />
                                <Button type="submit">Send Message</Button>
                            </FormField>
                        </FieldPanel>
                    </ContentField>
                </Content>
            </Container>
        </Wrapper>
    );
};

export default Contact;

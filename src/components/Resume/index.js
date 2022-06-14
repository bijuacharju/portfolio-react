import React from "react";
import {
    Wrapper,
    Container,
    TitleContainer,
    TitleShadow,
    Title,
    SubTitle,
} from "./../Common/CommonElements";
import {
    Content,
    ContentField,
    ContentWrapper,
    ContentCategory,
    CategoryData,
    DataWrapper,
    LastDataWrapper,
    DataTitle,
    DataDot,
    DataSubTitle,
    UlListWrapper,
    DataList,
    DataDescription,
    DataStamp,
    DataLink,
} from "./ResumeElements";

const ResumeObject = ({ category, datas }) => {
    return (
        <ContentWrapper>
            <ContentCategory>{category}</ContentCategory>
            <CategoryData>
                {datas &&
                    datas?.map((data, index) => {
                        const returnData = (
                            <>
                                <DataDot />
                                {data?.title && (
                                    <DataTitle>{data?.title}</DataTitle>
                                )}
                                {data?.stamp && (
                                    <DataStamp>{data?.stamp}</DataStamp>
                                )}
                                {data?.subTitle && (
                                    <DataSubTitle>
                                        {data?.subTitle}
                                    </DataSubTitle>
                                )}
                                {data?.link && (
                                    <DataLink href={data?.link}>
                                        {data?.link}
                                    </DataLink>
                                )}
                                {data?.description && (
                                    <DataDescription>
                                        {data?.description}
                                    </DataDescription>
                                )}
                                {data?.lists && (
                                    <UlListWrapper>
                                        {data?.lists.map((list, index) => {
                                            return (
                                                <DataList key={index}>
                                                    {list?.data}
                                                </DataList>
                                            );
                                        })}
                                    </UlListWrapper>
                                )}
                            </>
                        );
                        if (datas.length - 1 === index) {
                            return (
                                <LastDataWrapper key={index}>
                                    {returnData}
                                </LastDataWrapper>
                            );
                        } else {
                            return (
                                <DataWrapper key={index}>
                                    {returnData}
                                </DataWrapper>
                            );
                        }
                    })}
            </CategoryData>
        </ContentWrapper>
    );
};

const Resume = () => {
    return (
        <Wrapper id="resume">
            <Container>
                <TitleContainer>
                    <TitleShadow>Resume</TitleShadow>
                    <Title>Resume</Title>
                    <SubTitle>
                        Here are the educational &amp; academic qualification
                        that I have accomplished till today.
                    </SubTitle>
                </TitleContainer>
                <Content>
                    <ContentField>
                        <ResumeObject
                            category="Summary"
                            datas={[
                                {
                                    title: "Biju Acharju",
                                    subTitle:
                                        "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
                                    lists: [
                                        {
                                            data: "Dharan-5, Deurali, Sunsari",
                                        },
                                        { data: "+977-9817380695" },
                                        { data: "bijuacharju@gmail.com" },
                                    ],
                                },
                            ]}
                        />
                        <ResumeObject
                            category="Education"
                            datas={[
                                {
                                    title: "Bachelors in Information Technology - BSc (Hons) Computing",
                                    stamp: "2020 - 2022",
                                    subTitle:
                                        "Itahari International College, Sundarharaicha-4, Morang",
                                    description:
                                        "With the knowledge I am getting from this college, I am able to make websites and make softwares as well. The practical education in the college helps me a lot to focus on the contents that matters to a student in the field of technology.",
                                },
                                {
                                    title: "Diploma in Computer Operator",
                                    stamp: "2019 - 2019",
                                    subTitle: "CODE - IT, Prithvi Path, Dharan",
                                    description:
                                        "To further improve my skills I went to CODE-IT to learn professional way of computer operation, web development and designing. This institute helped me to grow my skills as professional individual in real world case scenario.",
                                },
                                {
                                    title: "+2 in Computer Science",
                                    stamp: "2016 - 2018",
                                    subTitle: "Dharan Adarsha Higher Secondary School, Dharan",
                                    description:
                                        "With the basic knowledge of the programming language I learned in this college, the learning of other languages were easy for me. The college helped me to grow my skills as an individual as well as to work in teams.",
                                },
                                {
                                    title: "Diploma in Computer Operator",
                                    stamp: "2004 - 2016",
                                    subTitle:
                                        "Koshi Secondary English Boarding School, Dharan, Sunsari",
                                    description:
                                        "I learned at this school since my childhood. Everything from the alphabets to the numerics, I learned while I grew up. At this school, I spent my 12 years of academic learning level this school.",
                                },
                            ]}
                        />
                        <ResumeObject
                            category="Professional Experience"
                            datas={[
                                {
                                    title: "Intern as Front-end Web Developer",
                                    stamp: "July 2021 - September 2021",
                                    subTitle:
                                        "Lunar IT Solution Pvt. Ltd., Itahari-8, Sunsari",
                                    description:
                                        "With the knowledge I am getting from this college, I am able to make websites and make softwares as well. The practical education in the college helps me a lot to focus on the contents that matters to a student in the field of technology.",
                                    lists: [
                                        {
                                            data: "Worked in 4 projects",
                                        },
                                        { data: "Learned about DOM" },
                                        {
                                            data: "Learned about React JS Library",
                                        },
                                        {
                                            data: "Learned about Node.js for knowledge of back-end",
                                        },
                                    ],
                                },
                            ]}
                        />
                    </ContentField>
                    <ContentField>
                        <ResumeObject
                            category="Projects"
                            datas={[
                                {
                                    title: "Netflix-Clone",
                                    stamp: "React JS",
                                    link: "https://github.com/bijuacharju/netflix-clone.git",
                                    lists: [
                                        {
                                            data: "Developed based on real application",
                                        },
                                        {
                                            data: "Horiontal scroll on list of movies",
                                        },
                                        {
                                            data: "Loads data dynamically from TMDB api",
                                        },
                                        {
                                            data: "Plays trailer of movies on click that are available",
                                        },
                                    ],
                                },
                                {
                                    title: "Airbnb-Clone",
                                    stamp: "React JS",
                                    link: "https://github.com/bijuacharju/airbnb-clone.git",
                                    lists: [
                                        {
                                            data: "Developed based on real application",
                                        },
                                        {
                                            data: "Has date range selector",
                                        },
                                        {
                                            data: "Uses react-router-dom",
                                        },
                                    ],
                                },
                                {
                                    title: "Institute Management System",
                                    stamp: "React JS, Node.js, MySQL, Material-ui",
                                    link: "https://github.com/bijuacharju/Institute-Management-System.git",
                                    lists: [
                                        {
                                            data: "Full-stack application",
                                        },
                                        {
                                            data: "Suitable for small private educational institutes",
                                        },
                                        {
                                            data: "Authentication functionality",
                                        },
                                        {
                                            data: "Has email sending functionality",
                                        },
                                        {
                                            data: "Keeps record of students, teachers, fees/payments",
                                        },
                                        {
                                            data: "Student enrollment portal",
                                        },
                                        {
                                            data: "Events management functionality",
                                        },
                                        {
                                            data: "Assigning assignment for teachers and submission for students functionality",
                                        },
                                    ],
                                },
                                {
                                    title: "Blog Aplication",
                                    stamp: "HTML, CSS, JavaScript, Node.js, JSON",
                                    link: "https://github.com/bijuacharju/blog_application.git",
                                    lists: [
                                        {
                                            data: "Application for bloggers",
                                        },
                                        {
                                            data: "Blog addition functionality",
                                        },
                                        {
                                            data: "Capable of handling images",
                                        },
                                        {
                                            data: "Loads data from api from Node.js",
                                        },
                                        {
                                            data: "Stores data in JSON file",
                                        },
                                    ],
                                },
                                {
                                    title: "Clone of GEMS School",
                                    stamp: "React JS, Bootstrap",
                                    link: "https://github.com/bijuacharju/gemsschool.git",
                                    lists: [
                                        {
                                            data: "Application for school",
                                        },
                                        {
                                            data: "Uses react-router-dom for routing",
                                        },
                                        {
                                            data: "Uses Bootstrap",
                                        },
                                    ],
                                },
                                {
                                    title: "Clone of SNS Network",
                                    stamp: "HTML, CSS, JavaScript, Bootstrap",
                                    link: "https://github.com/bijuacharju/SNS-Internet_Service_Provider.git",
                                    lists: [
                                        {
                                            data: "Landing Page for ISP",
                                        },
                                        {
                                            data: "Responsive",
                                        },
                                        {
                                            data: "Uses Bootstrap",
                                        },
                                    ],
                                },
                            ]}
                        />
                    </ContentField>
                </Content>
            </Container>
        </Wrapper>
    );
};

export default Resume;

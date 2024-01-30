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
                {data?.title && <DataTitle>{data?.title}</DataTitle>}
                {data?.stamp && <DataStamp>{data?.stamp}</DataStamp>}
                {data?.subTitle && (
                  <DataSubTitle>{data?.subTitle}</DataSubTitle>
                )}
                {data?.link && (
                  <DataLink href={data?.link}>{data?.link}</DataLink>
                )}
                {data?.description && (
                  <DataDescription>{data?.description}</DataDescription>
                )}
                {data?.lists && (
                  <UlListWrapper>
                    {data?.lists.map((list, index) => {
                      return <DataList key={index}>{list?.data}</DataList>;
                    })}
                  </UlListWrapper>
                )}
              </>
            );
            if (datas.length - 1 === index) {
              return (
                <LastDataWrapper key={index}>{returnData}</LastDataWrapper>
              );
            } else {
              return <DataWrapper key={index}>{returnData}</DataWrapper>;
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
            Here are the educational &amp; academic qualification that I have
            accomplished till today.
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
                    "A seasoned React Developer with over two years of hands-on experience and strong foundation in React, excels in building scalable and efficient front-end solutions.",
                  lists: [
                    {
                      data: "Dharan-5, Deurali, Sunsari",
                    },
                    { data: "+977-9817380695" },
                    { data: "bijuacharju4@gmail.com" },
                  ],
                },
              ]}
            />
            <ResumeObject
              category="Projects"
              datas={[
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
                  title: "Legal AID",
                  stamp: "React JS, TypeScript, Chakra-ui",
                  lists: [
                    {
                      data: "Application for providing service between user and lawyer.",
                    },
                    {
                      data: "Limited explanation due to confidentiality of the system *",
                    },
                  ],
                },
                {
                  title: "TAML",
                  stamp: "React JS, TypeScript, Chakra-ui",
                  lists: [
                    {
                      data: "Banking system to determine the risk level and exposure of the customers.",
                    },
                    {
                      data: "Limited explanation due to confidentiality of the system *",
                    },
                  ],
                },
                {
                  title: "Robo",
                  stamp: "React JS, Material-ui",
                  lists: [
                    {
                      data: "System used for analyis and investment purposes in stocks.",
                    },
                    {
                      data: "Limited explanation due to confidentiality of the system *",
                    },
                  ],
                },
              ]}
            />
          </ContentField>
          <ContentField>
            <ResumeObject
              category="Education"
              datas={[
                {
                  title:
                    "Bachelors in Information Technology - BSc (Hons) Computing",
                  stamp: "2020 - 2022",
                  subTitle:
                    "Itahari International College, Sundarharaicha-4, Morang",
                  description:
                    "With the knowledge I am getting from this college, I am able to make websites and make softwares as well. The practical education in the college helps me a lot to focus on the contents that matters to a student in the field of technology.",
                },
                {
                  title: "+2 in Computer Science",
                  stamp: "2016 - 2018",
                  subTitle: "Dharan Adarsha Higher Secondary School, Dharan",
                  description:
                    "With the basic knowledge of the programming language I learned in this college, the learning of other languages were easy for me. The college helped me to grow my skills as an individual as well as to work in teams.",
                },
                {
                  title: "Schooling",
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
                // {
                //   title: "Intern as Front-end Web Developer",
                //   stamp: "July 2021 - September 2021",
                //   subTitle: "Lunar IT Solution Pvt. Ltd., Itahari-8, Sunsari",
                //   description:
                //     "With the knowledge I am received in the college, I was able to make websites and make some basic level softwares as well. The practical education in the college helped me a lot to focus on the contents that matters to a student in the field of technology.",
                //   lists: [
                //     {
                //       data: "Worked in 4 projects",
                //     },
                //     { data: "Learned about DOM" },
                //     {
                //       data: "Learned about React JS",
                //     },
                //     {
                //       data: "Learned about Node.js for knowledge of back-end",
                //     },
                //   ],
                // },
                {
                  title: "Front-end Web Developer",
                  stamp: "July 2022 - September 2022",
                  subTitle: "Lunar IT Solution Pvt. Ltd., Itahari-8, Sunsari",
                  description:
                    "With the knowledge and experience gained in both college and internship, I embarked on the journey of professional web developer to try out my skills in real world projects collaborating in a team.",
                  lists: [
                    {
                      data: "Worked in 3 projects",
                    },
                    { data: "Learned about ASP .NET" },
                    {
                      data: "Improved knowledge in React JS",
                    },
                  ],
                },
                {
                  title: "React Developer",
                  stamp: "Nov 2022 - Present",
                  subTitle: "Code Himalaya Pvt. Ltd., Kupondole, Lalitpur",
                  description:
                    "With the skills learned, I continuously polished my skills on React JS and other platfroms to improve my knowledge in related technology and various other social skills.",
                  lists: [
                    {
                      data: "Worked in numerous projects",
                    },
                    {
                      data: "Improved skill to work collaboratively on a team.",
                    },
                    {
                      data: "Improved knowledge and skills on TypeScript and other technologies.",
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

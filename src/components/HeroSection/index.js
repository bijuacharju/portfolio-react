import React from "react";
import {
    HeroWrapper,
    HeroContainer,
    Title,
    Intro,
    IconWrapper,
    IconDown,
} from "./HeroElements";

const Hero = () => {
    return (
        <>
            <HeroWrapper>
                <HeroContainer>
                    <Title>Biju Acharju</Title>
                    <Intro>I'm professional React Developer in Dharan, Sunsari.</Intro>
                    <IconWrapper to="about">
                        <IconDown />
                    </IconWrapper>
                </HeroContainer>
            </HeroWrapper>
        </>
    );
};

export default Hero;

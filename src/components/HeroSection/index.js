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
        <HeroWrapper id="home">
            <HeroContainer>
                <Title>Biju Acharju</Title>
                <Intro>
                    I'm professional React Developer in Dharan, Sunsari.
                </Intro>
                <IconWrapper
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                >
                    <IconDown />
                </IconWrapper>
            </HeroContainer>
        </HeroWrapper>
    );
};

export default Hero;

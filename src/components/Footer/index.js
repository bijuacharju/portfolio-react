import React from "react";
import { FooterText, FooterWrapper, Highlight } from "./FooterElements";

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterText>
                Copyright &copy; {new Date().getFullYear()}. All rights reserved
                | Designed by <Highlight>Biju Acharju</Highlight>
            </FooterText>
        </FooterWrapper>
    );
};

export default Footer;

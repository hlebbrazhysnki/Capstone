import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import '../style.css'
  
const Footer = () => {
  return (
    <div id='footer'>
    <Box>
      <h1 style={{ color: "black", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
                   test
        
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Lorem, ipsum.</Heading>
            <a>Lorem, ipsum.</a>
            <a>Lorem, ipsum.</a>
            <a>Lorem, ipsum.</a>
          </Column>
          <Column>
            <Heading>Lorem, ipsum.</Heading>
            <FooterLink href="#">Lorem, ipsum.</FooterLink>
            <FooterLink href="#">Lorem, ipsum.</FooterLink>
            <FooterLink href="#">Lorem, ipsum.</FooterLink>
            <FooterLink href="#">Lorem, ipsum.</FooterLink>
          </Column>
          <Column>
            <Heading>Lorem, ipsum.</Heading>
            <FooterLink href="#">Lorem, ipsum.</FooterLink>
            <FooterLink href="#">Lorem, ipsum.</FooterLink>
            <FooterLink href="#">Lorem, ipsum.</FooterLink>
            <FooterLink href="#">Lorem, ipsum.</FooterLink>
          </Column>
          <Column>
            <Heading>Lorem, ipsum.</Heading>
            <FooterLink href="#">Lorem, ipsum.</FooterLink>
            <FooterLink href="#">Lorem, ipsum.</FooterLink>
            <FooterLink href="#">Lorem, ipsum.</FooterLink>
            <FooterLink href="#">Lorem, ipsum.</FooterLink>
          </Column>
        </Row>
        &copy;{new Date().getFullYear()} All Rights Reserved
      </Container>
    </Box>
    </div>
  );
};
export default Footer;

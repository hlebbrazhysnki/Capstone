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
     
      <Container>
        <Row>
          <Column>
            <Heading>Capstone Project</Heading>
            <a class="text-white">This project was created by a team of students from Kable Academy's Web Development Bootcamp.</a>
          </Column>
          <Column>
            <Heading>Michael Wilson II</Heading>
            <FooterLink href="https://www.linkedin.com/in/michael-w-05299340/">LinkedIn</FooterLink>
            <FooterLink href="https://github.com/MikeD-Wil">GitHub</FooterLink>
            
          </Column>
          <Column>
            <Heading>Gleb Brazhynski</Heading>
            <FooterLink href="https://www.linkedin.com/in/hleb-brazhynski-406a49219/">LinkedIn</FooterLink>
            <FooterLink href="https://github.com/hlebbrazhysnki">GitHub</FooterLink>
            
          </Column>
          <Column>

            <Heading id='Jonny'>Jonathan Hill</Heading>
            <FooterLink href="https://www.linkedin.com/in/jonathan-hill-202997221/">LinkedIn</FooterLink>
            <FooterLink href="https://github.com/JonathanHill513">GitHub</FooterLink>
            
          </Column>
          
        </Row>

        
      </Container>
    </Box>
    </div>
  );
};
export default Footer;

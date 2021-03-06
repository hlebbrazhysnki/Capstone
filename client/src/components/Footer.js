import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import '../style.css';
const Footer = () => {
  return (
    <div className='footer'>
    <Box>
      <h1 style={{ color: "white",
                   textAlign: "center",
                   marginTop: "-50px" }}>
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Capstone Project</Heading>
            <a class="text-white">This project was created by a team of students from <FooterLink href="https://kableacademy.com/">Kable Academy's</FooterLink> Web Development Bootcamp.</a>
          </Column>
          <Column>
            <Heading>Michael II Wilson </Heading>
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
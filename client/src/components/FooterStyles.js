import styled from 'styled-components';
export const Box = styled.div`
padding: 20px 20px;
background: rgb(101, 67, 33);
position:scroll;
left:0px;
right:0px;
bottom: 0px;
height:20%;
width: 100%;
margin-top: auto;
@media (max-width: 1000px) {
  padding: 70px 30px;
}
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 1000px;
  margin: 0 auto;
`;
export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;
export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
                       minmax(185px, 1fr));
grid-gap: 20px;
@media (max-width: 1000px) {
  grid-template-columns: repeat(auto-fill,
                         minmax(200px, 1fr));
}
`;
export const FooterLink = styled.a`
color: white;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;
&:hover {
    color: lightskyblue;
    transition: 200ms ease-in;
}
`;
export const Heading = styled.p`
font-size: 24px;
color: white;
margin-bottom: 40px;
display:flex;
height:55px;
font-weight: bold;
`;
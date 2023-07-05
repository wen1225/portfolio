import React, { useState } from "react";
import ResumeCV from "./resume_and_cv/resume_and_cv.pdf";
import styled from '@emotion/styled';


export default function Resume() {
  return (
    <>
      <NavBar>
      </NavBar>
      <StyledContainer>
        <StyledIFrame title={"Resume"} src={ResumeCV}></StyledIFrame>
      </StyledContainer>
    </>

  )
}

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <>
      <NavToggleContainer>
        <NavToggleBtn onClick={toggleNav}>&#9776;</NavToggleBtn>
      </NavToggleContainer>
      <Nav>
        <Ul open={isNavOpen}>
          <Li><A href="/">HOME</A></Li>
          <Li><A href="/projects">PROJECTS</A></Li>
          <Li><A href="/photography">PHOTOGRAPHY</A></Li>
          <Li><A href="/about">ABOUT</A></Li>
          <Li><A href="mailto:wyho1225@gmail.com">EMAIL</A></Li>
        </Ul>
      </Nav>
    </>

  );
};




const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
  padding: 10px;

  @media (max-width: 800px) {
    font-size: 12px;
    background: transparent;
    padding: 0;
  }
`;

const NavToggleBtn = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;

  @media (max-width: 800px) {
    display: block;
  }
`;

const NavToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;


`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 5vw;
  font-family: 'Lato';
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: ${props => (props.open ? "center" : "flex-start")};
    max-height: ${props => (props.open ? "300px" : "0")};
    padding: ${props => (props.open ? "10px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
    opacity: ${props => (props.open ? "1" : "0")};

    /*Added to address the slight jerky motion when the toggle button is clicked*/
    transition-delay: ${props => (props.open ? "0.1s" : "0")};
  }

  @media (max-width: 900px) {
    font-size: 12px;
  }
`;

const Li = styled.li`
  &:last-child {
    margin-right: 0;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: #000;
  transition: 0.3s ease-in-out;
  padding: 4px;
  border: transparent;
  border-radius: 5px;
  letter-spacing: 2.5px;


  &:hover {
    background-color: #52565a;
    color: #f2f2f2;
  }

  
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10vh 5vw 5vh 5vw;
  
  /* To enable mobile scrolling */
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;

  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 800px) {
    margin: 2vh 1vh 1vh 1vh;
  }
`;

const StyledIFrame = styled.iframe`

  height: 100vh;
  width: 100vw;

`;
import React from "react";
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
  return (
    <Nav>
      <Ul>
        <Li><A href="mailto:wyho1225@gmail.com">wyho1225@gmail.com</A></Li>
        <Li><A href="/">Home</A></Li>
        <Li><A href="/about">About</A></Li>
        <Li><A href="/photography">Photography</A></Li>
      </Ul>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: #f2f2f2;
  padding: 10px;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  gap: 5vw;
  font-family: 'Arial';
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
  animation: fadeIn 2s ease-in-out forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const StyledIFrame = styled.iframe`

  height: 100vh;
  width: 100vw;

`;
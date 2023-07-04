import React from "react";
import ResumeCV from "./resume_and_cv/resume_and_cv.pdf";
import styled from '@emotion/styled';
import { css } from "@emotion/react";



export default function Resume() {
  return (
    <StyledContainer>
      <StyledIFrame title={"Resume"} src={ResumeCV}></StyledIFrame>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 5vh 5vw 5vh 5vw;
`;

const StyledIFrame = styled.iframe`

  min-width: 300px;
  max-width: 800px;
  width: 100%;

  max-height: 1000px;
  height: 100vh;

`;

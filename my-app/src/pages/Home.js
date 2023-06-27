import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

export default function Home() {

    const navigate = useNavigate();
    const handleClick = (title) => {
        // Navigate to corresponding page based on the title
        switch (title) {
            case 'projects':
                navigate('/projects');
                break;
            case 'resume':
                navigate('/resume');
                break;
            case 'photography':
                navigate('/photography');
                break;
            case 'about':
                navigate('/about');
                break;
            default:
                break;
        }

    }

    return (
        <StyledContainer>
            <StyledEmail href="mailto:kenho12251999@gmail.com">kenho12251999@gmail.com</StyledEmail>
            <StyledContent>
                <StyledName>WEN YAO HO</StyledName>
                <StyledTitle>
                    SOFTWARE DEVELOPER
                    <PushPinEmoji>📍</PushPinEmoji>
                </StyledTitle>
                <StyledList>
                    <StyledListItem>
                        <StyledText onClick={() => handleClick('projects')}>PROJECTS</StyledText>
                        <StyledDescription>Find my most recent programming content here</StyledDescription>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledText onClick={() => handleClick('resume')}>RESUME & CV</StyledText>
                        <StyledDescription>My most recent resume and CV can be found here</StyledDescription>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledText onClick={() => handleClick('photography')}>PHOTOGRAPHY</StyledText>
                        <StyledDescription>I love taking photos. I hope you'll be visually pleased!</StyledDescription>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledText onClick={() => handleClick('about')}>ABOUT ME</StyledText>
                        <StyledDescription>Getting a bit personal aren't we</StyledDescription>
                    </StyledListItem>
                </StyledList>
            </StyledContent>
            <StyledCircleTop />
            <StyledCircleBottom />
        </StyledContainer>
    )
}

function PushPinEmoji() {

    const ResponsiveEmoji = styled.div`
        fontSize: 20px;
        marginTop: 10px;

        @media (max-width: 1000px) {
            fontSize: 10px;
        }
    `;

    return (
        <ResponsiveEmoji>📍 San Jose, CA</ResponsiveEmoji>
    )
}

const StyledEmail = styled.a`
    color: black;
    text-decoration: none;
    font-family: 'LeagueSpartan';
    position: absolute;
    top: 16px;
    left: 16px;
`;

const StyledContainer = styled.div`
    width: 50vw;
    margin: 0 auto;
    height: 100vh;
`;

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    font-family: 'LeagueSpartan';
`;

const StyledName = styled.h1`
    font-size: 80px;
    margin-top: 15vh;

    @media (max-width: 800px) {
        font-size: 40px;
    }
`;

const StyledTitle = styled.h2`
    font-size: 30px;
    margin-bottom: 15vh;

    @media (max-width: 800px) {
        font-size: 15px;
        margin-bottom: 5vh;
    }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledListItem = styled.li`
  margin-bottom: 70px;
`;

const StyledText = styled.span`
  margin-bottom: 6vh;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &.blur {
    opacity: 0.5;
    filter: blur(4px);
  }

  @media (max-width: 800px) {
    margin: 5vh 5vh 5vh 0;
    font-size: 16px;
  }
`;

const StyledDescription = styled.p`
    font-family: 'Arial';

    @media (max-width: 800px) {
        font-size: 12px;
      }
`;

//This is the top right circle
const StyledCircleTop = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 0 0 0 100%;
  background-color: #082392;
  position: absolute;
  top: 0px;
  right: 0px;

  @media (max-width: 800px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 400px) {
    width: 80px;
    height: 70px;
  }

`;

//This is the bottom left circle
const StyledCircleBottom = styled.div`
width: 350px;
height: 200px;
border-radius: 0 100% 0 0;
background-color: #f9cc01;
position: absolute;
bottom: 0px;
left: 0px;

@media (max-width: 1000px) {
  width: 120px;
  height: 100px;
}

@media (max-width: 400px) {
  width: 60px;
  height: 50px;
}
`;


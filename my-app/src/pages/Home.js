import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Background from '../components/Background';

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
        <>
            <Background />
            <StyledContainer>
                <StyledEmail href="mailto:wyho1225@gmail.com">wyho1225@gmail.com</StyledEmail>
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
            </StyledContainer>
        </>
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

export const StyledEmail = styled.a`
    color: white;
    text-decoration: none;
    font-family: 'LeagueSpartan-Bold';
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 16px;
    left: 16px;
`;

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      background-image: radial-gradient(ellipse at center, transparent 95%, black 100%);
    }
`;

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    font-family: 'LeagueSpartan-Bold';
`;

const StyledName = styled.h1`
    font-size: 80px;
    margin-top: 15vh;
    color: #f1f3f5;
    letter-spacing: 15px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);


    @media (max-width: 800px) {
        font-size: 40px;
    }
`;

const StyledTitle = styled.h2`
    font-size: 30px;
    margin-bottom: 15vh;
    color: #f1f3f5;
    letter-spacing: 5px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);


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
  color: #f1f3f5;
  letter-spacing: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);


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
    letter-spacing: 5px;
  }
`;

const StyledDescription = styled.p`
    font-family: 'LeagueSpartan-Medium';
    color: #f1f3f5;
    letter-spacing: 1px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    @media (max-width: 800px) {
        font-size: 12px;
      }
`;

//This is the top right circle
/*const StyledCircleTop = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 0 0 0 100%;
  background-color: #082392;
  position: absolute;
  top: 0px;
  right: 0px;

  
  opacity: 0.8;
  filter: blur(4px);
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.5);

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
*/

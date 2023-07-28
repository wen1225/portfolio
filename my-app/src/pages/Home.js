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
                <StyledList>
                        <StyledName>KEN HO</StyledName>
                    <StyledListItem>
                        <StyledTitle>
                            Software Engineer based in San Jose, CA
                        </StyledTitle>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledText onClick={() => handleClick('projects')}>PROJECTS</StyledText>
                        <StyledDescription>A collection of my programing projects</StyledDescription>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledText onClick={() => handleClick('resume')}>RESUME & CV</StyledText>
                        <StyledDescription>My most recent resume and CV can be found here</StyledDescription>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledText onClick={() => handleClick('photography')}>PHOTOGRAPHY</StyledText>
                        <StyledDescription>My other creative outlet</StyledDescription>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledText onClick={() => handleClick('about')}>ABOUT ME</StyledText>
                        <StyledDescription>Getting a bit personal aren't we</StyledDescription>
                    </StyledListItem>
                </StyledList>
                <StyledEmail href="mailto:wyho1225@gmail.com">wyho1225@gmail.com</StyledEmail>
            </StyledContainer>
        </>

    )
}

export const StyledEmail = styled.a`
    color: white;
    text-decoration: none;
    font-family: 'LeagueSpartan-Medium';
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    letter-spacing: 1px;
    padding: 2px;
    position: fixed;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 800px) {
        font-size: 12px;
      }

    @media (max-width: 450px) {
        font-size: 9px;
    }
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: 100vh;
    height: 100vh;
    font-family: 'LeagueSpartan-Bold';
    text-align: center;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
    }

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

    @media (max-width: 450px) {
        padding: 25px;
        font-size: 12px;
        width: 80vw;
    }
`;

const StyledName = styled.h1`
    font-size: 80px;
    margin-top: 15vh;
    color: #f1f3f5;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    @media (max-width: 800px) {
        font-size: 50px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }
    @media (max-width: 450px) {
        font-size: 50px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }
`;

const StyledTitle = styled.h2`
    font-size: 16px;
    font-family: 'LeagueSpartan-Regular';
    margin-bottom: 12vh;
    color: #f1f3f5;
    letter-spacing: 1px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);


    @media (max-width: 800px) {
        font-size: 13px;
        margin-bottom: 5vh;
    }

    @media (max-width: 450px) {
        font-size: 13px;
    }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

`;

const StyledListItem = styled.li`
  margin-bottom: 65px;
`;

const StyledText = styled.span`
  margin-bottom: 6vh;
  font-size: 20px;
  cursor: pointer;
  color: #f1f3f5;
  letter-spacing: 12px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  position: relative;

  &:hover {
    color: #ffcc00;
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
    padding-top: 5px;
    @media (max-width: 800px) {
        font-size: 13px;
        padding-top: 2px;
      }
`;

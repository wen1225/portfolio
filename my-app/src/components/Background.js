import React from 'react';
import styled from '@emotion/styled';
import backgroundImage from '../images/backdrop.png';

const BackgroundImage = styled.div`
  position: fixed;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  z-index: -1;
  opacity: 0.95;
`;

const Background = () => {
  return (
    <BackgroundImage />
  );
};

export default Background;

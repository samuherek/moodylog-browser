// NPM
import React from 'react';
import styled, { keyframes } from 'styled-components';

// COMPONENTS

// ACTIONS/CONFIG

// STYLES
const loaderRotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
`;

const SpinnerIcon = styled.div`
  width: 36px;
  height: 36px;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(192, 200, 208, 0.39);
  border-top-color: #0f49a2;
  border-radius: 50%;
  position: relative;
  animation: ${loaderRotate} 600ms linear infinite;
  margin: 0 auto;
`;

// MODULE
type Props = {
  theme: Object
};

export default function Spinner({ theme }: Props): ReactElement {
  return <SpinnerIcon theme={theme} />;
}

// Props Validation

// NPM
import React from 'react';
import styled from 'styled-components';

// COMPONENTS

// ACTIONS/CONFIG

// STYLES
const Wrap = styled.div`
  border-radius: 6px;
  overflow: hidden;
  background: white;
  box-shadow: 0px 6px 25px -5px rgba(100, 100, 100, 0.1);
  position: relative;
`;

// MODULE
type Props = {
  children?: React.Node
};

export default function Cart({ children }: Props): ReactElement {
  return <Wrap>{children}</Wrap>;
}

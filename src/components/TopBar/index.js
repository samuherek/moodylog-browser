// NPM
import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import { ProfileIcon } from '../icons';

// ACTIONS/CONFIG

// STYLES
const Wrap = styled.header`
  width: 100%;
  height: 40px;
  display: flex;
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AButton = styled.button`
  font-size: inherit;
  font-family: inherit;
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  padding: 10px;

  svg {
    font-size: 24px;
    color: ${props => props.theme.colors.muted};
  }
`;

// MODULE
const TopBar = ({}): ReactElement => {
  return (
    <Wrap>
      <Action>
        <AButton>
          <ProfileIcon />
        </AButton>
      </Action>
    </Wrap>
  );
};

export default TopBar;

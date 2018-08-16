// NPM
import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import { BackIcon } from '../../components/icons';

// ACTIONS/CONFIG

// STYLES
import { Header, HeaderTitle, BackBtn } from '../../components/Page/styles';

const Wrap = styled.div``;

// MODULE
export default function PHScene({}): ReactElement {
  return (
    <Wrap>
      <Header>
        <HeaderTitle>How do you feel?</HeaderTitle>
        <BackBtn to="/">
          <BackIcon />
        </BackBtn>
      </Header>
      <div style={{ padding: '25px', opacity: '0.5' }}>
        <p>Still work in progress.</p>
      </div>
    </Wrap>
  );
}

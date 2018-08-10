// NPM
import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import { BackIcon } from '../../components/icons';

// ACTIONS/CONFIG

// STYLES
import { Header, HeaderTitle, BackBtn } from '../../components/Page/styles';

// MODULE
export default function AccountScene({}) {
  return (
    <div>
      <Header>
        <BackBtn to="/">
          <BackIcon />
        </BackBtn>
        <HeaderTitle>Account</HeaderTitle>
      </Header>
      <div style={{ padding: '25px', opacity: '0.5' }}>
        <p>More account stuff coming soon.</p>
      </div>
    </div>
  );
}

// Props Validation
AccountScene.propTypes = {};

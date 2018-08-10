// NPM
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

// COMPONENTS
import { ProfileIcon } from '../icons';

// ACTIONS/CONFIG
import { signOutUser } from '../../actions/authActions';

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
    color: ${props => props.theme.colors.muted}
  }
`;

// MODULE
const TopBar = ({ }) => {
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

// Props Validation
TopBar.propTypes = {};

export default connect(
  undefined
)(TopBar);

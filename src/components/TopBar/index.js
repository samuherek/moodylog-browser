// NPM
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

// COMPONENTS

// ACTIONS/CONFIG
import { signOutUser } from '../../actions/authActions';

// STYLES
const Wrap = styled.header`
  width: 100%;
  height: 40px;
  display: flex;
  border-bottom: 1px solid #ccc;
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
`;

// MODULE
const TopBar = ({ signOutUser }) => {
  return (
    <Wrap>
      <Action>
        <AButton onClick={() => {}}>Resize</AButton>
      </Action>
      <Action>
        <AButton
          onClick={() => {
            signOutUser();
          }}
        >
          Sign out
        </AButton>
      </Action>
    </Wrap>
  );
};

// Props Validation
TopBar.propTypes = {};

export default connect(
  undefined,
  { signOutUser }
)(TopBar);

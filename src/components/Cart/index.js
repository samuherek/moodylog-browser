// NPM
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// COMPONENTS

// ACTIONS/CONFIG

// STYLES
const Wrap = styled.div`
  border-radius: 6px;
  overflow: hidden;
  background: white;
  box-shadow: 0px 6px 25px -5px rgba(50, 50, 50, 0.1);
`;

// MODULE
export default function Cart({ children }) {
  return <Wrap>{children}</Wrap>;
}

// Props Validation
Cart.propTypes = {};

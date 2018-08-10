// NPM
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

// COMPONENTS
import Avatar from '../../Avatar';

// ACTIONS/CONFIG

// STYLES
import { Header, HeaderTitle, Nav } from '../styles';

// MODULE
const BaseHeader = ({ user, title }) => {
  return [
    <Header key="header">
      <HeaderTitle>
        Hi{' '}
        {user.displayName ? (
          <span style={{ opacity: '0.15' }}>{user.displayName}</span>
        ) : (
          user.displayName
        )}
        ,<br />
        {title}
      </HeaderTitle>
      <Avatar to="/account" pushRight />
    </Header>,
    <Nav key="nav">
      <NavLink exact to="/">
        Logging
      </NavLink>
      <NavLink to="/analytics">Analizing</NavLink>
    </Nav>
  ];
};

// Props Validation
BaseHeader.propTypes = {};

const mapStateToProps = state => {
  return {
    user: state.profile
  };
};

export default connect(mapStateToProps)(BaseHeader);

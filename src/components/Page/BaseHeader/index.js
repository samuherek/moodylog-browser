// NPM
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

// COMPONENTS
import Avatar from '../../Avatar';

// ACTIONS/CONFIG

// STYLES
import { Header, HeaderTitle, Nav } from '../styles';

// MODULE
type Props = {
  user: Object,
  title: string
};

const BaseHeader = ({ user, title }: Props): ReactElement => {
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
      <NavLink exact to="/dashboard">
        Logging
      </NavLink>
      <NavLink to="/analytics">Analizing</NavLink>
    </Nav>
  ];
};

const mapStateToProps = state => {
  return {
    user: state.profile
  };
};

export default connect(mapStateToProps)(BaseHeader);

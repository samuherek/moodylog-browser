// NPM
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

// COMPONENTS
import Avatar from '../../Avatar';

// ACTIONS/CONFIG
import { fireAuth } from '../../../firebase';

// STYLES
import { Header, HeaderTitle, Nav } from '../styles';

// MODULE
type Props = {
  title: string
};

export default function BaseHeader({ title }: Props): ReactElement {
  const displayName = fireAuth.getDisplayName();

  return (
    <Fragment>
      <Header key="header">
        <HeaderTitle>
          Hi <span style={{ opacity: '0.15' }}>{displayName}</span>,<br />
          {title}
        </HeaderTitle>
        <Avatar to="/account" pushRight />
      </Header>
      <Nav key="nav">
        <NavLink exact to="/dashboard">
          Logging
        </NavLink>
        <NavLink to="/analytics">Analizing</NavLink>
      </Nav>
    </Fragment>
  );
}

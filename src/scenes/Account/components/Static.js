// NPM
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// COMPONENTS
import Avatar from '../../../components/Avatar';

// ACTIONS/CONFIG

// STYLES
const BlockUser = styled.div`
  margin-top: 35px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.h4`
  font-size: 18px;
  line-height: 1;
  margin-bottom: 5px;
`;

const Verification = styled.span`
  color: ${props => (props.verified ? props.theme.colors.primary : 'red')};
  font-size: 11px;
  opacity: 0.5;
  display: inline-block;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const Email = styled.span`
  opacity: 0.35;
`;

const Footer = styled.div`
  display: flex;
  margin-top: 80px;
  padding: 25px;
  justify-content: space-around;
  opacity: 0.75;
`;

const ActionBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  padding: 5px;
`;

// MODULE
export default function ProfileStatic({ user, onSignOut, onEditToggle }) {
  return [
    <BlockUser key="block">
      <Avatar size="big" />
      <Verification verified={user.verified}>
        {user.verified ? 'Verified' : 'Unverified'}
      </Verification>
      <Name>{user.displayName}</Name>
      <Email>{user.email}</Email>
    </BlockUser>,
    <Footer key="footer">
      <ActionBtn onClick={onEditToggle}>Edit Profile</ActionBtn>
      <ActionBtn onClick={onSignOut}>Sign out</ActionBtn>
    </Footer>
  ];
}

// Props Validation
ProfileStatic.propTypes = {};

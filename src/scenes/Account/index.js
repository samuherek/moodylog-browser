// NPM
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

// COMPONENTS
import { BackIcon } from '../../components/icons';
import Avatar from '../../components/Avatar';

// ACTIONS/CONFIG
import { signOutUser } from '../../actions/authActions';

// STYLES
import { Header, HeaderTitle, BackBtn } from '../../components/Page/styles';

const BlockUser = styled.div`
  margin-top: 10px;
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
  margin-top: 50px;
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
const AccountScene = ({ user, signOutUser }) => {
  return (
    <div>
      <Header>
        <HeaderTitle>Account</HeaderTitle>
        <BackBtn to="/">
          <BackIcon />
        </BackBtn>
      </Header>
      <BlockUser>
        <Avatar size="big" />
        <Verification verified={user.verified}>
          {user.verified ? 'Verified' : 'Unverified'}
        </Verification>
        <Name>{user.displayName}</Name>
        <Email>{user.email}</Email>
      </BlockUser>
      <Footer>
        <ActionBtn>Edit Profile</ActionBtn>
        <ActionBtn onClick={signOutUser}>Sign out</ActionBtn>
      </Footer>
    </div>
  );
};

// Props Validation
AccountScene.propTypes = {};

const mapStateToProps = state => {
  return {
    user: state.profile
  };
};

export default connect(
  mapStateToProps,
  { signOutUser }
)(AccountScene);

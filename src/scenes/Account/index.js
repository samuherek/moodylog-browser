// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// COMPONENTS
import { BackIcon } from '../../components/icons';
import Edit from './components/Edit';
import Static from './components/Static';

// ACTIONS/CONFIG
import { signOutUser } from '../../actions/authActions';
import { updateProfileInDb } from '../../actions/userActions';

// STYLES
import { Header, HeaderTitle, BackBtn } from '../../components/Page/styles';

// MODULE
class AccountScene extends Component {
  constructor() {
    super();
    this.state = {
      editting: false
    };
    this.toggleEditting = this.toggleEditting.bind(this);
  }

  toggleEditting() {
    this.setState({ editting: !this.state.editting });
  }

  render() {
    const { user, signOutUser, updateProfileInDb } = this.props;
    const { editting } = this.state;

    return (
      <div>
        <Header>
          <HeaderTitle>Account</HeaderTitle>
          <BackBtn to="/">
            <BackIcon />
          </BackBtn>
        </Header>
        {editting ? (
          <Edit user={user} onEditToggle={this.toggleEditting} onUpdateUser={updateProfileInDb} />
        ) : (
          <Static user={user} onSignOut={signOutUser} onEditToggle={this.toggleEditting} />
        )}
      </div>
    );
  }
}

// Props Validation
AccountScene.propTypes = {};

const mapStateToProps = state => {
  return {
    user: state.profile
  };
};

export default connect(
  mapStateToProps,
  { signOutUser, updateProfileInDb }
)(AccountScene);

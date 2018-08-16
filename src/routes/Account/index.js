// NPM
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// COMPONENTS
import { BackIcon } from '../../components/icons';
import Edit from './components/Edit';
import Static from './components/Static';
import Spinner from '../../components/Spinner';
import { ProfileContext } from '../../context/profile/ProfileProvider';

// STYLES
import { Header, HeaderTitle, BackBtn } from '../../components/Page/styles';

type State = {
  editting: Boolean | false
};

type Props = {
  context: Object,
  // user: Object,
  signOutUser: () => void,
  updateProfileInDb: () => void
};

class AccountScene extends Component<State, Props> {
  constructor() {
    super();
    this.state = {
      loading: true,
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
      <Fragment>
        <Header>
          <HeaderTitle>Account</HeaderTitle>
          <BackBtn to="/">
            <BackIcon />
          </BackBtn>
        </Header>
        <ProfileContext.Consumer>
          {({ email, displayName, verified }) => {
            if (editting) {
              return (
                <Edit
                  user={{
                    email,
                    displayName,
                    verified
                  }}
                  onEditToggle={this.toggleEditting}
                  onUpdateUser={() => {}}
                />
              );
            } else {
              return (
                <Static
                  user={{
                    email,
                    displayName,
                    verified
                  }}
                  onSignOut={() => {}}
                  onEditToggle={this.toggleEditting}
                />
              );
            }
          }}
        </ProfileContext.Consumer>
      </Fragment>
    );
  }
}

export default AccountScene;

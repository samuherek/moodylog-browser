// NPM
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// COMPONENTS
import { BackIcon } from '../../components/icons';
import Edit from './components/Edit';
import Static from './components/Static';
import Spinner from '../../components/Spinner';
import withProfile from './withProfile';

// ACTIONS/CONFIG
import { signOutUser } from '../../actions/authActions';
import { updateProfileInDb } from '../../actions/userActions';

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

  componentDidMount() {
    const { loaded, getProfileFromDb } = this.props.context;
    if (!loaded) {
      getProfileFromDb();
    }
  }

  render() {
    const { user, signOutUser, updateProfileInDb } = this.props;
    const { editting } = this.state;
    const { loaded, email, displayName, verified } = this.props.context;

    return (
      <Fragment>
        <Header>
          <HeaderTitle>Account</HeaderTitle>
          <BackBtn to="/">
            <BackIcon />
          </BackBtn>
        </Header>
        {!loaded ? (
          <Spinner />
        ) : (
          <Fragment>
            {editting ? (
              <Edit
                user={{
                  email,
                  displayName,
                  verified
                }}
                onEditToggle={this.toggleEditting}
                onUpdateUser={updateProfileInDb}
              />
            ) : (
              <Static
                user={{
                  email,
                  displayName,
                  verified
                }}
                onSignOut={signOutUser}
                onEditToggle={this.toggleEditting}
              />
            )}
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default withProfile(AccountScene);

// (
//   mapStateToProps,
//   { signOutUser, updateProfileInDb }
// );

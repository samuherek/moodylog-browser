import React, { PureComponent, createContext, type Node } from 'react';
import { firestore, fireAuth } from '../../firebase';

export const ProfileContext = createContext({
  email: '',
  uid: '',
  displayName: '',
  verified: false,
  loaded: false,
  getProfileFromDb: (): void => {},
  setProfileKeyChange: (): void => {},
  updateProfileToDb: (): void => {},
  resetToDefaultProfile: (): void => {}
});

type Props = {
  children: Node
};

type State = {
  email: string,
  uid: string,
  displayName: string,
  verified: Boolean,
  loaded: Boolean,
  getProfileFromDb: () => void,
  setProfileKeyChange: () => void,
  updateProfileToDb: () => void,
  resetToDefaultProfile: () => void
};

class ProfileProvider extends PureComponent<Props, State> {
  state = {
    email: '',
    uid: '',
    displayName: '',
    verified: false,
    loaded: false,
    getProfileFromDb: async (): void => {
      console.log('inside provider', this.state);
      if (this.state.uid !== '') return;

      const { uid } = fireAuth.getCurrentUser();
      const doc = await firestore
        .collection('users')
        .doc(uid)
        .get();
      if (doc.exists) {
        const data = doc.data();
        this.setState({
          email: data.email,
          displayName: data.displayName || 'Anonymous',
          uid,
          loaded: true
        });
      } else {
        console.log('no such user');
      }
    },
    setProfileKeyChange: (): void => {
      console.log('changing profile context');
    },
    updateProfileToDb: (): void => {
      console.log('updating profile');
    },
    resetToDefaultProfile: (): void => {
      console.log('setting default profile');
    }
  };

  render() {
    console.log(this.state);
    return (
      <ProfileContext.Provider value={this.state}>{this.props.children}</ProfileContext.Provider>
    );
  }
}

export default ProfileProvider;

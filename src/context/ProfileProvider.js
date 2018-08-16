import React, { PureComponent, createContext, type Node } from 'react';
import { firestore, fireAuth } from '../firebase';

export const ProfileContext = createContext({
  email: '',
  uid: '',
  displayName: '',
  verified: false,
  loaded: false,
  getProfileFromDb: (): void => {},
  setProfileKeyChange: (): void => {},
  updateProfileToDb: (): void => {}
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
  updateProfileToDb: () => void
};

class ProfileProvider extends PureComponent<Props, State> {
  state = {
    email: '',
    uid: '',
    displayName: '',
    verified: false,
    loaded: false,
    getProfileFromDb: async (): void => {
      if (this.state.uid) return;

      const { uid } = fireAuth.getCurrentUser();
      const doc = await firestore
        .collection('users')
        .doc(uid)
        .get();
      if (doc.exists) {
        const data = doc.data();
        this.setState({ email: data.email, displayName: data.displayName, uid, loaded: true });
      } else {
        console.log('no such user');
      }
    },
    setProfileKeyChange: (): void => {},
    updateProfileToDb: (): void => {}
  };

  render() {
    console.log(this.state);
    return (
      <ProfileContext.Provider value={this.state}>{this.props.children}</ProfileContext.Provider>
    );
  }
}

export default ProfileProvider;

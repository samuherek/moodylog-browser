import React, { Component, type Node } from 'react';
import { ProfileContext } from '../../context/profile/ProfileProvider';

export default function withRouter(WrappedComponent: ReactElement): ReactElement {
  return class WithRouter extends Component {
    render() {
      return (
        <ProfileContext.Consumer>
          {profileContext => <WrappedComponent context={profileContext} {...this.props} />}
        </ProfileContext.Consumer>
      );
    }
  };
}

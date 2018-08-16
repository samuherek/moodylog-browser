// NPM
import React from 'react';

// COMPONENTS

// ACTIONS/CONFIG

// MODULE
type Props = {
  user: Object,
  onEditToggle: (event: SyntheticMouseEvent<HTMLButtonElement>) => void,
  onUpdateUser: () => void
};

export default function ProfileEdit({ user, onEditToggle, onUpdateUser }: Props): ReactElement {
  return (
    <div>
      Here we are.
      <span onClick={onEditToggle}>Toggle</span>
    </div>
  );
}

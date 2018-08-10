// NPM
import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS

// ACTIONS/CONFIG

// MODULE
export default function ProfileEdit({ user, onEditToggle, onUpdateUser }) {
  return (
    <div>
      Here we are.
      <span onClick={onEditToggle}>Toggle</span>
    </div>
  );
}

// Props Validation
ProfileEdit.propTypes = {};

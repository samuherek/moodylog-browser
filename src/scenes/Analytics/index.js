// NPM
import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import BaseHeader from '../../components/Page/BaseHeader';

// ACTIONS/CONFIG

// STYLES

// MODULE
export default function AnalyticsScene({}) {
  return (
    <div>
      <BaseHeader />
      <div style={{ padding: '25px', opacity: '0.5' }}>
        <p>
          This feature is still just coming. Keep using the app, let me know about it and it will be
          done quciker ;)
        </p>
      </div>
    </div>
  );
}

// Props Validation
AnalyticsScene.propTypes = {};
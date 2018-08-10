// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';

// COMPONENTS

// ACTIONS/CONFIG
import { logMoodToDB } from '../../actions/logActions';

// STYLES
const Wrap = styled.div`
  padding: 25px;
  max-width: 600px;

  h2 {
    margin-bottom: 25px;
  }
`;

const Mood = styled.button`
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  width: 100%;
  padding: 25px;
  margin-bottom: 25px;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  color: white;
  background: ${props => props.color};
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  ${props =>
    props.submitting &&
    css`
      cursor: disabled;
      opacity: 0.4 !important;
    `} &:hover {
    opacity: 1;
  }
`;

// MODULE
class MoodScene extends Component {
  state = {
    moods: [
      { label: 'Never better', color: '#709E73', value: 'excellent' },
      { label: 'Decent', color: '#B8E7D1', value: 'good' },
      { label: 'Could be better', color: '#FBB959', value: 'moody' },
      { label: 'Really?', color: '#FB865F', value: 'bad' }
    ],
    submitting: false
  };

  constructor() {
    super();
    this.handleValueSubmit = this.handleValueSubmit.bind(this);
  }

  handleValueSubmit(value) {
    const { history, logMoodToDB, submitting } = this.props;
    if (submitting) return;

    this.setState({ submitting: true });

    logMoodToDB(value).then(() => {
      history.push('/');
    });
  }

  render() {
    const { moods, submitting } = this.state;

    return (
      <Wrap>
        <h2>How do you feel at the moment?</h2>
        {moods.map(mood => (
          <Mood
            submitting={submitting}
            key={mood.value}
            color={mood.color}
            onClick={() => {
              this.handleValueSubmit(mood.value);
            }}
          >
            {mood.label}
          </Mood>
        ))}
      </Wrap>
    );
  }
}

// Props Validation
MoodScene.propTypes = {};

export default connect(
  undefined,
  { logMoodToDB }
)(MoodScene);

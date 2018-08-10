// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// COMPONENTS
import Cart from '../../components/Cart';

// ACTIONS/CONFIG
import { firestore, auth } from '../../firebase';

// STYLES
const Wrap = styled.div`
  background: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 25px;
  background: ${props => props.theme.colors.base};
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 15px;
  line-height: 1.2;
`;

const moodTheme = {
  green: '#709E73',
  orange: '#B8E7D1',
  yellow: '#FBB959',
  red: '#FB865F'
};

const Moods = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Item = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  color: white;
  background: ${props => moodTheme[props.theme]};
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const Grid = styled.div`
  & > div {
    margin-bottom: 25px;
  }
`;

const TagDisabled = styled.span`
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 125px;
  text-decoration: none;
  padding: 15px;
`;

const Tag = styled(Link)`
  width: 100%;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 125px;
  text-decoration: none;
  padding: 15px;
`;

// MODULE
class DashboardScene extends Component {
  constructor() {
    super();
  }
  render() {
    const { moodTimeout } = this.props;

    return (
      <Wrap>
        <Title>
          Hi,
          <br />
          what's to log?
        </Title>
        <Grid>
          <Cart>
            {moodTimeout ? <TagDisabled>Timeout</TagDisabled> : <Tag to="/mood">Mood</Tag>}
          </Cart>
          <Cart>
            <Tag to="/mood">pH</Tag>
          </Cart>
        </Grid>
      </Wrap>
    );
  }
}

// Props Validation
DashboardScene.propTypes = {};

const mapStateToProps = state => {
  return {
    moodTimeout: state.ui.moodTimeout
  };
};

export default connect(mapStateToProps)(DashboardScene);

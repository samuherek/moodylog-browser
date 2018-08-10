// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

// COMPONENTS
import BaseHeader from '../../components/Page/BaseHeader';
import Cart from '../../components/Cart';

// ACTIONS/CONFIG

// STYLES

const Wrap = styled.div``;

const Grid = styled.div`
  padding: 0 25px;
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
        <BaseHeader />
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

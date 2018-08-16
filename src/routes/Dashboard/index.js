// NPM
import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

// COMPONENTS
import BaseHeader from '../../components/Page/BaseHeader';
import Cart from '../../components/Cart';
import { MoodIcon } from '../../components/icons';

// ACTIONS/CONFIG

// STYLES
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
  letter-spacing: 1.75px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 125px;
  text-decoration: none;
  padding: 15px;
  font-weight: 900;
  color: #8683f9;
  z-index: 2;
  position: relative;
`;

const BG = styled.div`
  position: absolute;
  left: -90px;
  font-size: 200px;
  opacity: 0.15;
  top: -75px;
  transform: rotate(25deg);
  color: #8683f9;
  z-index: 0;
`;

// MODULE
type Props = {
  moodTimeout: Boolean
};

class DashboardScene extends PureComponent<Props> {
  render() {
    const { moodTimeout } = this.props;

    return (
      <Fragment>
        <BaseHeader title="anything to log?" />
        <Grid>
          <Cart>
            <BG>
              <MoodIcon />
            </BG>
            {moodTimeout ? <TagDisabled>Timeout</TagDisabled> : <Tag to="/mood">Mood</Tag>}
          </Cart>
          <Cart>
            <Tag to="/ph">pH</Tag>
          </Cart>
        </Grid>
      </Fragment>
    );
  }
}

export default DashboardScene;

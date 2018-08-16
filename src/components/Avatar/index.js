// NPM
import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// COMPONENTS
import { ProfileIcon } from '../icons';

// ACTIONS/CONFIG

// STYLES
const Wrap = styled.div`
  height: 40px;
  width: 40px;
  background: #e2e2e2;
  border-radius: 40px;
  text-decoration: none;
  overflow: hidden;
  margin-left: ${props => (props.pushRight ? 'auto' : '0')};

  ${props =>
    props.size === 'big' &&
    css`
      height: 100px;
      width: 100px;
      border-radius: 100px;
    `};
`;

const Thumb = styled.div`
  color: inherit;
  width: 100%;
  height: 100%;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #676767;
  font-size: 20px;
`;

const ThumbLink = styled(Link)`
  color: inherit;
  width: 100%;
  height: 100%;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #676767;
  font-size: 20px;
`;

// MODULE
type Props = {
  src: string,
  to: string,
  pushRight?: Boolean,
  size?: 'medium' | 'big'
};

export default function Avatar({ src, to, pushRight, size }: Props): ReactElement {
  const Inner = to ? ThumbLink : Thumb;

  return (
    <Wrap pushRight={pushRight} size={size}>
      <Inner to={to || null}>{src ? <img src={src} /> : <ProfileIcon />}</Inner>
    </Wrap>
  );
}

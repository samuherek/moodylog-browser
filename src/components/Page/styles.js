import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderTitle = styled.h2`
  font-size: 24px;
  font-weight: 900;
  line-height: 1.2;
`;

export const Thumb = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  background: #e2e2e2;
  border-radius: 40px;
  text-decoration: none;
  color: #676767;
  font-size: 20px;
`;

export const Header = styled.div`
  padding: 30px 25px 0;
  margin-bottom: 25px;
  display: flex;
  align-items: center;

  ${Thumb} {
    margin-left: auto;
    box-shadow: 0px 4px 25px -5px rgba(100, 100, 100, 0.2);
  }
`;

export const Nav = styled.div`
  border-bottom: 1px solid #efefef;
  overflow-y: hidden;
  height: 50px;
  width: calc(100% - 50px);
  margin: 0 25px 25px;

  & > a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
    padding: 15px 0;
    margin-right: 20px;
    letter-spacing: 0.25px;
    position: relative;

    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 3px;
      background: transparent;
    }

    &.active {
      color: ${props => props.theme.colors.primary};

      &:after {
        background: ${props => props.theme.colors.primary};
      }
    }
  }
`;

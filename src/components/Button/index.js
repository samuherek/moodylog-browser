import styled from 'styled-components';
import { lighten } from 'polished';

const Button = styled.button`
  font-family: inherit;
  color: ${props => props.theme.colors.readingText};
  background: ${props => props.theme.colors.secondary};
  outline: 0;
  border: none;
  font-size: 12px;
  padding: 14px 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 2px;
  display: inline-block;
  cursor: pointer;
  transition: background 0.1s ease-out;
  max-width: 200px;

  &:hover {
    background-color: ${props => lighten(0.05, props.theme.colors.primary)};
  }
`;

export default Button;

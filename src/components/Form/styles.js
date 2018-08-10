import styled from 'styled-components';

const FormStyles = styled.div`
  input {
    font-size: inherit;
    padding: 10px 8px;
    font-family: inherit;
    width: 100%;
    // background: ${props => props.theme.colors.fieldBg};
    background: transparent;
    border: 1px solid transparent;
    border-bottom: 1px dashed ${props => props.theme.colors.primary};
    border-radius: 2px;
    outline: 0;
    display: inline-block;

    &:focus {
      background: ${props => props.theme.colors.base};
      border: 1px solid ${props => props.theme.colors.primary};
    }
  }

  button {
    margin: 0 auto;
    width: 100%;
    margin-top: 20px;
    max-width: 180px;
  }

  label {
    word-wrap: break-word;
    color: #707070;
  }
`;

export default FormStyles;

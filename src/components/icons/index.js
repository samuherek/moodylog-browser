import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const SvgWithProps = ComposedComponent => {
  return class SvgProps extends Component {
    static propTypes = {
      ariaHidden: PropTypes.bool,
      focusable: PropTypes.bool,
      role: PropTypes.string
    };
    static defaultProps = {
      ariaHidden: true,
      // focusable: 'false',
      role: 'presentation'
    };
    constructor(props) {
      super(props);
    }
    render() {
      const style = {
        height: '1em',
        width: '1em',
        display: 'block',
        fill: 'currentColor'
      };
      return <ComposedComponent {...this.props} style={style} />;
    }
  };
};

export const ProfileIcon = SvgWithProps(({ ariaHidden, focusable, role, style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    aria-hidden={ariaHidden}
    focusable={focusable}
    role={role}
    style={style}
  >
    <path fill="none" d="M2.4 2.4h35.2v35.2H2.4z" />
    <path d="M20.1 25.1c5.7 0 10.3-4.6 10.3-10.3S25.7 4.6 20.1 4.6 9.8 9.2 9.8 14.8s4.6 10.3 10.3 10.3zm0-17.6c4.1 0 7.3 3.3 7.3 7.3s-3.3 7.3-7.3 7.3-7.3-3.3-7.3-7.3 3.2-7.3 7.3-7.3zM35.6 32.7c-9.4-6.3-21.6-6.3-31 0-.7.4-.9 1.3-.5 2s1.3.9 2 .5l.1-.1c8.4-5.6 19.3-5.6 27.7 0 .7.4 1.6.2 2-.5.4-.6.3-1.4-.3-1.9z" />
  </svg>
));

export const BackIcon = SvgWithProps(({ ariaHidden, focusable, role, style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    aria-hidden={ariaHidden}
    focusable={focusable}
    role={role}
    style={style}
  >
    <path d="M37.2 20c0 .5-.4 1-1 1h-30l9.6 8.8c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L3.1 20.6c-.1-.1-.1-.2-.2-.2-.1-.2-.1-.5 0-.8 0-.1.1-.2.2-.2L14.5 8.9c.4-.4 1-.4 1.3 0 .4.4.4 1 0 1.4l-9.5 8.8h29.9c.5 0 .9.4 1 .9z" />
  </svg>
));

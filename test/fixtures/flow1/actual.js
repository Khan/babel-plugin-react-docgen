// @flow
import React from 'react';

type Props = {
  children: string,
  onClick?: () => any,
  style?: any,
}

const Button = ({ children, onClick, style }: Props) => (
  <button
    style={{ }}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
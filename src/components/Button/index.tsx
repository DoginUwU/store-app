import React from 'react';

import { Container } from './styles';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

const Button: React.FC<Props> = function ({ ...rest }) {
  return (
    <Container {...rest} disabled={rest.disabled}>
      {rest.children}
    </Container>
  );
};

export default Button;

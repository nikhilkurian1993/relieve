import { Color } from '@components/styles/Color';
import Planar from '@components/ui/Planar';
import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div<{ $color: Color }>`
  padding: 0.5rem;
  border-radius: 0.3rem;
  background-color: ${({ theme, $color }) => theme[$color]};
`;

const Flag: FC<{ children: React.ReactNode; color?: Color }> = ({
  children,
  color = 'green',
}) => (
  <Container $color={color}>
    <Planar
      fontSize={1}
      uppercase
      lineHeight={1}
      color={color === 'darkGrey' ? 'white' : 'black'}
    >
      {children}
    </Planar>
  </Container>
);

export default Flag;

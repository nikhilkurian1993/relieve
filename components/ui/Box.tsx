import { Color } from '@components/styles/Color';
import styled, { css } from 'styled-components';

export interface BoxProps {
  dashed?: boolean;
  small?: boolean;
  transparent?: boolean;
  cursor?: boolean;
  color?: Color;
}

const Box = styled.div<BoxProps>`
  padding: ${({ small }) => (small ? 1 : 2)}rem;
  background-color: ${({ transparent, theme, color }) =>
    transparent ? 'transparent' : color ? theme[color] : '#fcfcfc'};
  border: 0.1rem solid #deebe9;
  border-radius: 0.5rem;
  cursor: ${({ cursor }) => (cursor ? 'pointer' : 'initial')};

  ${({ dashed }) =>
    dashed &&
    css`
      border-style: dashed;
      border-color: ${({ theme }) => theme.mediumGrey};
    `};
`;

export default Box;

import React, { FC } from 'react';
import styled from 'styled-components';
import { ColorType } from './CartIcon';

const SVG = styled.svg<{ color: ColorType }>`
  path {
    fill: ${({ theme, color }) => theme[color]};
  }
`;

const TickIcon: FC<{ color: ColorType }> = ({ color }) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 2"
    viewBox="0 0 11.8 9.2"
    color={color}
    xmlSpace="preserve"
  >
    <path d="M3.6 9.2 0 5.6l1.1-1.1 2.5 2.6L10.7 0l1.1 1.1z" />
  </SVG>
);

export default TickIcon;

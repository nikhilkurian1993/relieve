import React, { FC } from 'react';
import styled from 'styled-components';
import { ColorType } from './CartIcon';

const SVG = styled.svg<{ color: ColorType }>`
  path {
    fill: ${({ theme, color }) => theme[color]};
  }
`;

const CloseIcon: FC<{ color: ColorType }> = ({ color }) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 2"
    viewBox="0 0 1080 1080"
    color={color}
    xmlSpace="preserve"
  >
    <path d="M1080 88.2 991.8 0 539.6 452.3 87.7.4.4 88.7l451.3 451.4L-.1 991.9l88.2 88.2 451.8-451.8L991.6 1080l88.4-87.3-452.2-452.2z" />
  </SVG>
);

export default CloseIcon;

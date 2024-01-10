import React, { FC } from 'react';
import styled from 'styled-components';

import { Color } from '@componentsV3/styles/Color';

const SVG = styled.svg<{ color: Color }>`
  path {
    fill: ${({ theme, color }) => theme[color]};
  }
`;

const ChevronIcon: FC<{ color: Color }> = ({ color }) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 2"
    viewBox="0 0 657.9 1080"
    color={color}
    xmlSpace="preserve"
  >
    <path d="M117.9 1080 0 962.1 422.2 540 0 117.9 117.9 0l540 540-540 540z" />
  </SVG>
);

export default ChevronIcon;

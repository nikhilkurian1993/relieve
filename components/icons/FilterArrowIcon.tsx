import { Color } from '@componentsV3/styles/Color';
import React, { FC } from 'react';
import styled from 'styled-components';

const SVG = styled.svg<{ color: Color }>`
  path {
    fill: ${({ theme, color }) => theme[color]};
  }
`;

const FilterArrowIcon: FC<{ color: Color }> = ({ color }) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 2"
    viewBox="0 0 500 250"
    color={color}
    xmlSpace="preserve"
  >
    <g data-name="Layer 1">
      <path d="M500 0 250 250 0 0h500z" />
    </g>
  </SVG>
);

export default FilterArrowIcon;

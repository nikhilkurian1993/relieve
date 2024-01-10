import { Color } from '@componentsV3/styles/Color';
import React, { FC } from 'react';
import styled from 'styled-components';

const SVG = styled.svg<{ color: Color }>`
  path {
    fill: ${({ theme, color }) => theme[color]};
  }
`;

const FiltersIcon: FC<{ color: Color }> = ({ color }) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 2"
    viewBox="0 0 490.2 399.2"
    color={color}
    xmlSpace="preserve"
  >
    <g data-name="Layer 1">
      <path d="M238.1 66.7C231.7 28.7 199.4 0 159.5 0 120 0 87.2 28.7 80.9 66.7h-81v39.9h84.6c10.8 30.7 40.7 53.1 75.1 53.1 34.7 0 64.3-22.4 75.1-53.1H490V66.7H238.1zm-78.6 53.1c-11.6 0-22.4-5.2-29.5-13.2-6.4-7.2-10.4-16.4-10.4-26.7 0-4.8.8-9.2 2.4-13.2 5.2-15.6 20.4-26.7 37.5-26.7s32.3 11.2 37.5 26.7c1.6 4 2.4 8.4 2.4 13.2 0 10.4-4 19.6-10.4 26.7-7.2 8-18 13.2-29.5 13.2zm277.8 186.4c-6.4-37.9-38.7-66.7-78.6-66.7-39.5 0-72.3 28.7-78.6 66.7H-.2v39.9h283.8c10.8 30.7 40.7 53.1 75.1 53.1 34.7 0 64.3-22.4 75.1-53.1H490v-39.9h-52.7zm-78.6 53.1c-11.6 0-22.4-5.2-29.5-13.2-6.4-7.2-10.4-16.4-10.4-26.7 0-4.8.8-9.2 2.4-13.2 5.2-15.6 20.4-26.7 37.5-26.7s32.3 11.2 37.5 26.7c1.6 4 2.4 8.4 2.4 13.2 0 10.4-4 19.6-10.4 26.7-7.2 8-18 13.2-29.5 13.2z" />
    </g>
  </SVG>
);

export default FiltersIcon;

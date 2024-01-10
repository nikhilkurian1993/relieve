import { Color } from '@componentsV3/styles/Color';
import React, { FC } from 'react';
import styled from 'styled-components';

const SVG = styled.svg<{ color: Color }>`
  path {
    fill: ${({ theme, color }) => theme[color]};
  }
`;

const SearchIcon: FC<{ color: Color }> = ({ color }) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 2"
    viewBox="0 0 250 250"
    color={color}
    xmlSpace="preserve"
  >
    <g data-name="Layer 1">
      <path d="M21 42.6c6.1-8.1 13.4-15.4 21.5-21.5-8.2 6-15.4 13.2-21.5 21.5z" />
      <path d="M184 177.2c17.1-18.9 27.6-43.9 27.6-71.3 0-29.2-11.9-55.7-31-74.8-3.6-3.6-7.4-6.9-11.5-10h-.1c-2.6-1.9-5.4-3.9-8.3-5.7h-.1c-2.9-1.7-5.9-3.4-9-4.9C137.8 3.8 122.3 0 105.8 0c-16.5 0-32 3.8-45.9 10.4-3.1 1.5-6.1 3.2-9 4.9-2.9 1.8-5.7 3.7-8.4 5.7-8.1 6.1-15.4 13.4-21.5 21.6-2 2.7-3.9 5.5-5.7 8.4-1.7 2.9-3.4 5.9-4.9 9C3.8 73.8 0 89.3 0 105.8c0 16.4 3.8 31.9 10.4 45.8 1.5 3.1 3.2 6.1 4.9 9v.1c1.8 2.9 3.8 5.7 5.7 8.3v.1c3.2 4.1 6.5 7.9 10 11.5 19.1 19.1 45.5 31 74.8 31 27.4 0 52.4-10.5 71.3-27.6l66 66 6.9-6.9-66-65.9zm-78.2 24.7c-53.1 0-96.2-43.1-96.2-96.1 0-53.1 43.1-96.2 96.2-96.2 53 0 96.1 43.1 96.1 96.2 0 53-43.1 96.1-96.1 96.1z" />{' '}
    </g>
  </SVG>
);

export default SearchIcon;

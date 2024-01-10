import { Color } from '@componentsV3/styles/Color';
import React, { FC } from 'react';
import styled from 'styled-components';

const SVG = styled.svg<{ color: Color }>`
  path {
    fill: ${({ theme, color }) => theme[color]};
  }
`;

const Account: FC<{ color: Color }> = ({ color }) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 2"
    viewBox="0 0 634.4 616"
    color={color}
    xmlSpace="preserve"
  >
    <g data-name="Layer 1">
      <path d="M456.9 129.3c-.1-1.2-.2-2.3-.3-3.5-.1-1.2-.2-2.3-.4-3.5-.1-.6-.2-1.2-.2-1.8-.2-1.2-.3-2.3-.5-3.4-.2-1.2-.4-2.3-.6-3.5C442.4 48.9 385.5 0 317.2 0 248.9 0 192 48.9 179.6 113.6c-.2 1.1-.4 2.3-.6 3.5-.2 1.1-.4 2.3-.5 3.4-.1.6-.2 1.2-.2 1.8-.2 1.2-.3 2.3-.4 3.5-.1 1.2-.2 2.4-.3 3.5-.3 3.6-.4 7.2-.4 10.8 0 3.6.1 7.2.4 10.8.1 1.2.2 2.3.3 3.5.1 1.2.3 2.3.4 3.5.1.6.2 1.2.2 1.8.2 1.2.3 2.3.5 3.5.2 1.2.4 2.3.6 3.5.3 1.7.7 3.4 1.1 5.1.4 1.7.8 3.3 1.2 5 13.4 49.6 53.3 88.3 103.6 99.9 4 .9 8 1.7 12.1 2.2 1 .1 2 .3 3 .4.3 0 .6.1.9.1.9.1 1.9.2 2.8.3h.6c4 .4 8.1.5 12.3.5 4.1 0 8.2-.2 12.3-.5h.6c.9-.1 1.9-.2 2.8-.3.3 0 .5-.1.8-.1 1.4-.2 2.8-.3 4.2-.5 3.7-.5 7.4-1.2 11-2.1 49.5-11.4 88.9-49 102.9-97.5 1.2-4.1 2.2-8.3 3-12.5.2-1.1.4-2.3.6-3.5.2-1.1.4-2.3.5-3.5.1-.6.2-1.2.2-1.8.1-1.2.3-2.3.4-3.5.1-1.2.2-2.3.3-3.5.3-3.6.4-7.2.4-10.8.1-3.6 0-7.2-.3-10.8zM317.2 252.2c-61.8 0-112.1-50.3-112.1-112.1S255.4 28 317.2 28s112.1 50.3 112.1 112.1S379 252.2 317.2 252.2zm139.7-122.9c-.1-1.2-.2-2.4-.3-3.5-.1-1.2-.3-2.3-.4-3.5-.1-.6-.2-1.2-.2-1.8-.2-1.2-.3-2.3-.5-3.4-.2-1.2-.4-2.3-.6-3.5C442.4 49 385.4 0 317.2 0S192 49 179.6 113.6c-.2 1.1-.4 2.3-.6 3.5-.2 1.1-.4 2.3-.5 3.4-.1.6-.2 1.2-.2 1.8-.2 1.2-.3 2.3-.4 3.5-.1 1.2-.2 2.4-.3 3.5-.3 3.6-.4 7.2-.4 10.8 0 3.6.1 7.2.4 10.8.1 1.2.2 2.3.3 3.5.1 1.2.3 2.3.4 3.5.1.6.2 1.2.2 1.8.2 1.2.3 2.3.5 3.5.2 1.2.4 2.3.6 3.5.3 1.7.7 3.4 1.1 5.1s.8 3.3 1.2 5c13.4 49.5 53.4 88.3 103.6 99.9 4 .9 8 1.7 12.1 2.2 1 .1 2 .3 3 .4.3 0 .6.1.9.1.9.1 1.9.2 2.8.3h.6c4 .4 8.1.5 12.3.5 4.1 0 8.2-.2 12.3-.5h.6c.9-.1 1.9-.2 2.8-.3.3 0 .5-.1.8-.1 1.4-.2 2.8-.3 4.2-.5 3.7-.5 7.4-1.2 11-2.1 49.4-11.5 88.8-49.1 102.9-97.5 1.2-4.1 2.2-8.3 3-12.5.2-1.1.4-2.3.6-3.5.2-1.1.4-2.3.5-3.5.1-.6.2-1.2.2-1.8.1-1.2.3-2.3.4-3.5.1-1.2.2-2.3.3-3.5.3-3.6.4-7.2.4-10.8.1-3.6 0-7.2-.3-10.8zM317.2 252.2c-61.8 0-112.1-50.3-112.1-112.1S255.4 28 317.2 28s112.1 50.3 112.1 112.1S379 252.2 317.2 252.2zm179.7 98.4c-.4-.2-.9-.4-1.4-.6-56-23-116.6-34.6-178.3-33.5-61.5-1.2-121.9 10.4-177.7 33.2-51.3 21-98.7 51.5-139.5 90.6.6.9 1.1 1.8 1.7 2.7 35 54.9 83.2 98.8 138.9 128.6h.1c1.8 1 3.7 1.9 5.5 2.9l8.4 4.2c27.1 13 55.7 22.9 85.4 29.1 1 .2 1.9.4 2.9.6.9.2 1.8.4 2.8.6h.2c.9.2 1.8.3 2.7.5 4.4.8 8.8 1.6 13.3 2.2 1 .2 2 .3 3 .4 17.2 2.4 34.7 3.7 52.3 3.7 15.6 0 31-1 46.3-2.9 1-.1 2-.3 3-.4s2-.3 3-.4c2.5-.3 4.9-.7 7.4-1.1.9-.1 1.8-.3 2.6-.4 1.1-.2 2.1-.4 3.2-.6 1-.2 2-.4 2.9-.5 1-.2 1.9-.4 2.9-.5 1.3-.2 2.5-.5 3.8-.8 29.6-6.1 58.1-15.6 85.1-28.4.9-.5 1.9-.9 2.8-1.4 4.4-2.1 8.8-4.3 13.1-6.7 2.6-1.4 5.1-2.8 7.7-4.2 51.9-29.2 96.8-70.9 130.1-122.4 1.1-1.6 2.1-3.3 3.1-4.9-40.1-38.4-86.8-68.7-137.3-89.6zm-9.6 192.7c-51.6 29.2-110.4 44.6-170.1 44.6-59.7 0-118.5-15.4-170.1-44.6-43.5-24.6-81.3-58.5-110.6-98.9 31.9-28.1 70.3-51.5 112.4-68.3 52.6-21 109.2-31.6 168.3-31.6 59.1 0 115.7 10.6 168.3 31.6 42.1 16.8 80.5 40.2 112.4 68.3-29.3 40.4-67.1 74.3-110.6 98.9zm9.6-192.7c-.4-.2-.9-.4-1.4-.6-53.8-21.4-114.3-33.5-178.3-33.5-63.7 0-124 11.9-177.7 33.2C85.2 371.3 37.6 402.4 0 440.4c.6.9 1.1 1.8 1.7 2.7 34.5 53.8 82.3 98.3 138.9 128.6h.1c1.8 1 3.7 1.9 5.5 2.9l8.4 4.2c26.8 13 55.5 22.8 85.4 29.1 1 .2 1.9.4 2.9.6.9.2 1.8.4 2.8.6h.2c.9.2 1.8.3 2.7.5 4.4.8 8.8 1.6 13.3 2.2 1 .2 2 .3 3 .4 17.1 2.4 34.6 3.6 52.3 3.6 15.7 0 31.1-1 46.3-2.8 1-.1 2-.3 3-.4s2-.3 3-.4c2.5-.3 4.9-.7 7.4-1.1.9-.1 1.8-.3 2.6-.4 1.1-.2 2.1-.4 3.2-.6 1-.2 2-.4 2.9-.5 1-.2 1.9-.4 2.9-.5 1.3-.2 2.5-.5 3.8-.8 29.8-6.1 58.3-15.7 85.1-28.4.9-.5 1.9-.9 2.8-1.4 4.4-2.1 8.8-4.3 13.1-6.7 2.6-1.4 5.1-2.8 7.7-4.2 52.6-29.8 97.3-71.9 130.1-122.4 1.1-1.6 2.1-3.3 3.1-4.9-36.9-37.4-83.8-68.2-137.3-89.7zm-9.6 192.7c-51.6 29.2-110.4 44.6-170.1 44.6-59.7 0-118.5-15.4-170.1-44.6-43.5-24.6-81.3-58.5-110.6-98.9 31.9-28.1 70.3-51.5 112.4-68.3 52.6-21 109.2-31.6 168.3-31.6 59.1 0 115.7 10.6 168.3 31.6 42.1 16.8 80.5 40.2 112.4 68.3-29.3 40.4-67.1 74.3-110.6 98.9z" />{' '}
    </g>
  </SVG>
);

export default Account;

import { Color } from '@componentsV3/styles/Color';
import React, { FC } from 'react';
import styled from 'styled-components';

const SVG = styled.svg<{ color: Color }>`
  path {
    fill: ${({ theme, color }) => theme[color]};
  }
`;

const Heart: FC<{ color: Color }> = ({ color }) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 2"
    viewBox="0 0 692.3 616"
    color={color}
    xmlSpace="preserve"
  >
    <g data-name="Layer 1">
      <path d="M692.2 223.3c-2.4 13.5-4.1 27-7.3 40.4-9.1 34.5-25.1 66.7-47.1 94.8-33.9 43.3-72.4 82.8-114.8 117.9-48.9 42.6-98 84.9-147.3 127-15.3 16.2-40.8 16.8-57 1.5-.1-.1-.3-.2-.4-.4-64-55.5-128.1-110.8-191.3-167.1-32.8-28.7-61.5-61.7-85.5-98C-1.8 278-11.9 199.1 14.4 128.6c20.7-65 75.9-113 143.1-124.5C226-10.3 296.7 16.8 338 73.3c2.7 3.1 5 6.4 8.1 10.4 2.9-3.7 5.4-7 8.1-10.2 60.9-81.2 176.1-97.6 257.3-36.7 16.7 12.5 31.1 27.8 42.7 45.2 20.8 30.7 33.4 66.2 36.8 103.1.2 2.4.8 4.8 1.2 7.2v31zM346.1 575.2c1.7-1.4 3-2.3 4.1-3.3 50.6-43.7 101.4-87.2 151.8-131.1 37.2-31.1 71.1-65.8 101.2-103.8 24-29.2 39.9-64.2 46.1-101.5 7.4-45.6-2.8-92.4-28.6-130.7C577.1 39 488.4 21 422.6 64.7c-10 6.6-19.1 14.5-27.2 23.4-9.3 9.8-17.5 20.5-24.5 32.1-6.2 13.6-22.2 19.6-35.8 13.4-6.1-2.8-10.9-7.7-13.5-13.8-1.1-2-2.3-3.9-3.7-5.7-11.7-17.7-26.3-33.3-43.2-46.2C210.9 21.7 121.8 36 75.6 99.8c-.8 1.1-1.5 2.1-2.3 3.2-41.3 58.3-44.4 135.3-8.1 196.8 18.6 34.1 42.9 64.7 71.8 90.7 38.5 36.2 78.3 71.2 117.9 106.2 29.8 26.4 60.4 52.1 91.2 78.5" />
    </g>
  </SVG>
);

export default Heart;

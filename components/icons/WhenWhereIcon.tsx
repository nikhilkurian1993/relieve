import React, { FC } from 'react';
import styled from 'styled-components';
import { ColorType } from './CartIcon';

const SVG = styled.svg<{ color: ColorType }>`
  path {
    fill: ${({ theme, color }) => theme[color]};
  }
`;

const WhenWhereIcon: FC<{ color: ColorType }> = ({ color }) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 2"
    viewBox="0 0 369.8 370"
    color={color}
    xmlSpace="preserve"
  >
    <g data-name="Layer 1">
      <path d="M206.07 84.87c.55-6.97.42-13.9 1.74-20.53 5.87-29.51 24.2-48.67 51.68-59.09 38.83-14.72 83.9 2.57 102.25 38.59 9.41 18.48 9.68 37.87 5.39 57.63-5.05 23.28-15 44.64-26.97 64.99-12.89 21.91-26.55 43.38-39.98 64.97-3.07 4.93-5.04 10.03-6.04 15.84-10.46 60.99-58.33 109.22-119.1 120.31C93.84 382.4 15.71 327.73 2.08 246.56-11.31 166.8 41.24 90.93 120.43 75.97c28.24-5.33 55.85-2.79 82.63 7.88 1.02.41 2.08.7 3.01 1.02Zm-52.63 24.23v12.08c0 5.46-1.63 7.81-5.32 7.74-3.61-.07-5.16-2.44-5.16-7.95v-11.99c-27.31 1.66-50.51 11.39-70.86 29.53 3.4 3.25 6.51 6.13 9.51 9.12 3.16 3.15 3.48 6.07 1.09 8.47-2.3 2.3-5.44 1.94-8.48-1.11-3.05-3.05-6.02-6.19-9.2-9.46-18.13 20.58-27.95 43.76-29.39 70.92 5.08 0 9.67-.07 14.25.02 4.05.08 6.47 3.07 5.42 6.63-.83 2.8-2.99 3.82-5.75 3.82H35.56c1.67 27.27 11.38 50.49 29.53 70.87 3.34-3.49 6.31-6.68 9.39-9.75 2.94-2.94 5.86-3.19 8.19-.88 2.34 2.31 2.12 5.27-.79 8.2-3.14 3.17-6.4 6.22-9.78 9.49 20.53 18.1 43.71 27.92 70.86 29.41 0-4.68-.02-8.9 0-13.11.03-4.46 1.8-6.72 5.21-6.75 3.43-.03 5.23 2.21 5.26 6.65.03 4.32 0 8.63 0 13.25 27.29-1.61 50.5-11.34 70.99-29.57-3.47-3.3-6.68-6.23-9.77-9.3-2.86-2.84-3.14-5.94-.93-8.2 2.31-2.36 5.28-2.19 8.19.74 3.15 3.17 6.13 6.5 9.36 9.95 18.24-20.62 28.04-43.83 29.56-70.99-4.83 0-9.29.06-13.75-.02-3.98-.07-6.25-2.17-6.14-5.48.11-3.17 2.26-4.94 6.18-4.97 4.46-.04 8.92 0 13.55 0-.15-6.46-.83-12-4.22-17.48-9.65-15.56-18.63-31.54-27.88-47.35-.29-.5-.65-.97-1.57-2.34-2.06 2.41-3.69 4.62-5.63 6.51-2.46 2.4-5.57 2.37-7.65.22-2.06-2.12-1.93-5.14.44-7.68 1.7-1.82 3.51-3.54 5.28-5.31 3.76-3.76 3.84-6.12-.59-9.2-6.74-4.68-13.52-9.42-20.77-13.21-13.74-7.19-28.54-10.91-44.63-11.54Zm135.38 122.31c16.94-28.56 33.87-56.18 49.81-84.36 9.65-17.06 16.6-35.41 19.56-55 2.39-15.81 1.13-31.12-6.82-45.34-16.41-29.36-52.8-43.21-85.59-32.66-30.84 9.92-49.91 36.45-48.65 68 .58 14.49 4.66 28.21 10.03 41.59 8.07 20.08 18.84 38.75 30.14 57.12 10.17 16.55 20.51 32.99 31.51 50.66ZM213.2 116.64c-1.38-5.26-2.98-10.24-3.92-15.34-.56-3.02-2.07-4.37-4.68-5.51-25.97-11.38-52.9-14.7-80.82-9.73C48.34 99.52-2.02 173.11 12.92 248.01c14.37 72.05 81.44 119.9 154.35 110.12 58.02-7.78 105.59-52.81 116.24-110.07.24-1.31.61-2.98.04-4-3.62-6.6-7.48-13.06-11.26-19.57-2.72 39.66-18.76 72.06-50.43 95.76-31.82 23.81-67.7 30.57-105.97 20.23-69.65-18.82-108.01-92.75-83.55-160.57 12.07-33.47 34.89-57.71 67.67-71.54 38.78-16.36 76.61-12.66 113.18 8.28Z" />
      <path d="M153.44 182.93c0 6.23.08 12.47-.05 18.7-.04 1.89.59 2.78 2.29 3.62 9.14 4.5 12.97 14.23 9.3 23.21-3.65 8.97-13.38 13.43-22.83 10.15-2.25-.78-3.37-.18-4.8 1.27-6.83 6.92-13.72 13.79-20.61 20.65-3.09 3.07-6.15 3.46-8.48 1.19-2.36-2.3-2.03-5.42 1.01-8.47 6.94-6.99 13.89-13.97 20.91-20.88 1.39-1.37 1.83-2.45 1.12-4.5-3.22-9.35.47-18.24 9.34-22.53 1.96-.95 2.35-2.05 2.34-3.97-.06-12.34 0-24.69-.05-37.03 0-2.73.72-4.99 3.4-6.07 3.54-1.43 6.98 1.07 7.05 5.22.11 6.48.03 12.97.04 19.45Zm2.32 38.56c-.08-4.28-3.39-7.43-7.71-7.35-4.25.08-7.48 3.45-7.39 7.7a7.554 7.554 0 0 0 7.74 7.4c4.23-.09 7.44-3.47 7.36-7.74ZM288.49 44.98c18.78.12 34.18 15.75 34.01 34.52-.17 18.81-15.77 34.21-34.51 34.06-18.89-.15-34.23-15.57-34.19-34.37.04-18.97 15.61-34.32 34.69-34.2Zm-.48 10.48c-13.08.05-23.75 10.76-23.73 23.82.02 13.03 10.75 23.76 23.81 23.8 13.17.04 24.08-10.93 23.93-24.06-.15-13.08-10.88-23.6-24.01-23.56Z" />
    </g>
  </SVG>
);

export default WhenWhereIcon;

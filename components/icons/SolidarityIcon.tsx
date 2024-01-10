import React, { FC } from 'react';
import styled from 'styled-components';
import { ColorType } from './CartIcon';

const SVG = styled.svg<{ color: ColorType }>`
  path {
    fill: ${({ theme, color }) => theme[color]};
  }
`;

const SolidarityIcon: FC<{ color: ColorType }> = ({ color }) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 2"
    viewBox="0 0 383.22 338.5"
    color={color}
    xmlSpace="preserve"
  >
    <path
      d="M0 94.34c1.22-6.21 2.19-12.49 3.72-18.63 2.85-11.48 7.92-22 14.57-31.76 2.63-3.86 5.78-4.9 8.73-2.93 2.93 1.95 3.12 5.28.59 9.2-18.79 29.13-21.92 59.56-7.42 91.36 4.18 9.16 10.14 17.15 17.22 24.3 12.03 12.13 24.09 24.23 36.44 36.65 1.64-1.55 3.07-2.88 4.49-4.23 8.53-8.05 17.12-16.03 25.57-24.16 8.37-8.06 18.05-10.66 28.83-6.24 10.85 4.45 16.42 12.93 16.47 24.82 0 .48.07.96.14 1.86 8.2-.49 15.58 1.5 21.55 7.33 5.99 5.85 8.51 13.04 7.99 21.77 7.78-.32 14.84 1.52 20.65 6.85 5.84 5.36 8.58 12.09 8.68 20.48 3.16 0 6.28-.41 9.26.07 11.13 1.8 19.27 9.89 21.59 21.04 1.28 6.17 11.58 15.52 17.88 16.24 6.47.74 12.35-2.33 15.24-7.94 2.92-5.67 2.03-12.16-2.35-17.03-.83-.93-1.74-1.79-2.62-2.67-23.53-23.57-47.07-47.14-70.59-70.72-.79-.79-1.63-1.57-2.27-2.48-1.85-2.64-1.61-5.24.74-7.39 2.22-2.03 4.77-1.97 7.17-.22 1.1.8 2.02 1.85 2.99 2.82 23.62 23.66 47.26 47.3 70.84 71.01 3.51 3.53 7.45 5.89 12.54 5.59 6.14-.36 10.64-3.36 13.1-9.03 2.47-5.69 1.45-10.97-2.43-15.72-.86-1.06-1.89-1.99-2.86-2.96-23.44-23.48-46.89-46.96-70.33-70.46-1.05-1.05-2.18-2.11-2.95-3.36-1.51-2.45-1.25-5.24 1.08-6.65 1.71-1.04 4.35-1.04 6.47-.75 1.23.17 2.3 1.79 3.35 2.84 23.72 23.74 47.44 47.47 71.11 71.27 3.61 3.63 7.66 6.04 12.89 5.64 6.29-.48 10.81-3.7 13.07-9.62 2.32-6.09.91-11.58-3.63-16.14-11.44-11.5-22.96-22.91-34.45-34.36-2.47-2.47-4.98-4.9-7.41-7.41-2.73-2.83-2.89-6.31-.49-8.59 2.3-2.18 5.64-2.01 8.33.64 9.58 9.47 19.11 19 28.63 28.53.97.97 1.73 2.13 2.67 3.29 20.08-18.79 39.46-37.04 45.41-65.18 9.74-46.06-19.42-102.82-78.34-109.44-41.17-4.63-77.59 16.58-94.42 54.51-1.49 3.35-3.97 6.3-6.23 9.25-14.5 18.9-28.91 37.87-43.69 56.55-5.65 7.15-2.03 11.8 4.66 13.4 8.11 1.94 16.17 1.3 23.1-3.21 10.53-6.86 20.61-14.41 30.73-21.89 8.22-6.08 16.27-12.4 24.26-18.77 2.57-2.05 5.17-2.67 8.32-2.06 14.25 2.75 28.29 1.46 42.17-2.41.36-.1.71-.25 1.07-.35 4.26-1.18 7.13.08 8.14 3.57.93 3.22-.75 6.29-4.82 7.09-9.26 1.82-18.6 3.23-27.93 4.7-1.68.26-3.44.04-5.83.04 1.08 1.25 1.71 2.07 2.43 2.8 6.88 6.88 13.79 13.73 20.67 20.62 3.2 3.2 3.54 6.73.98 9.14-2.54 2.39-5.67 2.04-8.84-1.17-10.34-10.46-20.64-20.97-31.15-31.67-5.42 4.16-10.29 7.99-15.25 11.7-11.97 8.96-23.69 18.31-36.08 26.65-10.4 7-22.24 9.2-34.7 6.12-1.56-.39-3.1-.95-4.57-1.6-11.69-5.14-15.08-17.68-7.37-27.82 11.48-15.08 23.11-30.05 34.68-45.07 3.73-4.84 7.4-9.73 11.22-14.49 1.33-1.66 1.6-2.99.58-4.99-14.86-28.98-38.44-45.96-70.59-50.46-25.33-3.55-48.18 3.04-68.26 18.99-3.57 2.84-7.08 2.78-9.19-.02-2.11-2.8-1.25-5.95 2.43-8.92 47.2-38.16 119.44-25.4 150.83 26.67.69 1.15 1.42 2.29 2.36 3.82.91-1.41 1.64-2.5 2.32-3.62C216.02 12.59 256.94-5.72 299.8 1.6c40.52 6.92 73.14 39.09 81.23 80.45 7.31 37.34-3.95 68.85-30.67 95.3-5.23 5.18-10.51 10.31-15.75 15.47-.35.34-.61.77-1.14 1.46 10.09 9.64 13.35 20.88 6.48 33.63-5.31 9.86-14.1 14.02-25.6 13.5.17 8.13-1.85 15.52-7.73 21.42-5.82 5.83-12.94 8.2-21.42 7.68.33 12.96-4.85 22.69-17.13 27.44-12.41 4.8-22.61.46-29.7-7.59-6.83 6.1-13.59 11.99-20.18 18.06-7.7 7.1-15.33 14.29-22.85 21.58-8.33 8.08-17.93 10.75-28.79 6.45-10.81-4.28-16.3-12.65-16.8-24.27-.01-.24-.12-.48-.28-1.1-8.44 1.12-16.2-.81-22.62-6.72-6.36-5.85-8.78-13.37-8.5-21.79-20.79-2.92-28-10-29.34-28.93-11.47.56-20.75-3.55-26.28-13.99-5.45-10.3-4.06-20.21 3.07-29.54-6.51-6.52-12.93-12.94-19.35-19.37-6.17-6.18-12.47-12.24-18.47-18.57-15.6-16.44-24.84-35.92-27.35-58.52-.08-.71-.41-1.4-.63-2.1V94.33Zm182.07 140.62c-4.25-.07-7.77 1.59-10.79 4.44-12.15 11.46-24.35 22.87-36.44 34.4-6.66 6.35-7 15.46-1.05 21.69 5.95 6.22 15.01 6.24 21.72.01 3.29-3.05 6.47-6.22 9.81-9.22 2.68-2.41 5.79-2.4 8.02-.2 2.38 2.35 2.32 5.55-.35 8.28-2.17 2.23-4.53 4.28-6.77 6.44-6.56 6.34-6.98 15.43-1.04 21.69 5.81 6.11 14.95 6.31 21.44.26 12.21-11.4 24.36-22.86 36.46-34.38 6.61-6.29 7.01-15.48 1.16-21.7-5.86-6.23-15.02-6.3-21.72-.12-3.57 3.29-7.05 6.7-10.63 9.98-2.96 2.72-6.34 2.85-8.61.46-2.29-2.4-1.98-5.74.9-8.56 2.85-2.79 5.95-5.34 8.64-8.28 4.36-4.75 5.41-10.34 2.77-16.27-2.56-5.77-7.25-8.64-13.52-8.93Zm-14.36-15.44c-.3-5.16-3.16-9.87-8.95-12.41-6.12-2.68-11.75-1.44-16.58 3.07-9.48 8.85-18.89 17.79-28.32 26.7-3.08 2.91-6.3 5.7-9.19 8.79-5.77 6.17-5.62 15.08.16 20.9 5.65 5.68 14.65 6.08 20.63.53 12.62-11.71 25.1-23.57 37.59-35.41 3.13-2.97 4.72-6.68 4.66-12.17Zm-29.74-27.23c.05-6.09-3.39-11.64-8.99-13.89-6.13-2.46-11.76-1.35-16.59 3.19-12.26 11.54-24.53 23.06-36.7 34.68-6.19 5.91-6.54 15.12-1.02 21.18 5.69 6.24 14.88 6.71 21.42.66 12.55-11.59 24.91-23.38 37.31-35.13 3.03-2.87 4.58-6.47 4.58-10.69Z"
      data-name="Layer 1"
    />
  </SVG>
);

export default SolidarityIcon;

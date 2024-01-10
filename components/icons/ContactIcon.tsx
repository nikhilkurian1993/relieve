import React, { FC } from 'react';
import styled from 'styled-components';
import { ColorType } from './CartIcon';

const SVG = styled.svg<{ color: ColorType }>`
  path {
    fill: ${({ theme, color }) => theme[color]};
  }
`;

const ContactIcon: FC<{ color: ColorType }> = ({ color }) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 2"
    viewBox="0 0 233.67 309.67"
    color={color}
    xmlSpace="preserve"
  >
    <path
      d="M0 92.17c.35-31.31 13.69-59.6 41.25-80.76 5-3.84 10.7-6.87 16.35-9.71 5.36-2.69 11.13-2.05 16.16.93 4.02 2.38 8.04 5.24 11.06 8.74 13.77 15.95 23.87 34.1 29.5 54.4 4.75 17.1-1.14 29.95-16.5 38.77-2.92 1.68-5.74 3.56-8.78 4.97-11.73 5.44-11.96 15.37-10.4 24.17.47 2.63 1.59 5.27 2.93 7.61 11.55 20.09 23.22 40.11 34.83 60.17 3.26 5.63 8.04 9.44 13.97 11.88 5.28 2.17 10.39 2.02 15.39-1.04 4.14-2.54 8.4-4.89 12.63-7.27 12.21-6.89 24.03-6.14 35.45 1.9 1.22.86 2.48 1.73 3.5 2.8 16.45 17.15 29.42 36.46 35.39 59.72 2.45 9.54.47 19.11-11.05 25.5-40.37 22.41-79.07 18.6-116.39-6.96-16.56-11.34-30.23-25.85-40.61-42.94-16.09-26.51-31.82-53.27-46.73-80.46C6.27 143.23.16 120.01 0 92.17Zm167.89 201.42c17.61-.19 33.15-4.44 47.19-13.64 1.17-.77 2.33-2.81 2.18-4.11-.4-3.55-1.05-7.21-2.4-10.5-6.01-14.63-14.32-27.92-24.63-39.89-2.32-2.7-5.3-4.91-8.23-6.98-4.5-3.19-9.27-3.18-14.06-.4-5.06 2.94-10.17 5.81-15.25 8.72-5 2.86-10.36 4.28-16.12 3.89-14.92-1-26.29-7.98-33.85-20.82-11.81-20.08-23.57-40.2-34.98-60.51-2.63-4.67-4.57-10.05-5.46-15.33-2.27-13.47 2.09-30.15 17.73-37.87 4.46-2.2 8.61-5.01 12.97-7.43 5.23-2.9 7.1-7.46 6.64-13.15-.17-2.1-.44-4.24-1.05-6.25-5.2-17.14-13.73-32.53-24.94-46.42-1.77-2.19-4.15-3.97-6.51-5.55-1.02-.68-2.98-.9-4.04-.37-3.78 1.88-7.59 3.86-10.97 6.37-23.12 17.12-35.19 40.17-35.93 68.96-.59 23.1 5.24 44.88 16.2 64.93 14.21 26.01 29.32 51.55 44.48 77.03 7.82 13.15 17.98 24.54 29.74 34.37 18 15.06 38.22 24.67 61.29 24.94Z"
      data-name="Layer 1"
    />
  </SVG>
);

export default ContactIcon;

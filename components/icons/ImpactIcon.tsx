import React, { FC } from 'react';
import styled from 'styled-components';
import { ColorType } from './CartIcon';

const SVG = styled.svg<{ color: ColorType }>`
  path {
    fill: ${({ theme, color }) => theme[color]};
  }
`;

const ImpactIcon: FC<{ color: ColorType }> = ({ color }) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 2"
    viewBox="0 0 309.17 270.66"
    color={color}
    xmlSpace="preserve"
  >
    <g data-name="Layer 1">
      <path d="M104.07 100.14c4.84 1.04 9.73 1.55 14.96 1.55 5.94 0 12.27-.67 19.35-2.04l1.8-.35.5 1.76c.7 2.43 1.46 4.9 2.2 7.28 1.71 5.49 3.47 11.16 4.54 16.91 1.14 6.1 1.47 12.39 1.8 18.47.1 1.85.2 3.69.32 5.53.24 3.68 1.46 4.51 2.49 4.81.65.19 1.42.29 2.23.29 1.22 0 2.45-.24 3.38-.65 1.75-.77 2-2.44 1.91-5.91-.39-15.5 2.74-30.75 9.57-46.63l.59-1.36 1.47.17c1.58.18 3.1.37 4.59.56 3.05.38 5.94.75 8.81.93 1.84.12 3.68.17 5.47.17 28.8 0 49.58-14.87 58.51-41.88 5-15.12 6.68-31.79 5.28-52.47-.45-6.61-1.88-7.3-5.06-7.3-.84 0-1.81.08-2.97.25-10.27 1.49-21.9 3.19-32.71 6.17-15.93 4.4-28.95 12.32-38.71 23.56-13.45 15.49-17.92 34.58-13.66 58.38.89 4.96-.64 8.81-2.12 12.53-.67 1.68-1.36 3.42-1.82 5.26l-1.27 5.05-2.43-4.61c-3.36-6.37-6.46-13.28-4.17-21.51.85-3.07.9-6.56.95-9.94l.02-1.45c.35-17.82-4.55-32.03-14.97-43.44C117.6 11.27 94.39 1.98 59.69.12h-.27c-2.6 0-3.69 2.06-3.85 4-1.95 23.88-.12 41.82 5.93 58.19 7.65 20.69 21.98 33.42 42.57 37.85Zm87.22-72.5c13.07-9.43 28.52-14.8 50.1-17.42l1.06-.13.7.81c.07.08.13.14.19.19.3.29.85.82.9 1.73.79 14.68.56 33.87-8.25 52.09-7.91 16.35-21.54 25.34-40.54 26.71-1.9.14-3.91.2-6.34.2-1.76 0-3.52-.03-5.29-.07-1.74-.03-3.47-.07-5.21-.07h-1.38l-1.42-3.73.68-.89c1-1.31 1.99-2.63 2.97-3.95 2.17-2.91 4.41-5.91 6.84-8.72 9.14-10.58 19.83-19.05 31.77-25.18 2-1.03 3.33-2.43 3.74-3.95.31-1.17.08-2.36-.68-3.55-.92-1.43-2.17-2.15-3.74-2.15-1.07 0-2.27.33-3.54.98-14.6 7.43-27.65 18.24-38.8 32.14-.56.7-1.14 1.38-1.71 2.05-.51.59-1.13.7-1.46.75-.1.02-.25.04-.46.09l-2.37.5-.04-2.42c-.35-19.61 7.15-35.09 22.3-46.02ZM64.74 12.21l.06-2.1 2.09.16c9.87.75 19.53 2.82 29.53 6.33 11.83 4.15 21.14 9.71 28.46 16.98 10.28 10.22 15.42 23.34 15.29 39 0 .54-.16.96-.3 1.37-.06.16-.13.35-.2.59l-1.09 3.55-2.36-2.87c-.6-.72-1.17-1.42-1.72-2.1-1.15-1.41-2.23-2.74-3.34-4.03-10.44-12.12-22.35-21.64-35.4-28.29-1.4-.71-2.9-1.12-4.12-1.12-.15 0-.3 0-.44.02-2.72.25-3.57 2.29-3.81 3.95-.34 2.36.61 4.02 2.98 5.2 10.09 5.03 18.91 11.41 26.2 18.95 4.01 4.15 7.63 8.48 11.47 13.06 1.69 2.02 3.4 4.06 5.16 6.1l1.91 2.22-2.76.97c-4.36 1.53-9.06 2.31-13.97 2.31-17.75 0-35.8-10.31-43.9-25.07-9.86-17.99-10.19-37.91-9.72-55.17Z" />
      <path d="M235.78 133.16c4.13-4 9.92-6.3 15.88-6.3s11.55 2.42 14.91 6.64l1.27 1.59-1.62 1.24c-.31.24-.63.47-.96.7-.65.46-1.26.89-1.74 1.38-7.93 7.91-15.85 15.84-23.76 23.78l-6.13 6.14-.46.46c-.28.28-.56.55-.84.84-1.94 2.02-3.67 5-.95 7.76.97.99 2.04 1.49 3.16 1.49 1.43 0 3-.81 4.53-2.33 12.34-12.29 23.5-23.47 34.12-34.15 2.76-2.78 4.15-5.84 4.03-8.86-.12-3.07-1.79-6.08-4.84-8.69-5.93-5.1-13.4-7.9-21.04-7.9-8.04 0-15.72 3.08-21.63 8.68-4.94 4.68-9.83 9.59-14.55 14.35-4.27 4.29-8.68 8.73-13.13 13-2.29 2.2-5.52 3.84-8.43 4.3-14.95 2.34-26.5 9.57-35.29 22.11-.42.61-.84 1.21-1.31 1.89l-2.21 3.19-1.67-2.15c-.17-.21-.31-.39-.44-.55-.3-.37-.53-.66-.72-.97-8.86-13.64-20.97-21.37-37.02-23.63-2.54-.36-5.41-1.83-7.5-3.85-4.32-4.18-8.63-8.51-12.8-12.7-4.92-4.94-10-10.05-15.13-14.93-5.89-5.6-13.59-8.69-21.68-8.69-7.65 0-15.1 2.79-20.98 7.84-3.1 2.67-4.8 5.67-4.92 8.69-.12 3.03 1.36 6.18 4.27 9.11 8.06 8.1 16.14 16.19 24.22 24.28l7.24 7.24c.33.33.66.67.98 1.01.88.91 1.72 1.77 2.62 2.51.97.79 2.07 1.21 3.18 1.21 1.22 0 2.37-.49 3.31-1.43 1.83-1.81 1.92-4.37.25-6.51-.6-.77-1.34-1.49-2.11-2.25l-.56-.55c-8.13-8.08-16.27-16.15-24.49-24.3l-9.54-9.47 1.45-1.42c4.01-3.93 9.34-6.09 15.01-6.09s11.56 2.32 15.87 6.53c8.88 8.68 17.76 17.64 26.35 26.31l.95.96c3.74 3.77 7.71 5.78 12.16 6.13 18.16 1.44 37.2 16.9 36.73 42.71-.11 5.8-.08 11.71-.05 17.42.01 2.67.03 5.33.03 7.99V237.14c.02 1.85.53 6.16 4.75 6.21h.07c2.97 0 4.76-2.26 4.77-6.05.01-3.97 0-7.95 0-11.92-.02-5.91-.03-12.02.04-18.04.23-20.08 14.18-36.84 33.16-39.86 7.74-1.23 13.78-4.52 19.61-10.67 7.78-8.22 15.94-16.21 23.6-23.63Z" />
      <path d="M94.83 252.82c.17-6.47-2.23-11.74-7.34-16.12l-.14-.12c-17.27-14.82-35.13-30.15-52.45-45.51-3.2-2.83-5.85-6.78-7.29-10.81-4.93-13.85-9.59-28.04-14.09-41.77l-2.34-7.12c-.97-2.94-1.42-5.33-1.44-7.54-.07-10.59-.07-21.35-.07-31.75 0-7 0-14.01-.02-21.01 0-2.1.5-3.64 1.56-4.7 1-1 2.37-1.48 4.2-1.48.33 0 .67.02 1.03.05 11.26.96 19.98 10.27 20.27 21.64.09 3.67.08 7.39.06 10.98-.01 2.46-.02 4.92 0 7.38.03 3.57 1.87 5.79 4.82 5.81 2.91 0 4.73-2.2 4.76-5.74v-.56c.06-5.93.11-12.07-.04-18.08-.42-16.83-13.02-29.96-29.94-31.21-.47-.03-.93-.05-1.38-.05C6.29 55.1.15 61.28.09 70.13.05 76.43.06 82.84.07 89.04v8.39c0 2.22-.02 4.45-.04 6.67-.05 5.16-.09 10.49.11 15.7.19 4.8.39 9.76 1.77 14.2 3.48 11.12 7.27 22.36 10.93 33.23 1.88 5.57 3.76 11.14 5.61 16.73 1.85 5.58 4.95 10.19 9.49 14.11 7.06 6.09 14.11 12.19 21.16 18.29 10.41 9.01 21.18 18.32 31.8 27.44 2.97 2.55 4.31 5.41 4.19 8.98-.12 3.72-.09 7.72.08 12.59.12 3.32 1.89 5.29 4.74 5.29h.1c2.88-.05 4.71-2.14 4.79-5.47.04-1.97.02-3.99 0-5.94-.02-2.1-.05-4.26 0-6.41ZM309.13 104.96c-.02-2.45-.04-4.9-.04-7.34 0-3.07 0-6.14.01-9.21.01-6.18.03-12.56-.05-18.83-.1-8.25-6.45-14.47-14.78-14.47-.22 0-.44 0-.66.01-15 .57-27.6 11.28-29.97 25.45-.95 5.69-.9 11.73-.85 17.58.02 2.21.04 4.49 0 6.73-.05 3.55 1.73 5.8 4.66 5.87h.13c2.92 0 4.75-2.3 4.78-6.01.02-2.33 0-4.66 0-7-.02-3.72-.04-7.58.07-11.38.31-10.84 8.6-19.99 19.28-21.28.98-.12 1.74-.17 2.39-.17 5.36 0 5.36 4.44 5.36 7.1v9.18c.03 13.55.04 27.57-.05 41.35-.02 2.89-.51 5.88-1.41 8.66-5.28 16.21-10.74 32.96-16.61 49.62-1.27 3.62-3.79 7.32-6.72 9.91-15.36 13.57-31.15 27.18-46.42 40.33l-7.29 6.28c-3.9 3.37-5.94 6.98-6.24 11.04-.4 5.58-.49 11.5-.28 18.09.09 2.72 2.5 4.18 4.73 4.18h.07c2.65-.03 4.47-1.77 4.62-4.42.22-3.92.27-8.15.15-12.93-.1-3.94 1.29-7 4.37-9.64 9.28-7.93 18.66-16.06 27.73-23.92 8.08-6.99 16.42-14.23 24.67-21.3 4.83-4.14 8.13-9.05 10.11-15.01 1.66-5.02 3.34-10.03 5.02-15.04 3.71-11.09 7.54-22.56 11.15-33.88 1.12-3.52 1.77-7.53 1.93-11.91.22-5.86.17-11.86.13-17.65Z" />
    </g>
  </SVG>
);

export default ImpactIcon;
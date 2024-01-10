import React, { FC } from 'react';
import styled from 'styled-components';
import { ColorType } from './CartIcon';

const SVG = styled.svg<{ color: ColorType }>`
  path {
    fill: ${({ theme, color }) => theme[color]};
  }
`;

const QualityIcon: FC<{ color: ColorType }> = ({ color }) => (
  <SVG
    color={color}
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 372.9 511"
  >
    <path d="M192.7 0c11.4 2.5 20.4 9.2 28.9 16.7 5.2 4.6 11 8.6 16.1 13.4 7 6.5 15.2 9.1 24.4 9.7 10.9.8 21.9 1.9 32.8 3.1 19.1 2.2 33.7 18.3 35.5 38.7 1 11.4 1.6 22.9 3.4 34.2.9 5.6 3.4 11.5 6.8 16.2 6.9 9.6 14.9 18.3 22.3 27.5 13.4 16.6 13.4 37 .1 53.6-5.3 6.6-10.3 13.5-16.3 19.5-10 10.1-14 22.1-14.4 36-.2 8.6-1.2 17.3-2.5 25.8-3.2 20.6-18 34.1-38.8 35.9-6.8.6-13.5 1.3-20.8 2 6.8 16.1 13.3 31.7 19.8 47.4 11.2 26.8 22.4 53.6 33.7 80.4 2 4.6 2.8 9-.9 13-3.5 3.8-7.8 3.5-12.4 2.2-13.6-3.9-27.2-7.6-40.7-11.6-3.3-1-5-.5-6.6 2.7-6.7 12.6-13.7 25.1-20.5 37.6-2.3 4.3-5.3 7.3-10.5 6.9-4.9-.4-7.5-3.6-9.3-7.9-9-21.6-18.1-43.2-27-64.8-2.5-6-.6-11 4.5-12 5-.9 7.7 1.8 9.5 6.1 7 16.9 14.1 33.7 21.1 50.6.7 1.7 1.5 3.3 2.5 5.6 1-1.6 1.8-2.7 2.5-4 5-9 9.9-18.1 14.9-27.1 5.1-9.1 11.2-11.7 21.1-8.9 9.8 2.7 19.5 5.5 29.2 8.3 1.6.4 3.1.7 5.4 1.3-6.1-14.7-12-28.7-17.9-42.7-10.8-25.7-21.6-51.4-32.2-77.3-1.6-3.9-3.6-4.8-7.1-2.9-2.9 1.6-5.9 3-8.5 5.1-11 8.6-21.8 17.4-32.6 26.3-1.3 1.1-2.1 2.9-2.8 4.5-18.2 43.3-36.3 86.7-54.5 130-.4 1.1-.8 2.2-1.3 3.2-1.8 4-4.7 6.4-9.2 6.6-4.2.1-7.3-2-9.3-5.7-7.1-12.8-14.2-25.5-21.1-38.5-1.8-3.5-3.6-4.2-7.4-3-13.5 4.1-27.2 7.7-40.7 11.6-4.5 1.3-8.6 1.4-11.9-2.3-3.5-3.8-3-8.1-1.1-12.5 17.2-40.9 34.3-81.8 51.4-122.7.7-1.7 1.3-3.3 2.2-5.5-8.7-.9-17-1.5-25.2-2.8-19-3-32.6-17.7-34.5-36.7-1.2-12.1-2.5-24.1-3.6-36.2-.6-6.4-3.1-11.8-7.2-16.6-7.4-8.8-14.6-17.7-21.9-26.6-13.6-16.7-13.7-37.2-.1-53.9 6.5-8 12.8-16.2 19.7-23.8 6.3-7 9.4-15 10.1-24.3.7-10.6 1.9-21.2 3-31.8C44.7 60.1 60 44.7 79.5 42.8c12.1-1.2 24.1-2.5 36.2-3.6 6.6-.6 12.2-3.1 17.1-7.2 5.6-4.7 11.4-9.2 16.9-14 9-7.7 18-15.2 29.9-18h13.1zm164.9 186.4c0-6.8-1.8-11.7-6.8-17.7-7.5-9.1-15-18.3-22.5-27.3-6.1-7.3-9.1-15.7-9.9-25.1-1.1-12.4-2.1-24.9-3.8-37.2-1.7-11.8-11.2-20.2-23.1-21.3-10.9-1-21.8-2.3-32.8-3.1-11.5-.8-21.5-4.9-30.2-12.6-8.1-7.1-16.6-13.9-25-20.7-10.8-8.7-23.4-8.6-34.2.1-9 7.3-18 14.7-26.9 22.2-6.9 5.8-14.7 9.5-23.8 10.3-12.2 1.1-24.5 2.5-36.7 3.6C68.8 58.9 59.2 68.4 58 81.5c-1 10.9-2.3 21.8-3.1 32.8-.9 11.4-4.9 21.2-12.4 29.7-7 8-13.6 16.3-20.3 24.6-9.3 11.4-9.2 24 .2 35.4 7.6 9.2 15.2 18.5 22.8 27.7 5.2 6.3 8.3 13.6 9.1 21.7 1.2 12.4 2.5 24.8 3.7 37.2 1.2 12.5 9.4 21.8 21.9 23.7 9 1.4 18.2 2.4 27.3 2.7 15.9.6 29.8 5.2 41.5 16.5 6.2 6 13.3 11.1 19.9 16.6 11.7 9.6 24.1 9.7 35.8.2 8.8-7.1 17.5-14.3 26.2-21.6 7.8-6.6 16.6-10 26.8-10.8 12.1-.9 24.2-2 36.2-3.7 11.5-1.6 19.6-9.9 21.3-21.3 1.3-9 2.4-18.2 2.7-27.3.5-15.9 5.1-29.8 16.5-41.5 6.5-6.7 11.9-14.3 17.8-21.5 3.7-4.4 5.8-9.9 5.7-16.2zm-291.3 272c12.6-3.6 23.9-6.8 35.2-10 9.4-2.6 15.7.1 20.4 8.5 1.2 2.2 2.4 4.4 3.6 6.5 4.5 8.2 9 16.4 14 25.5 16.4-39.2 32.3-77.3 48.7-116.4-16.9 1-27.7-8.7-38.8-18.1-5.7-4.9-11.4-9.6-17.3-14.2-2.5-1.9-5.3-3.4-8-4.9-3.7-2-5.9-1.4-7.8 3.1-10.6 26.1-21.6 52.1-32.5 78.1-5.7 13.7-11.4 27.3-17.5 41.9z" />
    <path d="M304.7 186.4c0 69.8-60.1 124.4-129.8 117.9-56.1-5.3-100.9-50.4-106.3-107C64 148.7 90.2 101.8 134 80.2c.4-.2.9-.4 1.4-.6 6.2-2.9 10.2-2.1 12.4 2.4 2.2 4.4.2 8.2-5.8 11.2-37.4 19.3-57.2 50.1-58.8 92.1-1.8 49.7 37.8 96.2 87.1 103 56.7 7.9 106.8-27.9 117.6-83.9 10.6-54.6-28.1-110.6-83-119.5-9.1-1.5-18.5-1-27.8-1.3-2.5-.1-5.1.5-7.4-.2-3.5-1-5.5-3.8-5.1-7.6.4-4.2 3.1-6.5 7.2-7 20.9-2.5 41.1.3 60.5 8.5 44.1 18.7 72.4 61.5 72.4 109.1z" />
    <path d="M160.7 195c3.8-4.1 6.9-7.5 10.2-10.8 15-15.1 30-30.2 45.1-45.1 12.9-12.7 33.3-8.2 38.8 8.5 2.8 8.6 1.3 16.7-5 23.1-24.3 24.6-48.7 49.1-73.3 73.3-9.1 9-22.7 8.6-31.9-.4-11.3-11-22.5-22.1-33.5-33.5-9-9.3-8.7-23.4.2-32.3 8.9-9 22.8-9.4 32.3-.5 5.6 5.3 10.8 11.1 17.1 17.7zm80.1-38.8c-.1-7.6-6.5-11.3-11.7-8.2-1.5.9-2.8 2.3-4.1 3.6l-56.8 56.8c-6 5.9-9 5.9-15.1-.1-6.4-6.3-12.7-12.7-19.1-19-4-4-8.5-4.2-11.9-.9-3.5 3.3-3.3 8.2.7 12.3 10.4 10.5 20.9 21 31.4 31.4 4.3 4.3 8.6 4.3 13-.1 23.5-23.5 47.1-47 70.5-70.6 1.7-1.8 2.5-4.2 3.1-5.2z" />
  </SVG>
);

export default QualityIcon;
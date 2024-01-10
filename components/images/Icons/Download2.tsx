import React, { FC } from 'react';
import type { Color } from '@components/styles/Color';
import SVG from '@components/styles/SVG';

const Download2: FC<{ color?: Color }> = ({ color = 'green' }) => {
  return (
    <SVG x="0" y="0" viewBox="0 0 500 477.8" xmlSpace="preserve" color={color}>
      <path d="M227.7 381.6 126.5 280.7l31-31 55.6 55.3V0H270v305l55.5-55.5 31 31-100.3 101.1h-28.5zM500 477.8H0v-44.3h500v44.3z" />
    </SVG>
  );
};

export default Download2;

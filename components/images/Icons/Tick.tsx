import React, { FC } from 'react';
import type { Color } from '@components/styles/Color';
import SVG from '@components/styles/SVG';

const Tick: FC<{ color?: Color }> = ({ color = 'green' }) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 11.8 9.2"
      xmlSpace="preserve"
      color={color}
    >
      <path d="M3.6 9.2 0 5.6l1.1-1.1 2.5 2.6L10.7 0l1.1 1.1z" />
    </SVG>
  );
};

export default Tick;

import React, { FC } from 'react';

import type { Color } from '@componentsV3/styles/Color';
import SVG from '@componentsV3/styles/SVG';

const ArrowLeft: FC<{ color?: Color }> = ({ color = 'green' }) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 27"
      xmlSpace="preserve"
      color={color}
    >
      <path d="M0 13.5 13.5 0l2.8 2.8-8.7 8.7H44v4H7.7l8.7 8.7-2.9 2.8L0 13.5z" />
    </SVG>
  );
};

export default ArrowLeft;

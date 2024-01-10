import React, { FC } from 'react';

import type { Color } from '@componentsV3/styles/Color';
import SVG from '@componentsV3/styles/SVG';

const ArrowRight: FC<{ color?: Color }> = ({ color = 'green' }) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 27"
      xmlSpace="preserve"
      color={color}
    >
      <path d="M44 13.5 30.5 27l-2.8-2.8 8.7-8.7H0v-4h36.4l-8.7-8.7L30.5 0 44 13.5z" />
    </SVG>
  );
};

export default ArrowRight;

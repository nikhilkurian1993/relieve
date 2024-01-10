import React, { FC } from 'react';

import type { Color } from '@componentsV3/styles/Color';

import SVG from '@componentsV3/styles/SVG';
const Close: FC<{ color?: Color }> = ({ color = 'green' }) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8.4 8.4"
      xmlSpace="preserve"
      color={color}
    >
      <path d="M8.4.7 7.7 0 4.2 3.5.7 0 0 .7l3.5 3.5L0 7.7l.7.7 3.5-3.5 3.5 3.5.7-.7-3.5-3.5z" />
    </SVG>
  );
};

export default Close;

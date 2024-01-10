import React, { FC } from 'react';

import type { Color } from '@componentsV3/styles/Color';
import SVG from '@componentsV3/styles/SVG';

const Cross: FC<{ color: Color }> = ({ color }) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 197 197"
    xmlSpace="preserve"
    color={color}
  >
    <path d="M197 25.2 171.8 0 98.5 73.3 25.2 0 0 25.2l73.3 73.3L0 171.8 25.2 197l73.3-73.3 73.3 73.3 25.2-25.2-73.3-73.3z" />
  </SVG>
);

export default Cross;

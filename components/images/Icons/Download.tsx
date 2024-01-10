import React, { FC } from 'react';

import type { Color } from '@componentsV3/styles/Color';

import SVG from '@componentsV3/styles/SVG';
const Download: FC<{ color?: Color }> = ({ color = 'green' }) => {
  return (
    <SVG x="0" y="0" viewBox="0 0 50 16" xmlSpace="preserve" color={color}>
      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
    </SVG>
  );
};

export default Download;

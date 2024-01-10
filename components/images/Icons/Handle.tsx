import React, { FC } from 'react';

import type { Color } from '@componentsV3/styles/Color';

import SVG from '@componentsV3/styles/SVG';

const Handle: FC<{ color?: Color }> = ({ color = 'green' }) => {
  return (
    <SVG x="0" y="0" viewBox="0 0 8 12" xmlSpace="preserve" color={color}>
      <path d="M-.1 0h2v2h-2zM-.1 5h2v2h-2zM-.1 10h2v2h-2zM5.9 0h2v2h-2zM5.9 5h2v2h-2zM5.9 10h2v2h-2z" />
    </SVG>
  );
};

export default Handle;

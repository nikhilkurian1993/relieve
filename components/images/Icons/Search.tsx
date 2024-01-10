import React, { FC } from 'react';

import type { Color } from '@components/styles/Color';

import SVG from '@components/styles/SVG';

const Search: FC<{ color: Color }> = ({ color }) => (
  <SVG x="0" y="0" viewBox="0 0 13.2 13.2" xmlSpace="preserve" color={color}>
    <path d="M9.7 9zm-6.8 1.4L2 9.8l.9.6z" />
    <path d="M9.7 9c.1 0 .1 0 0 0 .9-1 1.3-2.2 1.3-3.5v-.7c0-.1 0-.3-.1-.4-.2-1.1-.7-2-1.5-2.8-.4-.4-.9-.7-1.3-1-.2-.1-.4-.1-.5-.2h-.1C7.2.2 6.9.2 6.6.1 6.2 0 5.9 0 5.5 0c-.4 0-.7 0-1 .1-.3 0-.6.1-.9.2h-.1c-.2.2-.4.2-.6.3-.4.3-.9.6-1.3 1-2.2 2.1-2.2 5.6 0 7.8.1.1.3.2.4.4l.9.6c.2.1.3.2.5.2.3.1.7.2 1 .3.4.1.8.1 1.1.1.3 0 .7 0 1-.1s.7-.2 1-.3c.5-.2 1-.5 1.4-.9l3.5 3.5.7-.7L9.7 9zm-7.4-.3C.5 6.9.5 4.1 2.3 2.3c.9-.8 2-1.3 3.2-1.3s2.3.5 3.2 1.3c.8.8 1.3 2 1.3 3.2 0 1.2-.5 2.3-1.3 3.2-1.8 1.7-4.6 1.7-6.4 0z" />
  </SVG>
);

export default Search;

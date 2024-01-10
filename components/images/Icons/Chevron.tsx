import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import type { Color } from '@componentsV3/styles/Color';

const SVG = styled.svg<{ color: Color; flip?: boolean }>`
  path {
    fill: ${({ theme, color }) => theme[color]};
  }

  ${({ flip }) =>
    flip &&
    css`
      position: relative;
      top: -0.1rem;
      transform: rotate(-180deg);
    `}
`;

const ChevronDown: FC<{ color?: Color; flip?: boolean }> = ({
  color = 'green',
  flip,
}) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      color={color}
      viewBox="0 0 92.055 54.865"
      flip={flip}
    >
      <path
        d="M6168.664,147.569l-46.031-46.029,8.836-8.835,37.2,37.194,37.2-37.194,8.828,8.835Z"
        transform="translate(-6122.633 -92.705)"
      />
    </SVG>
  );
};

export default ChevronDown;

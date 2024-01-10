import { Color } from '@components/styles/Color';
import FlexBox from '@components/ui/FlexBox';
import Planar from '@components/ui/Planar';
import React, { FC } from 'react';
import styled from 'styled-components';

type SizeType = 'default' | 'small' | 'medium';

const Container = styled(FlexBox)<{ size: SizeType }>`
  .back {
    height: ${({ size }) =>
      size === 'small' ? 2.8 : size === 'medium' ? 3 : 3.5}rem;
    width: ${({ size }) =>
      size === 'small' ? 2.8 : size === 'medium' ? 3 : 3.5}rem;
    border: 0.1rem solid ${({ theme }) => theme.black};
    border-radius: 0.5rem;
  }
`;

const TitleAndBack: FC<{
  title: string;
  onClick: Function;
  size?: SizeType;
  color?: Color;
}> = ({ title, onClick, size = 'default', color }) => (
  <Container center columnGap={size === 'small' ? 1 : 1.5} size={size}>
    <div>
      <button className="back" onClick={() => onClick()}>
        <span>←</span>
      </button>
    </div>
    <Planar
      as="h1"
      fontSize={size === 'small' ? 1.8 : size === 'medium' ? 2.4 : 2.8}
      lineHeight={1}
      color={color ? color : 'black'}
    >
      {title}
    </Planar>
  </Container>
);

export default TitleAndBack;

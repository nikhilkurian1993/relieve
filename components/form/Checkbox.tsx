import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import CheckboxSingle from '@components/form/CheckboxSingle';
import fonts from '@lib/use-fonts';
import { Color } from '@components/styles/Color';
import FlexBox from '../ui/FlexBox';
import Flag from '@components/ui/Flag';

const Container = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr;
  column-gap: 1rem;
`;

const Copy = styled.div<{ fontSize?: number }>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 1.3)}rem;
  line-height: 1.3;

  label {
    ${({ fontSize }) =>
      fontSize &&
      css`
        font-weight: 400;
      `};
  }

  > *:nth-child(2) {
    color: ${({ theme }) => theme.darkGrey};
  }

  .sub {
    ${({ fontSize }) =>
      fontSize &&
      css`
        font-size: ${fontSize - 0.1}rem;
      `};
  }
`;

const Checkbox: FC<{
  id: string;
  register: any;
  copy: string;
  subcopy?: string;
  onClick?: Function;
  fontSize?: number;
  flag?: string;
  flagColor?: Color;
  type?: string;
  value?: string;
}> = ({
  id,
  register,
  copy,
  subcopy,
  onClick,
  fontSize,
  flag,
  flagColor,
  type,
  value,
}) => (
  <Container>
    <CheckboxSingle
      id={id}
      register={register}
      onClick={onClick}
      type={type}
      value={value}
    />
    <Copy className={fonts.planar.className} fontSize={fontSize}>
      <FlexBox center columnGap={1}>
        <label htmlFor={id}>{copy}</label>
        {flag && <Flag color={flagColor ? flagColor : 'green'}>{flag}</Flag>}
      </FlexBox>
      {subcopy && <div className="sub">{subcopy}</div>}
    </Copy>
  </Container>
);

export default Checkbox;

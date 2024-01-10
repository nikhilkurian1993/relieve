import Link from 'next/link';
import React, { FC } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Mono from './Mono';
import Image from 'next/image';
import FlexBox from './FlexBox';
import type { Color } from '@components/styles/Color';
import fonts from '@lib/use-fonts';
import Heart from '@components/icons/HeartIcon';
import FiltersIcon from '@components/icons/FiltersIcon';
import Download from '@components/images/Icons/Download2';

type SizeType = 'large' | 'default' | 'small' | 'xsmall' | 'xxsmall';
type AsType = 'a' | 'button' | 'Link' | 'input' | 'span';
type VariantType =
  | 'primary'
  | 'outline'
  | 'outlineWhite'
  | 'outlineGrey'
  | 'outlineGreen';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const ButtonStyles = css<{
  variant: VariantType;
  color: Color;
  round: string | undefined;
  center?: string | undefined;
  fullwidth?: string | undefined;
  fat?: boolean;
  header?: number;
  size?: SizeType;
  border?: boolean;
  disabled?: boolean;
}>`
  position: relative;
  display: inline-block;
  background-color: ${({ theme, color, variant }) =>
    variant === 'outline' ||
    variant === 'outlineWhite' ||
    variant === 'outlineGrey'
      ? 'transparent'
      : theme[color]};
  border-radius: ${({ round }) => (round === 'true' ? 5 : 0.5)}rem;
  padding: ${({ size }) =>
    size === 'large' ? '1.5rem 4' : size === 'xxsmall' ? 1 : 1.5}rem;
  white-space: nowrap;

  ${({ fullwidth }) =>
    fullwidth === 'true' &&
    css`
      text-align: center;
      width: 100%;
    `};

  ${({ header }) =>
    header === 1 &&
    css`
      padding: 1.5rem 1rem;
    `};

  ${({ border, color, theme }) => {
    if (border) {
      if (color === 'green') {
        return css`
          border: 1px solid ${theme.mediumGreen};
        `;
      } else if (color === 'mediumLightGrey') {
        return css`
          border: 1px solid ${theme.lightGrey};
        `;
      }
    }
  }};

  > * {
    justify-content: ${({ center }) => (center === 'true' ? 'center' : 'left')};
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding: ${({ size }) => (size === 'xxsmall' ? 1 : '1.5rem 1')}rem;
  }

  ${({ variant, theme }) =>
    (variant === 'outline' ||
      variant === 'outlineWhite' ||
      variant === 'outlineGreen' ||
      variant === 'outlineGrey') &&
    css`
      border: 0.1rem solid
        ${variant === 'outlineGreen'
          ? theme.black
          : variant === 'outlineWhite'
          ? theme.white
          : variant === 'outlineGrey'
          ? theme.mediumGrey
          : theme.black};
    `};

  &:hover {
    filter: ${({ color, variant }) =>
      color === 'black' || variant === 'outline'
        ? 'brightness(1.4)'
        : 'brightness(0.95)'};
  }

  .copy {
    margin-top: -0.2rem;
  }

  span {
    display: block;
  }

  ${({ fat }) =>
    fat &&
    css`
      padding: 1.5rem 5rem !important;
      text-align: center !important;
    `};
  ${({ disabled, theme, color }) =>
    disabled &&
    css`
      background-color: ${theme.textGrey};
      cursor: not-allowed;
    `}
`;

const ButtonContainer = styled(Link)<{
  variant: VariantType;
  color: Color;
  round: string | undefined;
  center?: string | undefined;
  fullwidth?: string | undefined;
  fat?: boolean;
  header?: number;
  size?: SizeType;
  disabled?: boolean;
}>`
  ${ButtonStyles}
`;

const InputButton = styled.input<{
  variant: VariantType;
  color: Color;
  round: string | undefined;
  center?: string | undefined;
  fullwidth?: string | undefined;
  fat?: boolean;
  size?: SizeType;
}>`
  ${ButtonStyles}
  font-weight: 400;
  font-size: 1.4rem;

  ${({ size }) =>
    size === 'xxsmall' &&
    css`
      font-size: 1.2rem;
      line-height: 1;
    `};
`;

const Arrow = styled.span`
  font-family: sans-serif;
  font-weight: bold;
`;

export const LoadingSpinner = styled.div<{ isLoading: boolean }>`
  position: absolute;
  top: 50%;
  left: 1.5rem;
  transform: translateY(-50%);

  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;

  img {
    animation: ${rotate} 1s linear infinite;
    height: 1.8rem;
    width: 1.8rem;
  }
`;

export const LoadingSpacer = styled.div<{ isLoading: boolean }>`
  width: 2.8rem;
  max-width: ${({ isLoading }) => (isLoading ? 3 : 0)}rem;
  transition: max-width 0.3s ease-in-out;
`;

const HeartContainer = styled.div`
  position: relative;
  width: 1.8rem;

  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    transform: translateX(-50%) translateY(-54%);
  }
`;

const FiltersContainer = styled.div`
  position: relative;
  width: 1.25rem;
`;

const DownloadContainer = styled.div`
  position: relative;
  width: 1.25rem;

  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    transform: translateX(-50%) translateY(-54%);
  }
`;

const Button: FC<{
  children?: React.ReactNode;
  color?: Color;
  size?: SizeType;
  variant?: VariantType;
  as?: AsType;
  href?: any;
  onClick?: Function | undefined;
  arrowRight?: boolean;
  arrowLeft?: boolean;
  plusRight?: boolean;
  heartLeft?: boolean;
  filtersRight?: boolean;
  close?: boolean;
  round?: boolean;
  center?: boolean;
  fullwidth?: boolean;
  fat?: boolean;
  type?: string;
  loading?: boolean;
  header?: boolean;
  columnGap?: number;
  download?: boolean;
  blank?: boolean;
  value?: string | undefined;
  disabled?: boolean;
  className?: string | undefined;
  register?: any;
}> = ({
  children,
  color = 'green',
  size = 'default',
  variant = 'primary',
  as = 'button',
  href,
  onClick,
  arrowRight,
  arrowLeft,
  plusRight,
  heartLeft,
  filtersRight,
  close,
  round = false,
  loading = false,
  center = false,
  blank = false,
  download = false,
  fullwidth = false,
  disabled = false,
  fat,
  type,
  header = 0,
  columnGap,
  value,
  className,
  register,
}) =>
  as === 'input' ? (
    <InputButton
      {...register}
      variant={variant}
      color={color}
      round={round ? 'true' : undefined}
      type="submit"
      value={value}
      className={fonts.mono.className}
      disabled={disabled}
      center={center ? 'true' : undefined}
      fullwidth={fullwidth ? 'true' : undefined}
      size={size}
    />
  ) : (
    <ButtonContainer
      color={color}
      variant={variant}
      as={as === 'Link' ? undefined : as}
      href={href}
      onClick={() => (!disabled && onClick ? onClick() : {})}
      round={round ? 'true' : undefined}
      center={center ? 'true' : undefined}
      fullwidth={fullwidth ? 'true' : undefined}
      fat={fat}
      type={type}
      disabled={disabled}
      header={+header}
      download={download}
      target={blank ? '_blank' : ''}
      size={size}
      className={className}
    >
      <Mono
        as="div"
        lineHeight={1}
        fontSize={
          size === 'xsmall' || size === 'xxsmall'
            ? 1.2
            : size === 'small'
            ? 1.4
            : 1.6
        }
        fontSizeDesktopLarge={
          size === 'xsmall' || size === 'xxsmall'
            ? 1.2
            : size === 'small'
            ? 1.4
            : 1.8
        }
        fontSizeDesktop={
          size === 'xsmall' || size === 'xxsmall'
            ? 1.2
            : size === 'small'
            ? 1.2
            : 1.4
        }
        fontSizeTablet={
          size === 'xsmall' || size === 'xxsmall'
            ? 1.2
            : size === 'small'
            ? 1.2
            : 1.4
        }
        color={
          color === 'black' || variant === 'outlineWhite' ? 'white' : 'black'
        }
      >
        <FlexBox justifyCenter={center}>
          {loading && (
            <LoadingSpinner isLoading={loading}>
              <Image
                src="/static/images/v3/loading-spinner.png"
                alt="Loading"
                height={18}
                width={18}
              />
            </LoadingSpinner>
          )}
          <LoadingSpacer isLoading={loading} />
          <FlexBox center columnGap={columnGap ? columnGap : 1}>
            {arrowLeft && <Arrow>←</Arrow>}
            {heartLeft && !loading && (
              <HeartContainer>
                <Heart color="mediumGrey" />
              </HeartContainer>
            )}
            <span className="copy">
              {children}
              {plusRight && ' +'}
            </span>
            {arrowRight && <Arrow>→</Arrow>}
            {download && (
              <DownloadContainer>
                <Download color="black" />
              </DownloadContainer>
            )}
            {filtersRight && (
              <FiltersContainer>
                <FiltersIcon color="black" />
              </FiltersContainer>
            )}
          </FlexBox>
        </FlexBox>
      </Mono>
    </ButtonContainer>
  );

export default Button;

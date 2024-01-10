import fonts from '@lib/use-fonts';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import type { Color } from '@components/styles/Color';

const Container = styled.div<{
  fontSize: number;
  fontSizeDesktopLarge?: number | undefined;
  fontSizeDesktop?: number | undefined;
  fontSizeTablet?: number | undefined;
  fontSizeMobile?: number | undefined;
  lineHeight: number;
  lineHeightTablet?: number | undefined;
  lineHeightMobile?: number | undefined;
  color: Color;
  underline: boolean;
  uppercase: boolean;
  light: boolean;
  bold?: boolean;
  strikeThrough?: boolean;
  displayContents?: boolean;
}>`
  font-size: ${({ fontSize }) => `${fontSize}rem`};
  color: ${({ theme, color }) => theme[color]};
  font-weight: ${({ light }) => (light ? 300 : 400)};
  line-height: ${({ lineHeight }) => lineHeight};

  ${({ strikeThrough }) =>
    strikeThrough &&
    css`
      text-decoration: line-through;
    `}

  ${({ displayContents }) =>
    displayContents &&
    css`
      display: contents;
    `};

  ${({ light }) =>
    !light &&
    css`
      letter-spacing: -0.025rem;
    `};

  ${({ fontSizeDesktop }) =>
    fontSizeDesktop &&
    css`
      @media (max-width: ${({ theme }) => theme.desktop}) {
        font-size: ${fontSizeDesktop}rem;
      }
    `};

  ${({ fontSizeTablet }) =>
    fontSizeTablet &&
    css`
      @media (max-width: ${({ theme }) => theme.tablet}) {
        font-size: ${fontSizeTablet}rem;
      }
    `};
  ${({ lineHeightTablet }) =>
    lineHeightTablet &&
    css`
      @media (max-width: ${({ theme }) => theme.tablet}) {
        line-height: ${lineHeightTablet};
      }
    `};

  ${({ fontSizeMobile }) =>
    fontSizeMobile &&
    css`
      @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: ${fontSizeMobile}rem;
      }
    `};
  ${({ lineHeightMobile }) =>
    lineHeightMobile &&
    css`
      @media (max-width: ${({ theme }) => theme.mobile}) {
        line-height: ${lineHeightMobile};
      }
    `};

  ${({ fontSizeDesktopLarge }) =>
    fontSizeDesktopLarge &&
    css`
      @media (min-width: ${({ theme }) => theme.desktoplarge}) {
        font-size: ${fontSizeDesktopLarge}rem;
      }
    `};
  ${({ underline }) =>
    underline &&
    css`
      text-decoration: underline;
    `};
  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
      letter-spacing: 0.02rem;
    `};

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `};
`;

const Planar: FC<{
  children?: React.ReactNode;
  fontSize?: number | undefined;
  fontSizeDesktopLarge?: number | undefined;
  fontSizeDesktop?: number | undefined;
  fontSizeTablet?: number | undefined;
  fontSizeMobile?: number | undefined;
  lineHeight?: number | undefined;
  lineHeightTablet?: number | undefined;
  color?: Color | undefined;
  light?: boolean | undefined;
  underline?: boolean;
  uppercase?: boolean;
  htmlFor?: any;
  as?: any;
  className?: string;
  bold?: boolean;
  strikeThrough?: boolean;
  onClick?: Function | undefined;
  dangerouslySetInnerHTML?: any | undefined;
  displayContents?: boolean;
}> = ({
  children,
  fontSize = 1.4,
  fontSizeDesktopLarge,
  fontSizeDesktop,
  fontSizeTablet,
  fontSizeMobile,
  color = 'black',
  htmlFor,
  as,
  underline = false,
  uppercase = false,
  light = false,
  lineHeight = 1.5,
  lineHeightTablet,
  className,
  bold = false,
  onClick,
  dangerouslySetInnerHTML,
  strikeThrough,
  displayContents,
}) => (
  <Container
    as={as}
    htmlFor={htmlFor}
    fontSize={fontSize}
    fontSizeDesktopLarge={fontSizeDesktopLarge}
    fontSizeDesktop={fontSizeDesktop}
    fontSizeTablet={fontSizeTablet}
    fontSizeMobile={fontSizeMobile}
    className={`${fonts.planar.className} ${className}`}
    color={color}
    underline={underline}
    uppercase={uppercase}
    light={light}
    lineHeight={lineHeight}
    lineHeightTablet={lineHeightTablet}
    bold={bold}
    onClick={() => (onClick ? onClick() : null)}
    dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    strikeThrough={strikeThrough}
    displayContents={displayContents}
  >
    {children}
  </Container>
);

export default Planar;

import fonts from '@lib/use-fonts';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

type ColorType =
  | 'black'
  | 'darkBlack'
  | 'darkGreen'
  | 'darkGrey'
  | 'mediumGrey'
  | 'white'
  | 'green'
  | 'mediumGreen'
  | 'highlightGreen'
  | 'darkGreen'
  | 'grey';

const Container = styled.div<{
  fontSize: number;
  fontSizeDesktopLarge?: number | undefined;
  fontSizeDesktop?: number | undefined;
  fontSizeTablet?: number | undefined;
  fontSizeMobile?: number | undefined;
  lineHeight: number;
  color: ColorType;
  underline: boolean;
  light: boolean;
  bold?: boolean;
}>`
  font-size: ${({ fontSize }) => `${fontSize}rem`};
  color: ${({ theme, color }) => theme[color]};
  line-height: ${({ lineHeight }) => lineHeight};
  letter-spacing: -0.02rem;

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
  ${({ fontSizeMobile }) =>
    fontSizeMobile &&
    css`
      @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: ${fontSizeMobile}rem;
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
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `};
`;

const Mono: FC<{
  children: React.ReactNode;
  fontSize?: number | undefined;
  fontSizeDesktopLarge?: number | undefined;
  fontSizeDesktop?: number | undefined;
  fontSizeTablet?: number | undefined;
  fontSizeMobile?: number | undefined;
  lineHeight?: number | undefined;
  color?: ColorType | undefined;
  underline?: boolean;
  bold?: boolean;
  htmlFor?: any;
  as?: any;
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
  lineHeight = 1.5,
  bold = false,
}) => (
  <Container
    as={as}
    htmlFor={htmlFor}
    fontSize={fontSize}
    fontSizeDesktopLarge={fontSizeDesktopLarge}
    fontSizeDesktop={fontSizeDesktop}
    fontSizeTablet={fontSizeTablet}
    fontSizeMobile={fontSizeMobile}
    className={fonts.mono.className}
    color={color}
    underline={underline}
    lineHeight={lineHeight}
    bold={bold}
  >
    {children}
  </Container>
);

export default Mono;

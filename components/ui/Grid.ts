import styled, { css } from 'styled-components';

const Grid = styled.div<{
  columns?: number;
  columnsDesktop?: number;
  columnsTablet?: number;
  columnsMobile?: number;
  columnGap?: number;
  columnGapTablet?: number;
  rows?: number;
  rowsMobile?: number | string;
  rowsTablet?: number;

  rowGap?: number;
  rowGapDesktopLarge?: number;
  rowGapDesktop?: number;
  rowGapTablet?: number;
  rowGapMobile?: number;
}>`
  display: grid;

  ${({ columns }) =>
    columns &&
    css`
      grid-template-columns: repeat(${columns}, 1fr);
    `};

  ${({ columnGap }) =>
    columnGap &&
    css`
      column-gap: ${columnGap}rem;
    `};

  ${({ columnGapTablet, theme }) =>
    columnGapTablet &&
    css`
      @media (max-width: ${theme.tablet}) {
        column-gap: ${columnGapTablet}rem;
      }
    `};

  ${({ columnsDesktop, theme }) =>
    columnsDesktop &&
    css`
      @media (max-width: ${theme.desktop}) {
        grid-template-columns: repeat(${columnsDesktop}, 1fr);
      }
    `};
  ${({ columnsTablet, theme }) =>
    columnsTablet &&
    css`
      @media (max-width: ${theme.tablet}) {
        grid-template-columns: repeat(${columnsTablet}, 1fr);
      }
    `};
  ${({ columnsMobile, theme }) =>
    columnsMobile &&
    css`
      @media (max-width: ${theme.mobile}) {
        grid-template-columns: repeat(${columnsMobile}, 1fr);
      }
    `};

  ${({ rows }) =>
    rows &&
    css`
      grid-template-rows: repeat(${rows}, 1fr);
    `};

  ${({ rowGap }) =>
    rowGap &&
    css`
      row-gap: ${rowGap}rem;
    `};

  ${({ rowsTablet, theme }) =>
    rowsTablet &&
    css`
      @media (max-width: ${theme.tablet}) {
        grid-template-rows: ${typeof rowsTablet === 'string'
          ? `${rowsTablet}`
          : `repeat(${rowsTablet}, 1fr)`};
      }
    `};

  ${({ rowsMobile, theme }) =>
    rowsMobile &&
    css`
      @media (max-width: ${theme.mobile}) {
        grid-template-rows: ${typeof rowsMobile === 'string'
          ? `${rowsMobile}`
          : `repeat(${rowsMobile}, 1fr)`};
      }
    `};

  ${({ rowGapDesktop, theme }) =>
    rowGapDesktop &&
    css`
      @media (max-width: ${theme.desktop}) {
        row-gap: ${rowGapDesktop}rem;
      }
    `};
  ${({ rowGapTablet, theme }) =>
    rowGapTablet &&
    css`
      @media (max-width: ${theme.tablet}) {
        row-gap: ${rowGapTablet}rem;
      }
    `};
  ${({ rowGapMobile, theme }) =>
    rowGapMobile &&
    css`
      @media (max-width: ${theme.mobile}) {
        row-gap: ${rowGapMobile}rem;
      }
    `};

  ${({ rowGapDesktopLarge, theme }) =>
    rowGapDesktopLarge &&
    css`
      @media (min-width: ${theme.desktoplarge}) {
        row-gap: ${rowGapDesktopLarge}rem;
      }
    `};
`;

export default Grid;

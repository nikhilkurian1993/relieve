import styled, { css } from 'styled-components';

const FlexBox = styled.div<{
  center?: boolean;
  justifyCenter?: boolean;
  justifyRight?: boolean;
  spaceBetween?: boolean;
  spaceAround?: boolean;
  column?: boolean;
  columnGap?: number;
  rowGap?: number;
  rowGapDesktop?: number;
  rowGapMobile?: number;
  bottom?: boolean;
  mobileRows?: boolean;
  desktopColumn?: boolean;
  desktopColumnLeft?: boolean;
  mobileColumn?: boolean;
  mobileColumnLeft?: boolean;
  fullHeight?: boolean;
}>`
  display: flex;

  ${({ center }) =>
    center &&
    css`
      align-items: center;
    `};

  ${({ bottom }) =>
    bottom &&
    css`
      align-items: flex-end;
    `};

  ${({ justifyCenter }) =>
    justifyCenter &&
    css`
      justify-content: center;
    `};
  ${({ justifyRight }) =>
    justifyRight &&
    css`
      justify-content: right;
    `};

  ${({ spaceBetween }) =>
    spaceBetween &&
    css`
      justify-content: space-between;
    `};
  ${({ spaceAround }) =>
    spaceAround &&
    css`
      justify-content: space-around;
    `};

  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `};

  ${({ rowGap }) =>
    rowGap &&
    css`
      row-gap: ${rowGap}rem;
    `};

  ${({ fullHeight }) =>
    fullHeight &&
    css`
      height: 100%;
    `};

  ${({ desktopColumn }) =>
    desktopColumn &&
    css`
      @media (max-width: ${({ theme }) => theme.desktop}) {
        flex-direction: column;
      }
    `};
  ${({ desktopColumnLeft }) =>
    desktopColumnLeft &&
    css`
      @media (max-width: ${({ theme }) => theme.desktop}) {
        align-items: flex-start;
      }
    `};
  ${({ mobileColumn }) =>
    mobileColumn &&
    css`
      @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
      }
    `};
  ${({ mobileColumnLeft }) =>
    mobileColumnLeft &&
    css`
      @media (max-width: ${({ theme }) => theme.mobile}) {
        align-items: flex-start;
      }
    `};
  ${({ rowGapDesktop }) =>
    rowGapDesktop &&
    css`
      @media (max-width: ${({ theme }) => theme.desktop}) {
        row-gap: ${rowGapDesktop}rem;
      }
    `};
  ${({ rowGapMobile }) =>
    rowGapMobile &&
    css`
      @media (max-width: ${({ theme }) => theme.mobile}) {
        row-gap: ${rowGapMobile}rem;
      }
    `};

  ${({ columnGap }) =>
    columnGap &&
    css`
      column-gap: ${columnGap}rem;
    `};
`;

export default FlexBox;

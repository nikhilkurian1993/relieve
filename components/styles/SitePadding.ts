import { css } from 'styled-components';

const SitePadding = css`
  padding-left: 8rem;
  padding-right: 8rem;

  @media (max-width: ${({ theme }) => theme.desktop}) {
    padding-left: 7rem;
    padding-right: 7rem;
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: ${({ theme }) => theme.desktopmedium}) {
    padding-left: 10rem;
    padding-right: 10rem;
  }
  @media (min-width: ${({ theme }) => theme.desktoplarge}) {
    padding-left: 14rem;
    padding-right: 14rem;
  }
  @media (min-width: 1650px) {
    max-width: 200rem;
    margin: 0 auto;
  }
`;

export default SitePadding;

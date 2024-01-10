import styled from 'styled-components';

const PageLayout = styled.div<{ small?: boolean }>`
  max-width: ${({ small }) => (small ? 110 : 135)}rem;
  margin: 0 auto;
  padding-left: 3rem;
  padding-right: 3rem;

  @media (max-width: ${({ theme }) => theme.desktoplarge}) {
    max-width: ${({ small }) => (small ? 100 : 125)}rem;
  }

  @media (max-width: ${({ theme }) => theme.desktop}) {
    max-width: ${({ small }) => (small ? 90 : 115)}rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export default PageLayout;

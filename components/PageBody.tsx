import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div<{ noSticky: boolean }>`
  display: grid;
  grid-template-columns: 1fr 30rem;
  column-gap: 4rem;
  padding-bottom: 30rem;

  @media (max-width: ${({ theme }) => theme.desktop}) {
    grid-template-columns: 1fr 27rem;
    column-gap: 3;
  }

  ${({ noSticky }) =>
    !noSticky &&
    css`
      > *:last-child {
        > div {
          position: sticky;
          top: 0;
        }
      }
    `};
`;

const PageBody: FC<{ children: React.ReactNode; noSticky?: boolean }> = ({
  children,
  noSticky = false,
}) => <Container noSticky={noSticky}>{children}</Container>;

export default PageBody;

import React, { FC } from 'react';
import BaseLayout from './BaseLayout';
import styled from 'styled-components';
import Link from 'next/link';
import Planar from '@components/ui/Planar';
import AdminMenu from '@components/AdminMenu';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.black};
  z-index: 5;
`;

const Container = styled.div<{ noMenu?: boolean }>`
  position: fixed;
  display: ${({ noMenu }) => (noMenu ? 'block' : 'grid')};
  grid-template-columns: 18rem 1fr;
  height: 100vh;
  width: 100%;
  padding-top: 4.3rem;
  background-color: ${({ theme }) => theme.adminBackgroundGrey};
  /* overflow: hidden; */

  @media (min-width: ${({ theme }) => theme.desktoplarge}) {
    grid-template-columns: 25rem 1fr;
  }
`;

const Body = styled(Planar)<{ noMenu?: boolean }>`
  padding: ${({ noMenu }) => (noMenu ? `6rem 10rem` : `3rem 8rem`)};
  max-width: 175rem;
  margin: 0 auto;
  height: 100vh;
  overflow: scroll;
  scroll-behavior: 'smooth';

  @media (max-width: 1500px) {
    padding: ${({ noMenu }) => (noMenu ? `5rem 10rem` : `3rem 5rem`)};
  }

  @media (max-width: ${({ theme }) => theme.desktop}) {
    padding: ${({ noMenu }) => (noMenu ? `4rem 5rem` : `3rem`)};
  }
`;

const MarketplaceLayout: FC<{
  locale: string;
  children: React.ReactNode;
  hidemenu?: boolean;
  noLink?: boolean;
}> = ({ children, locale, hidemenu = false, noLink = false }) => {
  return (
    <>
      <BaseLayout>
        <DndProvider backend={HTML5Backend}>
          <Container noMenu={hidemenu}>
            <Header>
              {noLink ? (
                <Planar fontSize={2.8} color="green" lineHeight={1}>
                  Re
                </Planar>
              ) : (
                <Link href="/admin">
                  <Planar fontSize={2.8} color="green" lineHeight={1}>
                    Re
                  </Planar>
                </Link>
              )}
            </Header>
            {!hidemenu && (
              <div>
                <AdminMenu />
              </div>
            )}
            <main>
              <Body fontSize={1.4} light noMenu={hidemenu}>
                <div>{children}</div>
              </Body>
            </main>
          </Container>
        </DndProvider>
      </BaseLayout>
    </>
  );
};

export default MarketplaceLayout;

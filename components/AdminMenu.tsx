import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Planar from '@components/ui/Planar';
import { useRouter } from 'next/router';

const Container = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  height: calc(100% - 4.3rem);
  border-right: 0.1rem solid ${({ theme }) => theme.grey};
  padding: 2.5rem 1.5rem 2rem 0.5rem;

  .bottom {
    position: absolute;
    bottom: 1.5rem;
  }
`;

const ListItem = styled.li<{ $active: boolean }>`
  position: relative;

  span {
    display: block;
    padding: 0 1.5rem;
    background-color: ${({ $active }) => ($active ? '#eaebeb' : 'transparent')};
    color: ${({ $active, theme }) => ($active ? theme.black : theme.darkGrey)};
  }

  ${({ $active }) =>
    $active &&
    css`
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: -0.5rem;
        height: 100%;
        width: 0.4rem;
        background-color: ${({ theme }) => theme.green};
      }
    `};

  &:hover {
    span {
      background-color: #eaebeb;
      color: ${({ theme }) => theme.black};
    }
  }
`;

const LinkItem: FC<{
  copy: string;
  link: string;
  id: string;
  small?: boolean;
}> = ({ copy, link, id, small }) => {
  const [active, updateActive] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    const slugs = pathname.split('/');
    slugs.shift();

    if (slugs.length === 1 && link === '/admin') {
      updateActive(true);
      return;
    }

    if (slugs.length > 1) {
      const idSlug = slugs[1];
      if (id === idSlug) {
        updateActive(true);
        return;
      }
    }

    updateActive(false);
  }, [pathname]);

  return (
    <ListItem $active={active}>
      <Link href={link}>
        <Planar
          fontSize={small ? 1.2 : 1.7}
          fontSizeDesktop={small ? 1.2 : 1.5}
          color="darkGrey"
          as="span"
          lineHeight={2.3}
          uppercase={small}
        >
          {copy}
        </Planar>
      </Link>
    </ListItem>
  );
};

const adminLinks = [
  { copy: 'Dashboard', link: '/admin', id: '' },
  { copy: 'Campaigns', link: '/admin/campaigns', id: 'campaigns' },
  { copy: 'Products', link: '/admin/products', id: 'products' },
  { copy: 'Donators', link: '/admin/donors', id: 'donors' },
  { copy: 'Buyers', link: '/admin/benificiaries', id: 'benificiaries' },
  { copy: 'Users', link: '/admin/users', id: 'users' },
  { copy: 'Locations', link: '/admin/locations', id: 'locations' },
];

const serviceLinks = [
  { copy: 'Projects', link: '/admin/projects', id: 'projects' },
  { copy: 'Quotes', link: '/admin/quotes', id: 'quotes' },
  { copy: 'Orders', link: '/admin/orders', id: 'orders' },
];

const utilityLink = [
  {
    copy: 'Delivery Partners',
    link: '/admin/delivery-partners',
    id: 'delivery-partners',
  },
  { copy: 'Template', link: '/admin/templates', id: 'templates' },
  { copy: 'Exports', link: '/admin/exports', id: 'exports' },
  { copy: 'Inventory', link: '/admin/inventory', id: 'inventory' },
  { copy: 'Debug', link: '/admin/debug', id: 'debug' },
];

const AdminMenu: FC = () => (
  <Container>
    <ul>
      {adminLinks.map((item, index) => (
        <LinkItem key={index} copy={item.copy} link={item.link} id={item.id} />
      ))}
    </ul>
    <ul>
      <li style={{ paddingLeft: '1.5rem', paddingBottom: '0.5rem' }}>
        <Planar fontSize={1.2} uppercase light color="mediumGrey">
          Services
        </Planar>
      </li>
      {serviceLinks.map((item, index) => (
        <LinkItem key={index} copy={item.copy} link={item.link} id={item.id} />
      ))}
    </ul>
    <ul className="bottom">
      {utilityLink.map((item, index) => (
        <LinkItem
          key={index}
          copy={item.copy}
          link={item.link}
          id={item.id}
          small
        />
      ))}
    </ul>
  </Container>
);

export default AdminMenu;

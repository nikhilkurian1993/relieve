import { useWebsiteContext } from '@contextV3/WebsiteContext';
import { FC } from 'react';
import styled from 'styled-components';

const Hamburger = styled.button<{ open: boolean }>`
  position: relative;
  cursor: pointer;

  div {
    transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out;

    &:nth-of-type(1) {
      transform: ${({ open }) =>
        open
          ? 'translateY(0.4rem) rotate(45deg)'
          : 'translateY(0px) rotate(0)'};
    }
    &:nth-of-type(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }
    &:nth-of-type(3) {
      transform: ${({ open }) =>
        open
          ? 'translateY(-1rem) rotate(-45deg)'
          : 'translateY(0px) rotate(0)'};
    }
  }
`;

const HamburgerBar = styled.div`
  height: 0.1rem;
  width: 3rem;
  display: block;
  margin: 0.6rem auto;
  position: relative;
  background-color: ${({ theme }) => theme.black};
`;

const HamburgerIcon: FC<{ className?: string }> = ({ className }) => {
  const { menuOpen, toggleOpen } = useWebsiteContext();
  return (
    <Hamburger open={menuOpen} onClick={() => toggleOpen('menuOpen')}>
      <HamburgerBar className={className} />
      <HamburgerBar className={className} />
      <HamburgerBar className={className} />
    </Hamburger>
  );
};

export default HamburgerIcon;

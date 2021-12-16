import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { darken, rgba } from 'polished';

import { footerRoutes } from 'components/utils/routes';

export default function Footer() {
  return (
    <BackgroundContainer>
      <MainContainer>
        {/* <Link href="/">
          <a>
            <Image
              src={`/images/logo-4-white.png`}
              alt="logo"
              width={163}
              height={110}
              quality={90}
            />
          </a>
        </Link> */}

        <ButtonContainer>
          {footerRoutes.map((route, key) => (
            <Link key={key} href={'#'}>
              <Button variant={route.title}>{route.title}</Button>
            </Link>
          ))}
        </ButtonContainer>
        <p>2021 - All rights Reserved.</p>
      </MainContainer>
    </BackgroundContainer>
  );
}

const BackgroundContainer = styled.div`
  background-color: ${(props) => props.theme.colors.dark};
  border-top: 3px solid ${(props) => props.theme.colors.silver};
`;

const MainContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  color: white;
  min-height: 310px;

  text-align: center;

  hr {
    margin: 1.5rem 0;
    border: 1px solid ${({ theme }) => theme.colors.orange};
  }

  p {
    margin: 1rem 0 0;
    text-align: center;
    font-size: 0.75rem;
  }

  & img:hover {
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  max-width: 280px;
  margin: 3rem auto 1rem;
`;

const Button = styled.button<{ variant: any }>`
  display: block;
  width: 100%;
  background: ${({ theme, variant }) =>
    variant === 'About Us' ? theme.colors.silver : rgba(0, 0, 0, 0.5)};
  color: ${({ variant }) => (variant === 'About Us' ? '#000' : '#fff')};
  border: 0.5px solid white;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  margin: ${({ variant }) => (variant === 'About Us' ? '1rem 1rem 1rem 0' : '1rem 0 1rem 1rem')};
  font-size: 1rem;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.button.boxShadow};
  transition: background 300ms ease-in-out, transform 150ms ease-in-out;

  &:hover {
    background: ${({ theme, variant }) =>
      variant === 'About Us'
        ? darken(0.05, theme.colors.silver)
        : darken(0.05, theme.colors.brown)};
    transform: scale(1.02);
  }

  ${(props) => props.theme.global.setFocus('#fff')}
`;

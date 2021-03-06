import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export default function Navbar() {
  return (
    <Nav>
      <div className="image-container">
        {/* <Link href="/">
          <a>
            <Image src={`/images/logo-4.png`} alt="logo" width={162} height={110} quality={90} />
          </a>
        </Link> */}
      </div>
    </Nav>
  );
}

const Nav = styled.div`
  background: #fff;
  border-bottom: 2px solid ${({ theme }) => theme.colors.silver};
  box-shadow: black 0px 0px 0px 4px;
  margin-bottom: 4px;
  height: 100px;

  .image-container {
    padding: 1.25rem 0;
    text-align: center;

    & img:hover {
      cursor: pointer;
    }
  }
`;

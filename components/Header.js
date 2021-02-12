import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

// to apply - replace h2 to <HomeLogo>
// will be still rendered as h2 , but got a support class
const HomeLogo = styled.h2`
  background: var(--lightgrey);
  font-size: 2rem;
  margin-left: 1rem;
  position: relative;
  z-index: 2;
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    /* --black is falling default by regular black  */
    border-bottom: 2px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 2px solid var(--black, black);
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <HomeLogo>
          <Link href="/">Home</Link>
        </HomeLogo>
      </div>
      <div className="sub-bar">
        <p>Search placeholder</p>
      </div>
      <Nav />
    </HeaderStyles>
  );
}

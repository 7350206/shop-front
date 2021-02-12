import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

// any style to be globally apply
// benefit of putting them on :root {} is that it can be reuse that css in standalone svg element
const GlobalStyles = createGlobalStyle`
  html {
     --red: #ff0000;
     --black: #303030;
     --grey: #3a3a3a;
     --lightgrey: #e1e1e1;
     --offWhite: #ededed;
     --maxWidth: 1000px;
     --bshadow: 0 12px 20px 0 rgba(0,0,0,0.09);

    box-sizing: border-box;
  }

  /* avoid scrolling on padding add */
  *, *:before, *:after {
    box-sizing: inherit
  }

  body {
    font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  a:hover {
    text-decoration: underline;
  }

  /* font body doesnt apply to buttons */
  button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

// eslint-disable-next-line react/prop-types
export default function Page({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </>
  );
}

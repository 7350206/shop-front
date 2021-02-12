import Page from '../components/Page';

// !! children of _app are Component & pageProps
export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

import Header from './Header';

// eslint-disable-next-line react/prop-types
export default function Page({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

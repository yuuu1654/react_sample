// import { Header } from '../atoms/layout/Header';

import { Footer } from '../atoms/layout/Footer';
import { Header } from '../atoms/layout/Header';

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <span style={{ backgroundColor: 'blue' }}>HeaderOnlyです</span>
      {children}
      <Footer />
    </>
  );
};

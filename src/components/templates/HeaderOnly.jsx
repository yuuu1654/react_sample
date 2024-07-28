// import { Header } from '../atoms/layout/Header';

import { Header } from '../atoms/layout/Header';

export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <span style={{ backgroundColor: 'blue' }}>HeaderOnlyです</span>
      {children}
    </>
  );
};

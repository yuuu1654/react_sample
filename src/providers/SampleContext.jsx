import React, { createContext } from 'react';

export const SampleContext = createContext();

export const SampleProvider = (props) => {
  const { children } = props;
  const hoge = 'hogehoge';
  return (
    <SampleContext.Provider value={{ hoge }}>{children}</SampleContext.Provider>
  );
};

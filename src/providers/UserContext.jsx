import { createContext, useState } from 'react';

// useContextで参照するContextを定義
export const UserContext = createContext();

// Contextを提供する範囲を指定するためのProviderを定義
export const UserProvider = (props) => {
  const { children } = props;
  const user = 'userに関する情報';
  const [userInfo, setUserInfo] = useState(null);
  return (
    <UserContext.Provider value={{ user, userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

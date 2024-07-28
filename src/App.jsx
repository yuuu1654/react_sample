import { BrowserRouter } from 'react-router-dom';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondButton } from './components/atoms/button/SecondButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { HeaderOnly } from './components/templates/HeaderOnly';
import { DefaultLayout } from './components/templates/DefaultLayout';
import { Router } from './router/Router';
import { SampleProvider } from './providers/SampleContext';
import { UserProvider } from './providers/UserContext';
import { RecoilRoot } from 'recoil';

/**
 * user
 * UserCardにuser10人分の配列を渡す
 * 10人分のusers配列を作成
 * 配列はどっちで渡す？コンポーネント側？
 *
 */

export const App = () => {
  return (
    <RecoilRoot>
      <UserProvider>
        <SampleProvider>
          <Router />
          
        </SampleProvider>
      </UserProvider>
    </RecoilRoot>
  );
};

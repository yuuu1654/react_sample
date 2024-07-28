import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom/cjs/react-router-dom.min';
import { Top } from '../components/pages/Top';
import { Users } from '../components/pages/Users';
import { DefaultLayout } from '../components/templates/DefaultLayout';
import { HeaderOnly } from '../components/templates/HeaderOnly';
import { AxiosUsers } from '../components/pages/AxiosUsers';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
        <Route path="/axios-users">
          <AxiosUsers />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

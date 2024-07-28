import styled from 'styled-components';
import { SecondButton } from '../atoms/button/SecondButton';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserContext';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../store/userState';

export const Top = () => {
  const history = useHistory();
  // const { setUserInfo } = useContext(UserContext);
  // ▼ここは逆に更新関数しか使用しない
  const setUserInfo = useSetRecoilState(userState);
  const onClickGeneral = () => {
    // history.push({ pathname: '/users', state: { isAdmin: false } });
    setUserInfo({ isAdmin: false });
    history.push('/users');
  };
  const onClickAdmin = () => {
    // history.push({ pathname: '/users', state: { isAdmin: true } });
    setUserInfo({ isAdmin: true });
    history.push('/users');
  };

  const onClickAxiosUsers = () => {
    history.push('/axios-users');
  };

  return (
    <SContainer>
      <h1>トップページ</h1>
      {/* <h2>{hoge}</h2> */}
      <SecondButton onClick={onClickGeneral}>一般ユーザー</SecondButton>
      <br />
      <SecondButton onClick={onClickAdmin}>管理者ユーザー</SecondButton>
      <br />
      <SecondButton onClick={onClickAxiosUsers}>
        AxiosUsers取得テストページ
      </SecondButton>
    </SContainer>
  );
};

const SContainer = styled.div`
text-align: center
`;

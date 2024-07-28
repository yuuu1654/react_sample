import styled from 'styled-components';
// 遷移時のstateを取得
import { useLocation } from 'react-router-dom';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';
import { UserContext } from '../../providers/UserContext';
import { useContext } from 'react';
import { SecondButton } from '../atoms/button/SecondButton';
// ▼Recoilのstateを参照
import { useRecoilState } from 'recoil';
import { userState } from '../../store/userState';

const users = [...Array(10).keys()].map((n) => {
  return {
    id: n,
    name: `ゆう${n}`,
    image: 'https://picsum.photos/150',
    email: '12345@gmail.com',
    phone: '393809494949',
    company: {
      name: '有限会社hogehoge',
      site: 'hogehoge.com',
    },
  };
});

export const Users = () => {
  // ▼Contextを使って参照するように変更したのでコメントアウト
  // const { state } = useLocation();
  // const isAdmin = state ? state.isAdmin : false;
  /**
   * Contextを参照したい場合は、react-hooksのuseContextを使って、使用するContextを引数に指定
   *
   */
  // const { userInfo, setUserInfo } = useContext(UserContext);
  // ▼ Recoilを使って書き換え
  const [userInfo, setUserInfo] = useRecoilState(userState);
  console.log(userInfo);

  const onClickSwitchIsAdmin = () => {
    setUserInfo({ isAdmin: !userInfo.isAdmin });
  };

  return (
    <SContainer>
      <h1>ユーザー一覧</h1>
      <SecondButton onClick={onClickSwitchIsAdmin}>
        isAdminフラグを切り替える
      </SecondButton>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
text-align: center
`;

const SUserArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
`;

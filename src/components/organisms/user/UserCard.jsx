import styled from 'styled-components';
import { Card } from '../../atoms/card/Card';
import { IconWithName } from '../../molecules/user/IconWithName';
import { memo, useContext } from 'react';
import { UserContext } from '../../../providers/UserContext';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../store/userState';

export const UserCard = memo((props) => {
  // [...Array(10)].map(() => console.log('hoge'));
  const { user } = props;
  // ▼Contextを用いたやり方
  // const { userInfo } = useContext(UserContext);

  // ▼Recoil (ここは値を参照するのみ)
  // const { userInfo } = useRecoilValue(userState); <=これだと値がきちんと参照されない
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  console.log(isAdmin);
  console.log('UserCard');

  return (
    <>
      <Card>
        <IconWithName image={user.image} name={user.name} />
        <SDl>
          <dt>メール</dt>
          <dd>{user.email}</dd>
          <dt>電話番号</dt>
          <dd>{user.phone}</dd>
          <dt>企業名</dt>
          <dd>{user.company.name}</dd>
          <dt>Web</dt>
          <dd>{user.company.site}</dd>
          <button disabled={!isAdmin}>編集</button>
          {isAdmin && <span>安心して下さい！あなたは管理者です</span>}
        </SDl>
      </Card>
    </>
  );
});

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
  }
`;

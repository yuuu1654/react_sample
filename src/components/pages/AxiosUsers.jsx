import axios from 'axios';
import { SecondButton } from '../atoms/button/SecondButton';

export const AxiosUsers = () => {
  const getUsers = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/usersxxxxx')
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        // エラーの内容を見たい時は上記のURLを適当にいじれば見れる
        console.log(err);
      });
  };

  const getUser01 = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <SecondButton onClick={getUsers}>users一覧</SecondButton>
      <br />
      <SecondButton onClick={getUser01}>id=1のユーザー</SecondButton>
    </>
  );
};

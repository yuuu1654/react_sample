import { atom } from 'recoil';

export const userState = atom({
  key: 'userState', //ファイル名と揃えておく
  default: { isAdmin: false },
});

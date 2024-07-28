import { memo } from 'react';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { Input } from '../atoms/input/Input';

export const SearchInput = memo(() => {
  console.log('SearchInput');
  return (
    <div>
      <Input placeholder="検索条件を入力" />
      <PrimaryButton>検索</PrimaryButton>
    </div>
  );
});

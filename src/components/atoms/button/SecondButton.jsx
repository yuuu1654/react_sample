import styled from 'styled-components';
import { BaseButton } from './BaseButton';
import { memo, useContext } from 'react';
import { SampleContext } from '../../../providers/SampleContext';

const SButton = styled(BaseButton)`
  background-color: #838EF1;
`;

export const SecondButton = memo((props) => {
  console.log('SecondButton');
  const { children, onClick } = props;
  const context = useContext(SampleContext);
  return (
    <div>
      <SButton onClick={onClick}>{children}</SButton>
      <BaseButton>BaseButtonどえす</BaseButton>
    </div>
  );
});

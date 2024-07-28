import styled from 'styled-components';
import { BaseButton } from './BaseButton';

const PButton = styled(BaseButton)`
  background-color: #9BDAE7;
`;

export const PrimaryButton = (props) => {
  const { children } = props;
  return (
    <div>
      <PButton>{children}</PButton>
      {/* <BaseButton>BaseButtonどえす</BaseButton> */}
    </div>
  );
};

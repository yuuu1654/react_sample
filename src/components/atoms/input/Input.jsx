import styled from 'styled-components';

export const Input = (props) => {
  const { placeholder } = props;
  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
  background-color: #CAE7F0;
  border-radius: 9999px;
  color: black;
`;

import styled from 'styled-components';

export const IconWithName = (props) => {
  const { image, name } = props;
  return (
    <SContainer>
      <SImg src={image} alt="プロフ" />
      <SName>{name}</SName>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
border-radius: 50%;
`;

const SName = styled.p`
font-size: 18px;
margin: 0;
`;

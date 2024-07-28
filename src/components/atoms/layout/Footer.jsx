import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const Footer = () => {
  return <SFooter>&copy: 2024 test Inc.</SFooter>;
};

const SFooter = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

const SLink = styled(Link)`
margin: 0 10px;
`;

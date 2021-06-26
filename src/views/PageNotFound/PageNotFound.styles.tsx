import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.blue};
  text-decoration-color: ${({ theme }) => theme.colors.grey};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.grey};
    text-decoration-color: ${({ theme }) => theme.colors.blue};
  }
`;

import styled from 'styled-components';

export const InputTip = styled.p`
  margin-bottom: 2rem;
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.grey};
  cursor: default;
`;

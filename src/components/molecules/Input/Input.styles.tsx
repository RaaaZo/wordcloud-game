import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 30rem;
  padding: 1.5rem 1rem;
  margin: 2rem auto;
  font-size: 1.6rem;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  outline-color: ${({ theme }) => theme.colors.blue};
`;

import styled from 'styled-components';

export const Button = styled.button`
  width: 10rem;
  height: 4rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.blue};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  outline-color: ${({ theme }) => theme.colors.blue};
  font-size: 1.6rem;

  &:disabled {
    color: ${({ theme }) => theme.colors.grey};
    border-color: ${({ theme }) => theme.colors.grey};
    cursor: auto;
  }

  &[disabled]:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.grey};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

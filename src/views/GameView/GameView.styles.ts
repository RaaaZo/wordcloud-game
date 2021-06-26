import styled from 'styled-components';

export const GameWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 0.5rem;

  @media (min-width: 768px) {
    width: 85rem;
    height: 55rem;
  }
`;

export const List = styled.ul`
  height: 100%;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
  }
`;

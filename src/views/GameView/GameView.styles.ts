import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';

export const GameWrapper = styled.div`
  width: 85rem;
  height: 55rem;
  margin-bottom: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 0.5rem;
`;

export const StyledButton = styled(Button)`
  width: 15rem;
  height: 5.5rem;
  margin-top: 1rem;
`;

export const List = styled.ul`
  height: 100%;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  flex-wrap: wrap;
`;

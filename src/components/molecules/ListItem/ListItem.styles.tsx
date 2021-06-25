import styled from 'styled-components';

export const ListItem = styled.li`
  width: 100%;
  list-style: none;
`;

export const Wrapper = styled.div<{
  isWrongAnswer: boolean;
  isGoodAnswer: boolean;
  answersChecked: boolean;
  randomGridColumn: number;
  randomGridRow: number;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-column: ${({ randomGridColumn }) => randomGridColumn};
  grid-row: ${({ randomGridRow }) => randomGridRow};

  & button:disabled {
    color: ${({ theme, isGoodAnswer, isWrongAnswer }) => {
      if (isGoodAnswer) {
        return 'green';
      } else if (isWrongAnswer) {
        return 'red';
      } else {
        return theme.colors.grey;
      }
    }};
    cursor: default;
  }

  & p {
    font-size: 1.2rem;
    color: ${({ isGoodAnswer }) => (isGoodAnswer ? 'green' : 'red')};
  }
`;

export const ListItemButton = styled.button<{
  isChecked: boolean;
}>`
  font-size: 1.6rem;
  width: 100%;
  border: none;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.black : theme.colors.grey};
  cursor: pointer;
`;

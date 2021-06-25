export const randomNumber = (dataArrayLength: number) => {
  const number = Math.round(Math.random() * dataArrayLength - 1);
  if (number === -1) {
    return 0;
  }
  return number;
};

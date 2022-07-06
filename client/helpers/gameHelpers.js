export const generateRoomCode = () => {
  const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const INT = "123456789";
  const randomIdx = (max) => Math.floor(Math.random() * max);
  return (
    INT[randomIdx(8)] +
    ALPHA[randomIdx(25)] +
    ALPHA[randomIdx(25)] +
    ALPHA[randomIdx(25)] +
    ALPHA[randomIdx(25)]
  );
};

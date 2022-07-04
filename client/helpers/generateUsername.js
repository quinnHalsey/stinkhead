import { faker } from "@faker-js/faker";

const generateUsername = () => {
  let firstWord = "";
  let secondWord = "";

  while (firstWord.length === 0 || firstWord.length > 8)
    firstWord = faker.word.adjective();
  while (secondWord.length === 0 || secondWord.length > 8)
    secondWord = faker.word.noun();

  const usernameArr = [firstWord, secondWord];

  const caseSenseArr = usernameArr.map(
    (word) => word[0].toUpperCase() + word.slice(1, word.length)
  );

  return caseSenseArr.join("");
};

export default generateUsername;

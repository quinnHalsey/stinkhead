import { faker } from "@faker-js/faker";

export const generateUsername = () => {
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

export const invalidateUsername = (username) => {
  const acceptedChars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-1234567890";

  if (username.length < 4) return "Username must be at least 4 characters.";

  for (let i = 0; i < username.length; i++) {
    if (username[i] === " ") return "Username may not contain spaces.";
    if (!acceptedChars.includes(username[i])) {
      console.log(username[i]);
      console.log("check");
      return "Username may only contain letters, numbers and '-' or '_'.";
    }
  }

  return "";
};

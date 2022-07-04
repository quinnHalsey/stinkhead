import { useState } from "react";

import JoinForm from "./JoinForm";

import { generateUsername, validateUsername } from "../helpers/usernameHelpers";

const JoinCreate = () => {
  const [username, setUsername] = useState(generateUsername());

  const [validUsername, setValidUsername] = useState({
    valid: true,
    message: "",
  });

  const [joinHide, setJoinHide] = useState(true);

  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleRandom = () => {
    setUsername(generateUsername());
  };

  const revealJoin = () => {};

  return (
    <>
      <div id="username-input">
        <input
          type="text"
          aria-label="username"
          placeholder="Username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          maxLength={16}
        />
        <button type="button" className="button-light" onClick={handleRandom}>
          Random
        </button>
      </div>
      <div id="create-buttons">
        <button type="button" className="button-dark" onClick={revealJoin}>
          Join Game
        </button>
        <button type="button" className="button-dark">
          Create Game
        </button>
      </div>
    </>
  );
};

export default JoinCreate;

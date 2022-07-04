import { useState } from "react";

import JoinForm from "./JoinForm";
import { FcCheckmark, FcCancel } from "react-icons/fc";

import {
  generateUsername,
  invalidateUsername,
} from "../helpers/usernameHelpers";

const JoinCreate = () => {
  const [username, setUsername] = useState(generateUsername());

  const [invalidUsername, setInvalidUsername] = useState("");

  const [joinHide, setJoinHide] = useState(true);
  console.log(username, "username");

  const handleNameChange = (e) => {
    const input = e.target.value;
    setUsername(input);
    const invalidMessage = invalidateUsername(input);
    console.log(invalidMessage, "invalid message");
    if (invalidMessage.length) setInvalidUsername(invalidMessage);
    else setInvalidUsername("");
  };

  const handleRandom = () => {
    setUsername(generateUsername());
    if (invalidUsername) setInvalidUsername("");
  };

  const revealJoin = () => {};

  return (
    <>
      <div id="username-input">
        <div id="username-input-wrapper">
          <input
            type="text"
            aria-label="username"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => handleNameChange(e)}
            maxLength={16}
          />
          <div id="validation-wrapper">
            {invalidUsername ? (
              <FcCancel size={24} />
            ) : (
              <FcCheckmark size={24} />
            )}
          </div>
          <div id="invalid-message">{invalidUsername}</div>
        </div>
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

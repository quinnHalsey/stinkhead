import { useState } from "react";
import CreateGame from "./CreateGame";
import { FcCheckmark, FcCancel } from "react-icons/fc";

import {
  generateUsername,
  invalidateUsername,
} from "../helpers/usernameHelpers";

const JoinCreate = () => {
  const [username, setUsername] = useState(generateUsername());
  const [invalidUsername, setInvalidUsername] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [revealCreate, setRevealCreate] = useState(true);

  const handleNameChange = (e) => {
    const input = e.target.value;
    setUsername(input);
    const invalidMessage = invalidateUsername(input);

    if (invalidMessage.length) setInvalidUsername(invalidMessage);
    else setInvalidUsername("");
  };

  const handleRandom = () => {
    setUsername(generateUsername());
    if (invalidUsername) setInvalidUsername("");
  };

  return (
    <>
      <div className="input-button">
        <div className="input-wrapper">
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
      <div className="input-button">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Room Code"
            name="roomCode"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            maxLength={5}
          />
        </div>
        <button type="button" className="button-light" onClick={handleRandom}>
          Join Game
        </button>
      </div>
      <button
        type="button"
        className="button-dark"
        onClick={() => setRevealCreate(true)}
      >
        Create Game
      </button>
      {revealCreate && <CreateGame />}
    </>
  );
};

export default JoinCreate;

import { useState } from "react";

import StinkheadTitle from "../../public/stinkhead_title.svg";
import JoinCreate from "./JoinCreate";

import generateUsername from "../helpers/generateUsername";

const Home = () => {
  const [username, setUsername] = useState(generateUsername());

  const handleRandom = () => {
    setUsername(generateUsername());
  };

  return (
    <div>
      <div id="home-wrapper">
        <div id="title">
          <StinkheadTitle />
        </div>
        <div id="username-input">
          <input
            type="text"
            aria-label="username"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="button" className="button-light" onClick={handleRandom}>
            Random
          </button>
        </div>
        <JoinCreate />
      </div>
    </div>
  );
};

export default Home;

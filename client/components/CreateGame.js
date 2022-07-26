import axios from "axios";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const CreateGame = ({ username, roomCode, handleCloseJoin }) => {
  const navigate = useNavigate();

  // const [publicGame, setPublicGame] = useState(false);
  const [autoPickup, setAutoPickup] = useState(true);
  // const [turnTimeout, setTurnTimeout] = useState(300);
  const [maxPlayers, setMaxPlayers] = useState(4);

  const [turnTimeout, setTurnTimeout] = useState(300);

  console.log(turnTimeout, "turnTimeout");

  const handleCreateGame = async () => {
    const host = {
      username,
      turnOrder: 1,
    };

    const game = {
      autoPickup,
      turnTimeout,
      maxPlayers,
      roomCode,
    };

    const { data: newRoom } = await axios.post("/api/gameRoom", {
      gameRoom: game,
      player: host,
    });

    if (newRoom) navigate(`/${newRoom.roomCode}`);
  };

  return (
    <div id="create-form">
      <div id="room-code-home">
        <div id="subheading">ROOM CODE</div>
        <div>{roomCode}</div>
      </div>

      <div id="room-options">
        <fieldset
          className="row"
          onChange={(e) => setTurnTimeout(Number(e.target.value))}
          name="times"
          radioGroup="timeout"
        >
          <p>Turn Timeout</p>
          <div>
            <input
              className="radio"
              type="radio"
              name="timeout"
              value={180}
              onChange={() => console.log("changed 3 mins")}
              checked={turnTimeout === 180}
            />
            <label htmlFor="3">3 Minutes</label>
          </div>
          <div>
            <input
              className="radio"
              type="radio"
              name="timeout"
              value={300}
              onChange={() => console.log("changed 300")}
              checked={turnTimeout === 300}
            />
            <label htmlFor="5">5 Minutes</label>
          </div>
          <div>
            <input
              className="radio"
              type="radio"
              name="timeout"
              value={600}
              onChange={() => console.log("changed 600")}
              checked={turnTimeout === 600}
            />
            <label htmlFor="10">10 Minutes</label>
          </div>
        </fieldset>

        <hr className="divider" />

        <fieldset
          className="row"
          onChange={(e) => setMaxPlayers(Number(e.target.value))}
          defaultValue={4}
        >
          <p>Max Players</p>
          <div>
            <input
              className="radio"
              type="radio"
              name="players"
              value={2}
              onChange={() => console.log("changed 2 players")}
              checked={maxPlayers === 2}
            />
            <label htmlFor={2}>2 Players</label>
          </div>
          <div>
            <input
              className="radio"
              type="radio"
              name="players"
              value={3}
              onChange={() => console.log("changed 3 players")}
              checked={maxPlayers === 3}
            />
            <label htmlFor={3}>3 Players</label>
          </div>
          <div>
            <input
              className="radio"
              type="radio"
              name="players"
              value={4}
              onChange={() => console.log("changed 4 players")}
              checked={maxPlayers === 4}
            />
            <label htmlFor={4}>4 Players</label>
          </div>
        </fieldset>

        <hr className="divider" />

        <div id="checkboxes" className="row">
          <div>
            <label htmlFor="auto-pickup">Auto Pick-up</label>
            <input
              type="checkbox"
              name="auto-pickup"
              checked={autoPickup}
              onChange={() => setAutoPickup(!autoPickup)}
            />
          </div>
          {/* <div>
            <label htmlFor="public">Public Game</label>
            <input
              type="checkbox"
              name="public"
              checked={publicGame}
              onChange={() => setPublicGame(!publicGame)}
            />
          </div> */}
        </div>
      </div>

      <div>
        <button
          id="start-button"
          className="button-dark"
          type="button"
          onClick={handleCreateGame}
        >
          Start Game
        </button>
      </div>
      <div id="close-icon" onClick={handleCloseJoin}>
        <AiOutlineCloseCircle size={24} />
      </div>
    </div>
  );
};

export default CreateGame;

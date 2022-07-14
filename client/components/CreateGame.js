import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const CreateGame = ({ host, roomCode, handleCloseJoin }) => {
  const navigate = useNavigate();

  const [autoPickup, setAutoPickup] = useState(true);
  const [publicGame, setPublicGame] = useState(false);
  const [turnTimeout, setTurnTimeout] = useState(5);
  const [maxPlayers, setMaxPlayers] = useState(4);

  const handleCreateGame = () => {
    const game = {
      autoPickup,
      publicGame,
      turnTimeout,
      maxPlayers,
      host,
      roomCode,
    };
    console.log("Create game:", game);
    navigate(`/${roomCode}`);
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
        >
          <p>Turn Timeout</p>
          <div>
            <input
              className="radio"
              type="radio"
              name="timeout"
              value={3}
              checked={turnTimeout === 3}
            />
            <label htmlFor="3">3 Minutes</label>
          </div>
          <div>
            <input
              className="radio"
              type="radio"
              name="timeout"
              value={5}
              checked={turnTimeout === 5}
            />
            <label htmlFor="5">5 Minutes</label>
          </div>
          <div>
            <input
              className="radio"
              type="radio"
              name="timeout"
              value={10}
              checked={turnTimeout === 10}
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
          <div>
            <label htmlFor="public">Public Game</label>
            <input
              type="checkbox"
              name="public"
              checked={publicGame}
              onChange={() => setPublicGame(!publicGame)}
            />
          </div>
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

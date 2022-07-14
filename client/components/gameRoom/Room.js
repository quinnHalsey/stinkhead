import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";

const dummyPlayers = [
  { id: "1", username: "SloppyMagnolia", computerPlayer: false, turnOrder: 1 },
  { id: "2", username: "AngryPlatypus", computerPlayer: false, turnOrder: 2 },
  { id: "3", username: "[SlyNugget]", computerPlayer: true, turnOrder: 3 },
  null,
];

const dummyUser = {
  id: "1",
  username: "SloppyMagnolia",
  computerPlayer: false,
  turnOrder: 1,
};

//TODO: add logic to remove 'Waiting' players when game is started
//TODO: test to make sure usernames will fit/ create min-width for total game room
//TODO: add message to confirm reset/leave/end game buttons

const Room = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const leaveRef = useRef();
  const resetRef = useRef();

  const [confirmMessage, setConfirmMessage] = useState("");

  const handleClickLeave = () => {
    if (confirmMessage === "Leave game?") {
      //TODO: remove game/info from database if Host leaves
      // Remove player from DB/game if player leaves
      navigate("/");
    } else setConfirmMessage("Leave game?");
  };

  const handleClickReset = () => {
    if (confirmMessage === "Reset?") {
      console.log("Clicked reset!");
    } else setConfirmMessage("Reset?");
  };

  useEffect(() => {
    let ref = confirmMessage === "Leave game?" ? leaveRef : resetRef;

    const detectOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setConfirmMessage("");
      }
    };

    if (confirmMessage) {
      document.addEventListener("click", detectOutsideClick);
    }

    return () => document.removeEventListener("click", detectOutsideClick);
  }, [confirmMessage]);

  return (
    <div id="room">
      <div id="room-header">
        <div id="header-left">
          {/*TODO: replace room code with info from DB*/}
          <div id="room-code">{location.pathname.slice(1, 6)}</div>
          <div id="all-players-info">
            {dummyPlayers.map((player, idx) => {
              return (
                <div key={idx} className="player-info" id={`player${idx + 1}`}>
                  <div
                    className={player ? `player-name` : `player-name waiting`}
                  >
                    {player ? player.username : "Waiting..."}
                  </div>
                  <div className="player-order">
                    {player && player.turnOrder === 1
                      ? "HOST"
                      : `PLAYER ${idx + 1}`}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div id="buttons">
          <div id="confirm-message">{confirmMessage}</div>

          {dummyUser.turnOrder === 1 && (
            <div
              id="reset"
              ref={resetRef}
              className="icon-button"
              onClick={handleClickReset}
            >
              <GrPowerReset
                size={36}
                className={confirmMessage === "Reset?" ? "warning" : ""}
              />
            </div>
          )}
          <div
            id="end-room"
            ref={leaveRef}
            className="icon-button"
            onClick={handleClickLeave}
          >
            <AiOutlineCloseCircle
              size={36}
              className={confirmMessage === "Leave game?" ? "warning" : ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;

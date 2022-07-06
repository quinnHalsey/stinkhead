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

const Room = () => {
  return (
    <div id="room">
      <div id="room-header">
        <div id="room-code">4JXZL</div>
        {dummyPlayers.map((player, idx) => {
          return (
            <div className="player-info" id={`player${idx + 1}`}>
              <div className={player ? `player-name` : `player-name waiting`}>
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
        <div id="buttons">
          {dummyUser.turnOrder === 1 && (
            <div id="reset">
              <GrPowerReset size={36} />
            </div>
          )}
          <div>
            <AiOutlineCloseCircle size={36} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;

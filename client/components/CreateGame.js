const CreateGame = () => {
  return (
    <div id="create-form">
      <div id="room-code">
        <div id="subheading">ROOM CODE</div>
        <div>4JBYL{/*roomcode*/}</div>
      </div>
      <div id="room-options">
        <div className="column">
          <h3>Turn Timeout</h3>
          <form id="timeout">
            <div>
              <input type="radio" name="3" />
              <label htmlFor="3">3 Minutes</label>
            </div>
            <div>
              <input type="radio" name="5" />
              <label htmlFor="5">5 Minutes</label>
            </div>
            <div>
              <input type="radio" name="10" />
              <label htmlFor="10">10 Minutes</label>
            </div>
          </form>
        </div>
        <div className="column">
          <div>
            <label htmlFor="max-players">Max Players</label>
            <input type="number" max={4} min={2} />
          </div>
          <div>
            <label htmlFor="auto-pickup">Auto Pick-up</label>
            <input type="checkbox" />
          </div>
          <div>
            <label htmlFor="public">Public Game</label>
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGame;

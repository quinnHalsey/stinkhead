import StinkheadTitle from "../../public/stinkhead_title.svg";
import JoinCreate from "./JoinCreate";

const Home = () => {
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
          />
          <button type="button" className="button-light">
            Random
          </button>
        </div>
        <JoinCreate />
      </div>
    </div>
  );
};

export default Home;

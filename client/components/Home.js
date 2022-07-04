import StinkheadTitle from "../../public/stinkhead_title.svg";
import JoinCreate from "./JoinCreate";

import generateUsername from "../helpers/usernameHelpers";

const Home = () => {
  return (
    <div>
      <div id="home-wrapper">
        <div id="title">
          <StinkheadTitle />
        </div>
        <JoinCreate />
      </div>
    </div>
  );
};

export default Home;

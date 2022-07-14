import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Room from "./gameRoom/Room";
import Test from "./gameRoom/Room";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={Home()} />
        <Route exact path="/:roomCode" element={Room()} />
      </Routes>
    </>
  );
};

export default App;

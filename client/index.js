import { createRoot } from "react-dom/client";
import Home from "./components/Home";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<Home />);

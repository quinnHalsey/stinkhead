import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App history={history} />
  </BrowserRouter>
);

import "./styles/main.scss";

import AppTemplate from "./App.html";

const App = () => {
  const App = document.createElement("div");

  App.innerHTML =
    `
    <div class="top_bar">ACTIVITIES</div>

    ` + AppTemplate;

  return App;
};
export default App;

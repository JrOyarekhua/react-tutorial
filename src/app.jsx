import { createRoot } from "react-dom";
import Pet from "./pet";

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="autumn" animal="dog" breed="husky" />
    <Pet name="bronco" animal="dog" breed="husky" />
    <Pet name="gold" animal="fish" breed="gold fish" />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);

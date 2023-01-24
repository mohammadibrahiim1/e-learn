import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./Pages/Main/Main";

function App() {
  return (
    <div>
      <Router>
        {" "}
        <Main></Main>
      </Router>
    </div>
  );
}

export default App;

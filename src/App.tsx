import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/index";
import Choosing from "./pages/choosing";
import Thanks from "./pages/thanks";

function App() {
  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/choosing">
        <Choosing />
      </Route>
      <Route path="/thanks">
        <Thanks />
      </Route>
    </Router>
  );
}

export default App;

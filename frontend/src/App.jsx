import { Button } from "@chakra-ui/react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import chats from "./pages/chats";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div>
          <Route path="/" component={Home} exact />
          <Route path="/chats" component={chats} />
        </div>
      </div>
    </>
  );
}

export default App;

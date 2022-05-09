import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScreen from "./screen/MainScreen";
// import Narwhal from "../Narwhal/Narwhal";
// import Whale from "../Whale/Whale";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route exact path="/" element={<MainScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

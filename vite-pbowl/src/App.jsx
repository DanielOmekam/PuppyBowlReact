import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllPlayers from "./AllPlayers";
import SinglePlayer from "./SinglePlayer";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <h1>Puppy Bowl!</h1>
      <Nav />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/:id" element={<SinglePlayer />} />
      </Routes>
    </div>
  );
}

export default App;
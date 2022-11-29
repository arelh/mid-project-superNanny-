import "./App.css";
import { Route, Routes } from "react-router-dom";
import Parents from "./components/Parents";
import Babysitter from "./components/Babysitter";
import Homepage from "./components/Homepage ";
import Error from "./components/Error";
import Nav from "./components/Nav";

// https://6374c35a08104a9c5f8866ff.mockapi.io/superNanny

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Parents" element={<Parents />} />
        <Route path="/Babysitter" element={<Babysitter />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

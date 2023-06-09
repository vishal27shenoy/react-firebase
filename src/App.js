import logo from "./logo.svg";
import "./App.css";
import Page from "./Page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/react-firebase" element={<Page />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

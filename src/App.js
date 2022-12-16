import LandingPages from "pages/LandingPages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPages />} />
      </Routes>
    </div>
  );
}

export default App;

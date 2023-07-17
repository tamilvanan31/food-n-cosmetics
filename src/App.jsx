import NavBar from "./components/NavBar.jsx";
import Pricing from "./components/pages/Pricing.jsx";
import About from "./components/pages/About.jsx";
import Home from "./components/pages/Home.jsx";
import {Route, Routes} from "react-router-dom";

function App() {
    document.title="Food and cosmetics"
  return <>
    <NavBar />
      <div className="container">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
          </Routes>
      </div>
  </>
}

export default App

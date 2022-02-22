import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <h1>Hello Sugar!</h1>
      <BrowserRouter>
        <NavBar />
        <section>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;

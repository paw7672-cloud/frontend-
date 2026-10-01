import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

import HomePage from "./pages/HomePage";
import SecondPage from "./pages/SecondPage";
import HeartPage from "./pages/HeartPage";
import BallonPage from "./pages/BallonPage";
import Cards from "./pages/Cards";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <main className="min-h-screen bg-black">

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={<HomePage />}
          />

          {/* MEMORIES */}
          <Route
            path="/memories"
            element={<SecondPage />}
          />

          {/* MOMENTS */}
          <Route
            path="/moments"
            element={<Cards />}
          />

          {/* BIRTHDAY */}
          <Route
            path="/birthday"
            element={<BallonPage />}
          />

          {/* HEART */}
          <Route
            path="/heart"
            element={<HeartPage />}
          />

        </Routes>

      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
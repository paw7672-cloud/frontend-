import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import HomePage from "./pages/HomePage";
import SecondPage from "./pages/SecondPage";
import HeartPage from "./pages/HeartPage";
import BallonPage from "./pages/BallonPage";
import Moments from "./pages/Moments";
import Last from "./pages/Last";
import Beautiful from "./pages/Beautiful";
import Favourit from "./pages/Favourit";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Normal Home */}
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <SecondPage />
              <HeartPage />
              <BallonPage />
              <Last/>
            </>
          }
        />

        {/* ONLY MOMENTS HAS ITS OWN ROUTE */}
        <Route
          path="/moments"
          element={<Moments />}
        />
      <Route
  path="/beautiful"
  element={<Beautiful />}
/>

        {/* Optional Last page */}
        <Route
          path="/last"
          element={<Last />}
        />

 <Route
          path="/favourit"
          element={<Favourit />}
        />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
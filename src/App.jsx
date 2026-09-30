import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Footer from "./component/Footer";

import HomePage from "./pages/HomePage";
import SecondPage from "./pages/SecondPage";
import HeartPage from "./pages/HeartPage";
import BallonPage from "./pages/BallonPage";
import Cards from "./pages/Cards";
import Last from "./pages/Last";



function App() {
  return (
    <BrowserRouter>

      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar />
      <HomePage />
<SecondPage />
<HeartPage />
<BallonPage />
<Cards />
<LastImage/>


      {/* =========================
          ROUTES
      ========================= */}

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


          {/* CONTACT */}

          

        </Routes>

      </main>


      {/* =========================
          FOOTER
      ========================= */}

      <Footer />

    </BrowserRouter>
  );
}


export default App;
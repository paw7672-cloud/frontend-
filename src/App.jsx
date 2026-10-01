import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Footer from "./component/footer";

import HomePage from "./pages/homePage";
import SecondPage from "./pages/secondPage";
import HeartPage from "./pages/heartPage";
import BallonPage from "./pages/ballonPage";
import Cards from "./pages/Cards";
import Navbar from "./component/navbar";



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
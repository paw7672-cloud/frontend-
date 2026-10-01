import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import HomePage from "./pages/HomePage";
import SecondPage from "./pages/SecondPage";
import HeartPage from "./pages/HeartPage";
import BallonPage from "./pages/BallonPage";
import Cards from "./pages/Cards";
import Last from "./pages/Last";

function App() {
  return (
    <div className="min-h-screen bg-black">

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= ALL PAGES ================= */}

      <HomePage />

      <SecondPage />

      <HeartPage />

      <BallonPage />

      <Cards />

      <Last />

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
}

export default App;
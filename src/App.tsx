import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import BasketProvider from "./context/BasketContext";

function App() {
  return (
    <BasketProvider>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </div>
      </Router>
    </BasketProvider>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import Header from "./Components/Header/Header";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          position: "fixed",
          zIndex: "1",
          width: "100%",
        }}
      >
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

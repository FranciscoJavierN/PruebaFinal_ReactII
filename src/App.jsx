import { BrowserRouter, Routes, Route } from "react-router-dom";
import PizzasProvider from "./context/PizzaProvider";
import Navmenu from "./components/Navmenu";
import Home from "./views/Home";
import Carrito from "./views/Carrito";
import Detalle from "./views/Detalle";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <PizzasProvider>
            <Navmenu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pizza/:id" element={<Detalle />} />
              <Route path="/carrito" element={<Carrito />} />
            </Routes>
          </PizzasProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
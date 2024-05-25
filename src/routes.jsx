import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/App";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} index />
      {/* {<Route path="endereço na url" element={<Nome da imagem (obs: importe ali em cima) />} (sem index, pois index é a pagina que vai iniciar quando der start no site) />} */}
    </Routes>
  );
}

export default MainRouter;

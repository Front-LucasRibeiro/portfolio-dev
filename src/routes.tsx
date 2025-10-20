import { Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio/Portfolio";
import SobreMim from "./pages/SobreMim";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/sobre-mim" element={<SobreMim />} />
    </Routes>
  );
}

export default Router;

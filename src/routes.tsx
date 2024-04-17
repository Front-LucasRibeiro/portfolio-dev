import { Route, Routes } from 'react-router-dom';
import SobreMim from './pages/SobreMim';
import Portfolio from './pages/Portfolio';


function Router() {

  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/sobre-mim" element={<SobreMim />} />
    </Routes>
  )
}

export default Router;
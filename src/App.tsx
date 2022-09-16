import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import './scss/app.scss';
import FullLaptop from './pages/FullLaptop';
import HeaderTemplate from './layouts/HeaderTemplate';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeaderTemplate />}>
        <Route path="" element={<Home />} />
        <Route path="laptop/:id" element={<FullLaptop />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

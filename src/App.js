import './style.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Products from './components/Products';
import Cart from './components/Cart';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
  );
}

export default App;

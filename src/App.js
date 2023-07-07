// import logo from './logo.svg';
import './App.css';
import ProductList from './Component/ProductList';
import Header from './Component/Header';
import ProdectDetails from './Component/ProdectDetails';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="productdetails/:id" element={<ProdectDetails />} />
      </Routes>

    </>
  );
}

export default App;
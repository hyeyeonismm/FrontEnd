import { Routes, Route } from 'react-router-dom';
import Category from '../Stock/Category';
import Stock from './Stock';
import StockList from './StockList';
import StockInformation from './StockInformation';

function StockApp() {
  return (
    <Routes>
      <Route path="/" element={<Stock />} />
      <Route path="/category" element={<Category />} />
      <Route path="/stocklist" element={<StockList />} />
      <Route path="/information" element={<StockInformation />} />
    </Routes>
  );
}

export default StockApp;

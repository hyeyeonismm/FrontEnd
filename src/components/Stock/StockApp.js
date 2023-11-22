import { Routes, Route } from 'react-router-dom';
import StockCategory from '../Stock/StockCategory';
import StockMain from './StockMain';
import StockInformation from './StockInformation';
function StockApp() {
	return (
		<Routes>
			<Route path='/' element={<StockMain />} />
			<Route path='/category' element={<StockCategory />} />
			<Route path='/information' element={<StockInformation />} />
		</Routes>
	);
}

export default StockApp;

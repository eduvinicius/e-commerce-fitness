import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/Main';
import Sup from './pages/Main/Sup';
import Equips from './pages/Main/Equips';
import Antrop from './pages/Main/Antrop';
import MyCart from './pages/MyCart';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<Sup />} />
        <Route path='/equips' element={<Equips />} />
        <Route path='/ant' element={<Antrop />} />
      </Route>
      <Route path='cart' element={<MyCart />} />
    </Routes>
  )
}

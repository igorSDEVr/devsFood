import { Routes, Route } from "react-router-dom";
import { HomeScreen } from './pages/HomeScreen';
import { Tela2Screen } from './pages/Tela2Screen';

import { PrivateRoute } from './components/PrivateRoute';

export const RoutesComp = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />}/>
      <Route path='/login' element={<Tela2Screen />}/>
      <Route path='/profile' element={<PrivateRoute><HomeScreen /></PrivateRoute>} />
    </Routes>
  );
};
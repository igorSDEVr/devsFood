import { Routes, Route } from "react-router-dom";
import { HomeScreen } from './pages/HomeScreen';
import { PrivateScreen } from './pages/PrivateScreen';
import { LoginScreen } from "./pages/LoginScreen";
import { PrivateRoute } from './components/PrivateRoute';

export const RoutesComp = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />}/>
      <Route path='/profile' element={<PrivateRoute><PrivateScreen /></PrivateRoute>}/>
      <Route path='/login' element={<LoginScreen />} />
    </Routes>
  );
};
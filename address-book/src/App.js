import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<><Login /></>}> </Route>
      <Route path='/Register' element={<><Register /></>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

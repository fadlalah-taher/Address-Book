import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Contacts from './pages/Contacts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<><Login /></>}> </Route>
      <Route path='/Register' element={<><Register /></>}> </Route>
      <Route path='/Contacts' element={<><Contacts /></>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

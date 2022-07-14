import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Contacts from './pages/Contacts';
import AddContact from './pages/AddContact';
import Contact from './components/Contact';
import UpdateContact from './pages/UpdateContact';
import Map from './components/Map';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<><Login /></>}> </Route>
      <Route path='/Register' element={<><Register /></>}> </Route>
      <Route path='/Contacts' element={<><Contacts /></>}> </Route>
      <Route path='/UpdateContact' element={<><UpdateContact /></>}> </Route>
      <Route path='/AddContact' element={<><AddContact /></>}> </Route>
      <Route path='/Contact' element={<><Contact /></>}> </Route>
      <Route path='/Map' element={<><Map /></>}> </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import List from './Pages/List/List';
import Hotels from './Pages/Hotels/Hotels';
import Login from './Pages/Login/Login';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/hotel' element={<List/>}/>
          <Route path='/hotel/:id' element={<Hotels/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App;

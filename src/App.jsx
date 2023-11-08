import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import List from './Pages/List/List';
import Hotels from './Pages/Hotels/Hotels';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/hotel' element={<List/>}/>
          <Route path='/hotel/:id' element={<Hotels/>}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App;

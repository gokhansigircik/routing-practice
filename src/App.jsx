import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Number from './components/Number'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/:number' element={<Number/>}/>
        <Route path='/:number/:bcolor' element={<Number/>}/>
        <Route path='/:number/:bcolor/:tcolor' element={<Number/>}/>
      </Routes>
    </div>
  );
}

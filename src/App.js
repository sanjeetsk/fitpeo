import './App.css';
import Dashboard from './pages/Dashboard';
import OtherPage from './pages/OtherPage';
import Navbar from  './component/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='*' element={<OtherPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

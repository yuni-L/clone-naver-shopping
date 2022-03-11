import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home'
import ForYou from './pages/ForYou/ForYou'
import Header from './Layouts/Header/Header'

import './App.css';


function App() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="/foryou" element={<ForYou />} />
      </Route>
    </Routes>
  );
}

export default App;

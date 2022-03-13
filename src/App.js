import { Route, Routes } from 'react-router-dom';

import Layout from './pages/Layout'
import Home from './pages/Home/Home'
import ForYou from './pages/ForYou/ForYou'

import './App.css';


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/foryou" element={<ForYou />} />
      </Route>
    </Routes>
  );
}

export default App;

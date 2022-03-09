import logo from './logo.svg';
import './App.css';
import Gnb from './layout/gnb/gnb';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import ForYou from './pages/ForYou/ForYou'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/foryou" element={<ForYou />} />
    </Routes>
    // <div className="App">
    //   <Gnb />
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

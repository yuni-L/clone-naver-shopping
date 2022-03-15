import React from 'react';
import { Link } from 'react-router-dom';

import Slider from '../../components/Slider/Slider'

const Home = () => {
  return (
    <div>
      <Slider />
      <Link to="/foryou">FOR YOU</Link>
    </div>
  );
};

export default Home;
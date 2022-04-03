import React from 'react';
import { Link } from 'react-router-dom';

import Slider from '../../components/Slider/Slider'
import RecentGoods from '../../components/RecentGoods/RecentGoods'

const Home = () => {
  return (
    <div>
      <Slider />
      <RecentGoods />
      <Link to="/foryou">FOR YOU</Link>
    </div>
  );
};

export default Home;
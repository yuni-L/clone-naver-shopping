import React from 'react';
import { Link } from 'react-router-dom';

import Slider from '../../components/Slider/Slider'
import RecentGoods from '../../components/RecentGoods/RecentGoods'
import SlideBanner from '../../components/SlideBanner/SlideBanner'

const Home = () => {
  return (
    <div>
      <Slider />
      <SlideBanner />
      <RecentGoods />
      <Link to="/foryou">FOR YOU</Link>
    </div>
  );
};

export default Home;
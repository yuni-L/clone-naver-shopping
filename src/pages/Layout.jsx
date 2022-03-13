import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Layouts/Header/Header'

const index = () => {
  return (<>
    <Header />
    <main>
      <Outlet />
    </main>
  </>);
}

export default index;
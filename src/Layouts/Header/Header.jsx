import React from 'react';
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header>헤더가 될 부분</header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Header;
import React from 'react';
import { Outlet } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <div>
      <header className='header'>
      {/* header-main start */}
        <div className='header-main'>
          <div className='header-main-menu'>
            <span className='logo'>네이버 쇼핑 따라하기</span>
            <span className='material-icons-round'>menu</span>
          </div>
          <div className='header-main-input'>
            <input placeholder='상품검색'></input>
            <span className='material-icons-outlined'>camera_alt</span>
          </div>
        </div>
        {/* header-main end */}
        <div className='header-sub'></div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Header;
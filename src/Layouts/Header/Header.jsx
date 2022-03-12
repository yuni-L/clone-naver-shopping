import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import './Header.scss';

const SUB_MENU = [
  {name: '홈', href: ''},
  {name: 'FOR YOU', href: 'foryou'},
  {name: '원플딜', href: 'foryou'},
  {name: '벡화점윈도', href: 'foryou'},
  {name: '아울렛윈도', href: 'foryou'},
  {name: '스타일윈도', href: 'foryou'},
  {name: '디자이너윈도', href: 'foryou'},
  {name: '뷰티윈도', href: 'foryou'},
  {name: '럭셔리', href: 'foryou'},
  {name: '리빙윈도', href: 'foryou'},
  {name: '푸드윈도', href: 'foryou'},
  {name: '장보기', href: 'foryou'},
  {name: '키즈윈도', href: 'foryou'},
  {name: '펫윈도', href: 'foryou'},
  {name: '플레이윈도', href: 'foryou'},
  {name: '아트윈도', href: 'foryou'},
  {name: '핫딜', href: 'foryou'},
  {name: '핫딜2', href: 'foryou'},
  {name: '핫딜3', href: 'foryou'},
  {name: '핫딜4', href: 'foryou'},
  {name: '핫딜5', href: 'foryou'},
  {name: '핫딜6', href: 'foryou'},
  {name: '핫딜7', href: 'foryou'},
]

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
        <div className='header-sub'>
          <div className='header-sub-scroll'>
            <ul>
              {SUB_MENU.map((menu, index) => (
                  <li key={index}>
                    <Link to={'/' + menu.href}>{menu.name}</Link>
                  </li>
              ))}
            </ul>
          </div>
          <span className='header-sub-arrow material-icons'>keyboard_arrow_down</span>
          {/* <span className='material-icons'>keyboard_arrow_up</span> */}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Header;
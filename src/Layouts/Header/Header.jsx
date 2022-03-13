import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const SUB_MENU = [
  {name: '홈', href: '/'},
  {name: 'FOR YOU', href: '/foryou'},
  {name: '원플딜', href: '/foryou1'},
  {name: '벡화점윈도', href: '/foryou1'},
  {name: '아울렛윈도', href: '/foryou1'},
  {name: '스타일윈도', href: '/foryou1'},
  {name: '디자이너윈도', href: '/foryou1'},
  {name: '뷰티윈도', href: '/foryou1'},
  {name: '럭셔리', href: '/foryou1'},
  {name: '리빙윈도', href: '/foryou1'},
  {name: '푸드윈도', href: '/foryou1'},
  {name: '장보기', href: '/foryou1'},
  {name: '키즈윈도', href: '/foryou1'},
  {name: '펫윈도', href: '/foryou1'},
  {name: '플레이윈도', href: '/foryou1'},
  {name: '아트윈도', href: '/foryou1'},
  {name: '핫딜', href: '/foryou1'},
  {name: '핫딜2', href: '/foryou1'},
  {name: '핫딜3', href: '/foryou1'},
  {name: '핫딜4', href: '/foryou1'},
  {name: '핫딜5', href: '/foryou1'},
  {name: '핫딜6', href: '/foryou1'},
  {name: '핫딜7', href: '/foryou1'},
]

const Header = () => {
  const [pathName, setPathName] = useState(null);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  
  useEffect(() => {
    setSubMenuActive(window.location.pathname);
  }, []);

  const setSubMenuActive = (pathname) => {
    setPathName(pathname);
  }

  const openMenu = () => {
    if (!isOpenMenu) {
      document.querySelector('.header-sub-scroll').style.display = 'none';
      document.querySelector('.header-sub-service').style.display = 'block';
    } else {
      document.querySelector('.header-sub-scroll').style.display = 'block';
      document.querySelector('.header-sub-service').style.display = 'none';
    }
    setIsOpenMenu(!isOpenMenu);
  }

  return (
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
      {/* header-sub start */}
      <div className='header-sub'>
        <div className='header-sub-scroll'>
          <ul>
            {SUB_MENU.map((menu, index) => (
                <li key={index} className={pathName === menu.href ? 'isActive' : null}>
                  <Link to={menu.href} onClick={() => {setSubMenuActive(menu.href)}}>{menu.name}</Link>
                </li>
            ))}
          </ul>
        </div>
        <div className='header-sub-service'>
          <span>서비스 바로가기</span>
          <div className='header-sub-service-menus'>
            <ul>
              {SUB_MENU.map((menu, index) => (
                <li key={'menu' + index}>
                  <Link to={menu.href} className={pathName === menu.href ? 'isActive' : null} onClick={() => {setSubMenuActive(menu.href); openMenu();}}>
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <span className='header-sub-arrow material-icons' onClick={() => {openMenu()}}>
          { isOpenMenu ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }
        </span>
      </div>
      {/* header-main sub */}
    </header>
  )
}

export default Header;
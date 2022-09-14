import { useState } from 'react';

import Logo from '../Logo/Logo';

import './Header.scss';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function openMenu() {
    const bodyEl = document.querySelector('.root');

    if (bodyEl.classList.contains('overflow')) {
      bodyEl.classList.remove('overflow');
    } else {
      bodyEl.classList.add('overflow');
    }

    setMenuOpen(!isMenuOpen);
  }

  const headerLink = (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item">
          <a
            href="#"
            className="
              header__nav-link
              header__nav-link_active"
          >
            Бизнес
          </a>
        </li>
        <li className="header__nav-item">
          <a href="#" className="header__nav-link">
            О нас
          </a>
        </li>
        <li className="header__nav-item">
          <a href="#" className="header__nav-link">
            Цены
          </a>
        </li>
        <li className="header__nav-item">
          <a href="#" className="header__nav-link">
            Оформить заказ
          </a>
        </li>
      </ul>
    </nav>
  );

  const headerMenu = (
    <div className={`header__menu ${isMenuOpen ? 'header__menu_show' : ''}`}>
      <button
        className="header__menu-button header__menu-button_close"
        onClick={openMenu}
        type="button"
      />

      {headerLink}
    </div>
  );

  return (
    <>
      <header className="header">
        <div className="container header__wrapper">
          <a className="header__logo" href="#" aria-label="На главную">
            <Logo />
          </a>

          <button
            className="header__menu-button"
            onClick={openMenu}
            type="button"
          />

          {!isMenuOpen && headerLink}
        </div>
      </header>

      {isMenuOpen && headerMenu}
    </>
  );
}

export default Header;

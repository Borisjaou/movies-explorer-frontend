import React from 'react';
import './Navigation.css';


function Navigation() {
  return (
    <section className='navigation'>
      <a href='' className='navigation__menu-button'>
        <spun className=''></spun>
      </a>
      <nav className='navigation__menu'>
        <a href='' className='navigation__menu-list'>Главная</a>
        <a href='' className='navigation__menu-list'>Фильмы</a>
        <a href='' className='navigation__menu-list'>Сохранённые</a>
      </nav>
      <div className='navigation__menu-overlay'></div>
    </section>

    /*     <section >
          <div class="burger-menu">
            <a href="" class="burger-menu_button">
              <spun class="burger-menu_lines"></spun>
            </a>
            <nav class="burger-menu_nav">
              <a href="#section-1" class="burger-menu_link">Секция 1</a>
              <a href="#section-2" class="burger-menu_link">Секция 2</a>
              <a href="#section-3" class="burger-menu_link">Секция 3</a>
              <a href="#section-4" class="burger-menu_link">Секция 4</a>
              <a href="#section-5" class="burger-menu_link">Секция 5</a>
            </nav>
            <div class="burger-menu_overlay"></div>
          </div>


        </section> */
  );
}
export default Navigation;


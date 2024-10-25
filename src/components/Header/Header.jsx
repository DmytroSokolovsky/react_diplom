import { useContext } from "react";
import { Link, NavLink } from "react-router-dom"
import { UserIdContext } from "../../context/context";
import s from './Header.module.scss'
import cn from 'classnames'

const Header = ({isMenuOpen, setIsMenuOpen}) => {
  const userId = useContext(UserIdContext);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  let menuClass = cn(s.header__menu, s.menu, {
    [s.active]: isMenuOpen,
    [s.active_browser]: !userId,
  });
  let burgerClass = cn(s.header__burger, {
    [s.active]: isMenuOpen,
    [s.browser]: !userId,
  });
  let linkClass = cn(s.menu__link, s.menu__link_active);

  let headerClass = cn(s.header, {
    [s.browser]: !userId,
  });

  return (
    <>
    <header className={!userId ? headerClass : s.header} role="banner">
      <div className={s.header__body}>
        <Link 
          to={`/doctors`} 
          className={s.header__logo} 
          aria-label="Перейти на головну сторінку"
        >
          <img 
            src={'https://www.amelsmart.com/wp-content/themes/ameldental/assets/img/main-header/sloganlogo.svg'} 
            alt="Логотип клініки"
            loading="lazy"
          />
        </Link>
        <div 
          className={burgerClass} 
          onClick={toggleMenu} 
          role="button" 
          tabIndex={0} 
          aria-label="Відкрити/закрити меню"
          onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={menuClass} aria-label="Основне меню">
          <ul className={s.menu__list}>
            <li onClick={closeMenu}>
              <NavLink
                to="/doctors"
                className={({ isActive }) =>
                  isActive ? linkClass : s.menu__link
                }
              >
                Наші лікарі
              </NavLink>
            </li> 
            <li onClick={closeMenu}>
              <NavLink
                to="/registration"
                className={({ isActive }) =>
                  isActive ? linkClass : s.menu__link
                }
              >
                Запис
              </NavLink>
            </li>
            {userId && (
              <li onClick={closeMenu}>
                <NavLink
                  to="/records"
                  className={({ isActive }) =>
                    isActive ? linkClass : s.menu__link
                  }
                >
                  Мої записи
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div> 
    </header>

    </>
  )
}

export default Header
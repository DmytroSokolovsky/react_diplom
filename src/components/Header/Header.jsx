// Імпорт необхідних модулів і бібліотек
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom"
import { UserIdContext } from "../../context/context";
import s from './Header.module.scss'
import cn from 'classnames'

// Компонент Header приймає пропси isMenuOpen та setIsMenuOpen
const Header = ({isMenuOpen, setIsMenuOpen, testUserId}) => {
  // Отримуємо userId з контексту UserIdContext
  // const userId = useContext(UserIdContext);

  // Функція для переключення стану меню
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Функція для закриття меню
  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  // Визначаємо класи для меню з урахуванням стану меню та наявності userId
  let menuClass = cn(s.header__menu, s.menu, {
    [s.active]: isMenuOpen,
    [s.active_browser]: !testUserId,
  });
  
  // Визначаємо класи для бургер-іконки
  let burgerClass = cn(s.header__burger, {
    [s.active]: isMenuOpen,
    [s.browser]: !testUserId,
  });

  // Визначаємо класи для шапки з урахуванням наявності userId
  let headerClass = cn(s.header, {
    [s.browser]: !testUserId,
  });

  // Визначаємо класи для активного посилання в меню
  let linkClass = cn(s.menu__link, s.menu__link_active);

  return (
    <>
    {/* Шапка сайту, додатково враховується наявність userId */}
    <header className={!testUserId ? headerClass : s.header} role="banner">
      <div className={s.header__body}>
        {/* Лого з посиланням на головну сторінку */}
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
        {/* Бургер-іконка для відкриття/закриття меню */}
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
        {/* Основне меню */}
        <nav className={menuClass} aria-label="Основне меню">
          <ul className={s.menu__list}>
            {/* Пункт меню з посиланням на сторінку лікарів */}
            <li onClick={closeMenu}>
              <NavLink
                to="/doctors"
                className={({ isActive }) =>
                  isActive ? linkClass : s.menu__link
                }
              >
                Наші лікарі userId: {testUserId}
              </NavLink>
            </li> 
            {/* Пункт меню з посиланням на сторінку запису */}
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
            {/* Додається пункт меню "Мої записи" за наявності userId */}
            {testUserId && (
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

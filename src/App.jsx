// Імпорт необхідних модулів і бібліотек
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header'; 
import './App.scss'; 
import s from './App.module.scss'; 
import { lazy, Suspense, useState, useEffect, useContext } from "react";
import Preloader from "./components/Preloader/Preloader";
import Footer from "./components/Footer/Footer";
import { UserIdContext } from "./context/context";

// Лазливо імпортуються компоненти для оптимізації завантаження
const Doctors = lazy(() => import('./components/Doctors/Doctors/Doctors'));
const DoctorDetails = lazy(() => import('./components/Doctors/DoctorDetails/DoctorDetails'));
const Registration = lazy(() => import('./components/Registration/Registration'));
const Records = lazy(() => import('./components/Records/Records'));
const Error = lazy(() => import('./components/Error/Error'));

const App = ({testUserId}) => {
  // Стан для відкриття/закриття меню
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  // Отримується userId з контексту
  const userId = useContext(UserIdContext);

  // Використовується для блокування прокрутки при відкритті меню
  useEffect(() => {
    if (isMenuOpen) {
      // Додається клас блокування прокрутки
      document.body.classList.add('lock');
    } else {
      // Видаляється клас при закритті меню
      document.body.classList.remove('lock');
    }
  }, [isMenuOpen]);

  // Використовується для зміни класу body в залежності від наявності userId
  useEffect(() => {
    if (!userId) {
      // Додається клас для браузера, якщо userId немає
      document.body.classList.add('browser');
    } else {
      // Видаляється клас, якщо userId є
      document.body.classList.remove('browser');
    }
  }, [userId]);

  return (
    <HashRouter>
      <div className={s.wrapper}>
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} testUserId={testUserId}/>
          <main className={s.main}>
            <div className={s.container}>
              {/* Відображається прелоадер під час завантаження компонентів */}
              <Suspense fallback={<Preloader />}>
                {/* Визначаються маршрути для навігації */}
                <Routes>
                  <Route path="/" element={<Navigate to={'/doctors'} />} />
                  <Route path="/doctors" element={<Doctors/>} />
                  <Route path="/doctors/:doctorId" element={<DoctorDetails />} />
                  <Route path="/registration" element={<Registration/>} />
                  <Route path="/records" element={<Records/>} />
                  <Route path="*" element={<Error />} />
                </Routes>
              </Suspense>
            </div>
          </main>
          <Footer/>
      </div>
    </HashRouter>
  )
}

export default App; // Експортується компонент App















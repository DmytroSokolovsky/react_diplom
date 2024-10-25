import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Header from './components/Header/Header';
import './App.scss'
import s from './App.module.scss'
import { lazy, Suspense, useState, useEffect, useContext } from "react";
import Preloader from "./components/Preloader/Preloader";
import Footer from "./components/Footer/Footer";
import { UserIdContext } from "./context/context";

const Doctors = lazy(() => import('./components/Doctors/Doctors/Doctors'));
const DoctorDetails = lazy(() => import('./components/Doctors/DoctorDetails/DoctorDetails'));
const Registration = lazy(() => import('./components/Registration/Registration'));
const Records = lazy(() => import('./components/Records/Records'));
const Error = lazy(() => import('./components/Error/Error'));

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userId = useContext(UserIdContext);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('lock');
    } else {
      document.body.classList.remove('lock');
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (!userId) {
      document.body.classList.add('browser');
    } else {
      document.body.classList.remove('browser');
    }
  }, [userId]);

  return (
    <BrowserRouter>
      <div className={s.wrapper}>
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
          <main className={s.main}>
            <div className={s.container}>
              <Suspense fallback={<Preloader />}>
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
    </BrowserRouter>
  )
}

export default App














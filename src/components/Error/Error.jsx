import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Error.module.scss'
import cn from 'classnames'
import { UserIdContext } from '../../context/context';

const Error = () => {
  const [seconds, setSeconds] = useState(5)

  const userId = useContext(UserIdContext);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    }

  }, [navigate]);

  let errorClass = cn(s.error, {
    [s.browser]: !userId,
  });

  return (
    <div 
      className={errorClass}
      role="alert"
      aria-live="assertive"
      tabIndex="0"
    >
    Такої сторінки не існує. Через&nbsp;<span aria-live="polite">{seconds}</span>&nbsp;секунд ви будете перенаправлені на головну...
  </div>
  )
};

export default Error;
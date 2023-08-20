import { useState, useEffect } from 'react';
import { calculateTimeLeft } from '../helpers/calculateTimeLeft';

const useExpirationDate = (endDate) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endDate));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [endDate]);

  return timeLeft;
};

export default useExpirationDate;

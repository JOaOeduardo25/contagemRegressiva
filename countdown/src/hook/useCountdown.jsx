import { useState, useEffect } from "react";

const useCountdown = (targetDate) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      return { days: 0, hours: '00', minutes: '00', seconds: '00' };
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
      const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
      return { days, hours, minutes, seconds };
    }
  };

  const [countdown, setCountdown] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return countdown;
};

export default useCountdown;



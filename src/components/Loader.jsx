import React, { useState, useEffect } from 'react';

export default function Loader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 15) + 10;
      if (current >= 100) {
        current = 100;
        setPercent(100);
        clearInterval(interval);
        setTimeout(() => {
          setFade(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 500);
        }, 200);
      } else {
        setPercent(current);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`loader ${fade ? 'hidden' : ''}`} aria-hidden="true">
      <div className="loader-inner">
        <span className="loader-logo">NA</span>
        <div className="loader-bar">
          <span className="loader-bar-fill" style={{ width: `${percent}%` }}></span>
        </div>
        <span className="loader-percent">{percent}%</span>
      </div>
    </div>
  );
}

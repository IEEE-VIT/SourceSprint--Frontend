import React, { useState, useEffect } from "react";
import "./timer.css";

const Timer = () => {
  // Target event countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 8,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const targetDate = new Date().getTime() + 14 * 24 * 60 * 60 * 1000 + 8 * 3600 * 1000 + 42 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <div className="timer-container" id="timer">
      <div className="timer-wrapper">
        <span className="timer-badge">EVENT COUNTDOWN</span>
        <h2 className="timer-heading">SPRINT STARTS IN</h2>
        <div className="timer-boxes">
          <div className="timer-box">
            <span className="timer-number">{formatNumber(timeLeft.days)}</span>
            <span className="timer-label">DAYS</span>
          </div>
          <span className="timer-colon">:</span>
          <div className="timer-box">
            <span className="timer-number">{formatNumber(timeLeft.hours)}</span>
            <span className="timer-label">HOURS</span>
          </div>
          <span className="timer-colon">:</span>
          <div className="timer-box">
            <span className="timer-number">{formatNumber(timeLeft.minutes)}</span>
            <span className="timer-label">MINUTES</span>
          </div>
          <span className="timer-colon">:</span>
          <div className="timer-box">
            <span className="timer-number">{formatNumber(timeLeft.seconds)}</span>
            <span className="timer-label">SECONDS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;

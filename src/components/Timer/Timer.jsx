import React, { useState, useEffect } from "react";
import "./timer.css";

// Real event start: Monday, 14 September 2026, 09:00 IST (+05:30).
// Change this one line if the start time moves. Once this moment passes the
// countdown hides itself (the event is live).
const EVENT_START = new Date("2026-09-14T09:00:00+05:30").getTime();

const getRemaining = () => {
  const difference = EVENT_START - Date.now();
  if (difference <= 0) return null; // event has started -> hide the timer
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
};

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(getRemaining);

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = getRemaining();
      setTimeLeft(remaining);
      if (!remaining) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Event is live (or over): don't render the countdown at all.
  if (!timeLeft) return null;

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

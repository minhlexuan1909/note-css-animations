import React, { useState, useEffect, useRef } from "react";
import "./ProgressBarCircle1.scss";

const ProgressBarCircle1 = () => {
  //Wanna change the percentages? Change dataDone
  const [dataDone, setDataDone] = useState(50);
  const [count, setCount] = useState(0);
  const circleAnim = useRef();
  useEffect(() => {
    if (count < dataDone) {
      let timer = setTimeout(() => {
        setCount(count + 1);
      }, 0.5 / dataDone);
      return () => clearTimeout(timer);
    }
  }, [count]);

  useEffect(() => {
    const circumference = Math.PI * 2 * circleAnim.current.getAttribute("r");
    circleAnim.current.style.strokeDashoffset =
      (circumference * (100 - dataDone)) / 100;
    circleAnim.current.style.strokeDasharray = circumference;
  }, [dataDone]);
  return (
    <div className="progress-bar-circle-1">
      <h3>Circular progress bar (progress-bar-circle-1)</h3>
      <div className="skill">
        <div className="outer">
          <div className="inner">
            <div className="number">{count}%</div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#0f0" />
              <stop offset="100%" stopColor="#7f7" />
            </linearGradient>
          </defs>
          <circle
            ref={circleAnim}
            cx="80"
            cy="80"
            r="70"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProgressBarCircle1;

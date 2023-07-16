import React, { useState, useEffect, useRef } from "react";
import "./ProgressBarLine2.scss";

const ProgressBarLine2 = () => {
  const [dataDone, setDataDone] = useState(0);
  const progresBarDone = useRef();
  useEffect(() => {
    setDataDone(progresBarDone.current.getAttribute("data-done"));
    progresBarDone.current.style.width = dataDone + "%";
    progresBarDone.current.style.opacity = 1;
    progresBarDone.current.setAttribute("data-after", dataDone + "%");
  }, [dataDone]);
  return (
    <div className="progress-bar-line-2">
      <h3>Simple progress bar ... (progress-bar-line-2)</h3>
      <div className="progress-bar">
        <div
          ref={progresBarDone}
          className="progress-bar-done"
          data-done="40"
          data-after=""
        ></div>
      </div>
    </div>
  );
};

export default ProgressBarLine2;

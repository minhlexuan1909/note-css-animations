import React, { useRef, useEffect, useState } from "react";
import "./ProgressBarLine1.scss";

const ProgressBarLine1 = () => {
  const progressDoneBar = useRef();
  const [dataDone, setDataDone] = useState(0);
  useEffect(() => {
    setDataDone(progressDoneBar.current.getAttribute("data-done"));
    progressDoneBar.current.style.width = dataDone + "%";
    progressDoneBar.current.style.opacity = 1;
  }, [dataDone]);
  return (
    <div className="progress-bar-line-1">
      <h3>Just simple progress bar (progres-bar-line-1)</h3>
      <div className="progress">
        <div ref={progressDoneBar} className="progress-done" data-done="40">
          {dataDone + "%"}
        </div>
      </div>
    </div>
  );
};

export default ProgressBarLine1;

import { useState } from "react";

const Launch: React.FC<{ onLaunch: () => void }> = ({ onLaunch }) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <div id="doit">
      <div id="launch">
        <div className="pt-4">
          <h1 className="contents">standup</h1>
        </div>
        <div className="pt-4">
          <h4 className="contents">and more,</h4>
        </div>
        <div className="pt-4">
          <h2 className="contents">but less boring</h2>
        </div>
        <button
          className={`block m-auto mt-4 brb ${isPressed ? "pressed" : ""}`}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => {
            onLaunch();
            setTimeout(() => setIsPressed(false), 100);
          }}
        >
          <span>Do it live!</span>
        </button>
      </div>
    </div>
  );
};

export default Launch;

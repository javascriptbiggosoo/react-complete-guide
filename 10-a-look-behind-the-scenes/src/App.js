import React, { useCallback, useState } from "react";

import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("App RUNNING");

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShow) => {
        return !prevShow;
      });
    }
  }, [allowToggle]);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}></DemoOutput>
      <Button onClick={allowToggleHandler}>토글 활성화</Button>
      <Button onClick={toggleParagraphHandler}>토글!</Button>
    </div>
  );
}

export default App;

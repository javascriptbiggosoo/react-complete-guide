import React from "react";

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING");
  return <p>{props.show ? "새로 생김!" : ""}</p>;
};

export default React.memo(DemoOutput);

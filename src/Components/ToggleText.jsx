import { useState } from "react";
import { Fragment } from "react";

const ToggleText = () => {
  const [visible, setToBeVisible] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setToBeVisible(!visible);
        }}
      >
        {visible ? "Hide" : "Show"} Text
      </button>
      {visible && <h1>Hello World</h1>}
    </>
  );
};

export default ToggleText;

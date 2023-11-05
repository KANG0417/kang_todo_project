import React from "react";

function AddCardButton({ clickAddFunc }) {
  return (
    <button type="submit" className="input-btn" onClick={clickAddFunc}>
      추가하기
    </button>
  );
}

export default AddCardButton;

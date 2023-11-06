import React from "react";

function RemoveCardButton({ clickRemoveFunc, data }) {
  return (
    <button
      type="submit"
      className="input-done-btn"
      onClick={() => clickRemoveFunc(data.id)}
    >
      지우기
    </button>
  );
}

export default RemoveCardButton;

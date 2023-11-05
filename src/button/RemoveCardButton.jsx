import React from "react";

function RemoveCardButton({ clickRemoveFunc, data }) {
  return (
    <button
      type="submit"
      className="input-del-btn"
      onClick={() => clickRemoveFunc(data.id)}
    >
      삭제하기
    </button>
  );
}

export default RemoveCardButton;

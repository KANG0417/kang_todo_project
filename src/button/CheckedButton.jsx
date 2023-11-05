import React from "react";

function CheckedButton({ clickCheckedFunc, data }) {
  return (
    <button
      type="submit"
      className="input-done-btn"
      onClick={() => clickCheckedFunc(data.id)}
    >
      {data.isDone ? "취소" : "완료"}
    </button>
  );
}

export default CheckedButton;

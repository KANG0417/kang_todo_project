import React, { useState } from "react";
import moment from "moment";
import "../css/Main.css";
import AddCardButton from "../button/AddCardButton";
import RemoveCardButton from "../button/RemoveCardButton";
import CheckedButton from "../button/CheckedButton";

const Main = () => {
  const [queryTitle, setQueryTitle] = useState("");
  const [queryContent, setqueryContent] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("working")) || []
  );
  const working = todos.filter((data) => !data.isDone);
  const done = todos.filter((data) => data.isDone);

  const nowTime = moment().format("YY-MM-DD HH:mm:ss");

  // 리뷰마다 고유값 생성
  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  const newTodo = {
    id: uuidv4(),
    date: nowTime,
    title: queryTitle,
    body: queryContent,
    isDone: false,
  };

  const handleChangeTitle = (event) => {
    const InputTitle = event.target.value;

    setQueryTitle(InputTitle);
  };

  const HandleChangebody = (event) => {
    const inputContent = event.target.value;

    setqueryContent(inputContent);
  };

  const clickAddButtonHandler = (event) => {
    event.preventDefault();

    if (queryTitle.trim() === "") {
      alert("제목을 입력해주세요!");
      return false;
    }

    if (queryContent.trim() === "") {
      alert("내용을 입력해주세요!");
      return false;
    }

    setTodos([...todos, newTodo]);

    localStorage.setItem("working", JSON.stringify([...working, newTodo]));
    setQueryTitle("");
    setqueryContent("");
  };

  const clickRemoveButtonHandler = (id) => {
    let isDelCheck = window.confirm("정말 삭제하시겠습니까?");
    const removeTodo = todos.filter((data) => data.id !== id);

    if (isDelCheck) {
      setTodos(removeTodo);
    }
    return false;
  };

  const clickCheckedButtonHandler = (id) => {
    const updatedTodos = todos.map((data) => {
      if (data.id === id) {
        data.isDone = !data.isDone;
      }
      return data;
    });

    localStorage.setItem("working", JSON.stringify([...updatedTodos]));
    setTodos(updatedTodos);
  };

  return (
    <section className="main-wrap">
      <article className="input-wrap">
        <form method="get">
          제목{" "}
          <input
            className="input-title"
            type="text"
            value={queryTitle}
            onChange={handleChangeTitle}
            maxlength="20"
          />
          내용{" "}
          <input
            className="input-content"
            type="text"
            value={queryContent}
            onChange={HandleChangebody}
            maxlength="80"
          />
          <AddCardButton clickAddFunc={clickAddButtonHandler} />
        </form>
      </article>

      <h2>Working..🔥</h2>
      <div className="card-wrap">
        <article className="working-card-wrap">
          {working.length > 0 ? (
            working.map((data) => {
              return (
                <div key={data.id} className="working-card-list">
                  <p className="working-title">{data.title}</p>
                  <p className="date-now">{data.date}</p>
                  <p className="working-content">{data.body}</p>
                  <RemoveCardButton
                    data={data}
                    clickRemoveFunc={clickRemoveButtonHandler}
                  />
                  <CheckedButton
                    data={data}
                    clickCheckedFunc={clickCheckedButtonHandler}
                  />
                </div>
              );
            })
          ) : (
            <div className="working-no-card">
              <p>할일을 등록해주세요 ^0^</p>
            </div>
          )}
        </article>
      </div>

      <h2>Done..🎉</h2>
      <div className="card-wrap">
        <article className="done-card-wrap">
          {done.length > 0 ? (
            done.map((data) => {
              return (
                <div key={data.id} className="done-card-list">
                  <p className="done-title">{data.title}</p>
                  <p className="date-now">✨완료시간✨</p>
                  <p className="date-now">{nowTime}</p>
                  <p className="done-content">{data.body}</p>
                  <RemoveCardButton
                    data={data}
                    clickRemoveFunc={clickRemoveButtonHandler}
                  />
                  <CheckedButton
                    data={data}
                    clickCheckedFunc={clickCheckedButtonHandler}
                  />
                </div>
              );
            })
          ) : (
            <div className="done-no-card">
              <p>아직 할일이 끝나지 않았습니다 ㅜㅜ</p>
            </div>
          )}
        </article>
      </div>
    </section>
  );
};
export default Main;

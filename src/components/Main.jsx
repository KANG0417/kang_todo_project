import React, { useState } from "react";
import "../css/Main.css";
import AddCardButton from "../button/AddCardButton";
import RemoveCardButton from "../button/RemoveCardButton";
import CheckedButton from "../button/CheckedButton";

const Main = () => {
  const [queryTitle, setQueryTitle] = useState("");
  const [queryContent, setqueryContent] = useState("");
  const [todos, setTodos] = useState([]);
  const [done, setDone] = useState([]);
  const [idx, setIdx] = useState(0);

  const newTodo = {
    id: idx,
    date
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
    setIdx((idx) => idx + 1);

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

    setDone(updatedTodos);
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
          />
          내용{" "}
          <input
            className="input-content"
            type="text"
            value={queryContent}
            onChange={HandleChangebody}
          />
          <AddCardButton clickAddFunc={clickAddButtonHandler} />
        </form>
      </article>

      <div className="card-wrap">
        <h2>Working..🔥</h2>
        <article className="working-card-wrap">
          {todos.length > 0 ? (
            todos.map((data) => {
              return (
                <div key={data.id} className="working-card-list">
                  <p className="working-title">{data.title}</p>
                  <p className="date-now">23년 11월 5일 11:42:44</p>
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

      <div className="card-wrap">
        <h2>Done..🎉</h2>
        <article className="done-card-wrap">
          {done.length > 0 ? (
            done.map((data) => {
              return (
                <div key={data.id} className="done-card-list">
                  <p className="done-title">{data.title}</p>
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

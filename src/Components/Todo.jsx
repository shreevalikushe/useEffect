import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";
// import styles from "../App.module.css";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  //   const [page, setPage] = useState(1);
  function toggleFunc(id) {
    var statusChange = tasks.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setTasks(statusChange);
  }
  async function onSubmit({ title }) {
    const payload = {
      title: title,
      status: false,
      id: uuid(),
    };
    const section = await fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return section.json();
  }
  async function handleData(page, perPage) {
    return fetch(`http://localhost:8000/tasks?page=${page}&per_page=${perPage}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setTasks(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    var page = page || 1;
    var perPage = 3;
    handleData(page, perPage);
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <h3>...loading</h3>
      ) : (
        <div>
          <h1>Todo App Using Mock Server</h1>
          <TodoInput key={tasks.id} onSubmit={onSubmit} />
          <TodoList key={tasks.id} data={tasks} toggleFunc={toggleFunc} />
        </div>
      )}
    </>
  );
}

export default Todo;

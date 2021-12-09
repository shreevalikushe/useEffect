import { useState } from "react";
// import styles from "../App.module.css";
function TodoInput({ onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(todo);
  }
  function handleChange(e) {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  }
  const [todo, setTodo] = useState({
    title: "",
  });
  return (
    <>
      <div>
        <input
          type="text"
          name="title"
          value={todo.title}
          placeholder="Enter Task"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>
    </>
  );
}
export default TodoInput;

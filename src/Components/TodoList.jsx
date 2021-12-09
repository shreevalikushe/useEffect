import styles from "../App.module.css";

function TodoList({ data, toggleFunc }) {
  const status = (id) => {
    toggleFunc(id);
  };
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.id} className={styles.div}>
            <h4 className={styles.title}>
              {item.title}-{item.status ? "Done" : "Pending"}
            </h4>
            <button
              className={styles.btnToggle}
              onClick={() => {
                status(item.id);
              }}
            >
              Toggle
            </button>
            <button className={styles.btnToggle}>X</button>
          </div>
        );
      })}
    </>
  );
}
export default TodoList;

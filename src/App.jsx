import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [work, setWork] = useState("");
  const [date, setDate] = useState("");

  const todoSubmit = (e) => {
    e.preventDefault();

    setTodo((currvalue) => {
      const newTodo = [
        ...currvalue,
        {
          name: work,
          date: date,
          Date: Date.now(),
        },
      ];
      return newTodo;
    });
  };

  const removeTodo = (Date) => {
    let newTodoItems = todo.filter((item) => item.Date !== Date);
    setTodo(newTodoItems);
  };

  return (
    <div className="app_div w-100 d-flex justify-content-center">
      <div className="border px-4 py-3 rounded d-flex flex-column">
        <h3 className="fw-semi-bold text-center">Todo App</h3>
        <div className="w-100 d-flex justify-content-center border-bottom pb-3 mt-3">
          <form action="" onSubmit={todoSubmit}>
            <div className="input_div d-flex align-items-center">
              <input
                type="text"
                required
                onChange={(e) => setWork(e.target.value)}
                value={work}
                className="rounded border px-2"
                placeholder="Enter Text"
              />
              <input
                type="datetime-local"
                required
                onChange={(e) => setDate(e.target.value)}
                value={date}
                className="rounded border px-2 text-secondary"
                name=""
                id=""
              />
              <button type="submit" className="btn btn-outline-info">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="work_head d-flex mt-3 text-center">
          <p className="text-start ps-3">Work</p>
          <p>Date-Time</p>
          <p>Delete</p>
        </div>
        <div className="work_div mt-2 d-flex flex-column">
          {todo.length === 0 ? (
            <div>
              <p>Your Todo Is Empty</p>
            </div>
          ) : (
            <div className="d-flex flex-column" style={{ gap: "10px" }}>
              {todo.map((item, index) => (
                <div
                  className="work_details d-flex align-items-center border rounded py-2"
                  key={index}
                >
                  <p className="ps-3 fs-5">{item.name}</p>
                  <p className="">{item.date}</p>
                  <div className="d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => removeTodo(item.Date)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

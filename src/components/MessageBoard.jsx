import { useState } from "react"; 

function MessageBoard() {
  const [todo,setTodo] = useState([]);
  const [todoText,setTodoText] = useState("");

  const handleTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const addTodo = () => {
    const newTodo = [...todo];
    newTodo.push(todoText);
    setTodo(newTodo);
  }

  const deleteTodo = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index,1);
    setTodo(newTodo);
  }

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={handleTodoText}
            value={todoText}
          />
        </label>
        <button className="submit-message-button" onClick={addTodo}>Submit</button>
      </div>
      <div className="board">
      {
        todo.map((item,index) => {
          return <div className="message">
            <h1>{item}</h1>
            <button className="delete-button" onClick={() => {
              deleteTodo(index);
            }}>x</button>
            </div>
          })
        }
      </div>
    </div>
  );
}

export default MessageBoard;

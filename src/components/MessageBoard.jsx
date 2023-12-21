import { useState, useEffect } from "react";
function MessageBoard() {
  const [message, setMessage] = useState();
  const [allMessgeArray, setAllMessgeArray] = useState([]);
  useEffect(() => {
    console.log(allMessgeArray);
  }, [allMessgeArray]);
  function handleSubmit() {
    const currentMessageAllay = [...allMessgeArray, message];
    setAllMessgeArray(currentMessageAllay);
    console.log(allMessgeArray);
  }
  function handleClose(index) {
    const currentMessageAllay = [...allMessgeArray];
    currentMessageAllay.splice(index, 1);
    setAllMessgeArray(currentMessageAllay);
    console.log(allMessgeArray);
  }
  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            value={message}
          />
        </label>
        <button className="submit-message-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div class="board">
        {allMessgeArray.map((data, index) => (
          <div key={index} className="message">
            <h1>{data}</h1>
            <button
              className="delete-button"
              onClick={() => handleClose(index)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;

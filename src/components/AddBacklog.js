import React, { useState, useContext } from "react";
import { v4 } from "uuid";
import { BacklogContext } from "../context/BacklogState";

function AddBacklog() {
  const [backlog, setBacklog] = useContext(BacklogContext);
  const [backlogName, setBacklogName] = useState("");

  const onChange = (e) => {
    const input = e.currentTarget.value;
    if (/^[^!-\/:-@\[-`{-~]+$/.test(input) || input === "") {
      setBacklogName(input);
    }
  };

  const addName = (e) => {
    e.preventDefault();
    // create new card object that i want to add
    const newCard = { name: backlogName, stage: 0, cid: v4() };
    // get backlog object throght filter
    const getBacklogObject = backlog.filter((backlog) => {
      return backlog.id === 1;
    });
    // push new object in backlog card
    getBacklogObject[0].cards.push(newCard);
    // create newState for adding in Main object
    const newState = backlog.map((obj) => {
      if (obj.id === 1) {
        return { ...obj, cards: getBacklogObject[0].cards };
      }
      return obj;
    });

    setBacklog(newState);
    setBacklogName("");
  };

  return (
    <div>
      <h3>Add Backlog</h3>
      <form autoComplete="off" onSubmit={addName}>
        <input
          type="text"
          name="backlog"
          id="backlog"
          placeholder="Enter Backlog Name"
          value={backlogName}
          onChange={onChange}
        />
        <button
          className="btn-primary"
          type="submit"
          id="submit"
          disabled={backlogName.length <= 2}
        >
          Add Backlog
        </button>
      </form>
    </div>
  );
}

export default AddBacklog;

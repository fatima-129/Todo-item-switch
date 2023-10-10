import React, { useState, useEffect } from "react";

import { initialData } from "./Data";

export default function App() {
  const [data, setData] = useState(initialData);
  const [state, setState] = useState();

  useEffect(() => {
    if (state === "all") setData(initialData);

    if (state === "completed")
      setData(initialData.filter((i) => i.completed === true));

    if (state === "non_completed")
      setData(initialData.filter((i) => i.completed === false));
  }, [state]);

  function handleDelete(id) {
    const newDataAfterDelete = data.filter((f) => f.id !== id);
    setData(newDataAfterDelete);
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <select onChange={(e) => setState(e.target.value)}>
        <option value={"all"}>All</option>
        <option value={"completed"}>Completed</option>
        <option value={"non_completed"}>Non Completed</option>
      </select>
      {data.map((item) => (
        <div key={item.id}>
          <p>
            {item.id}: {item.title}
          </p>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

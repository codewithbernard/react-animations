import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
import randomWords from "random-words";

import "./List.css";

const List = () => {
  const [items, setItems] = useState([]);

  const addItem = () =>
    setItems([...items, randomWords({ exactly: 2, join: " " })]);

  const deleteItem = ({ currentTarget }) =>
    setItems(items.filter((item) => item !== currentTarget.dataset.id));

  return (
    <div className="list-container">
      <Button
        fullWidth
        variant="contained"
        color="primary"
        className="add-button"
        onClick={addItem}
      >
        Add Random Item
      </Button>
      <ul>
        {items.map((word) => (
          <li key={word}>
            <span>{word}</span>
            <IconButton size="small" data-id={word} onClick={deleteItem}>
              <Delete />
            </IconButton>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

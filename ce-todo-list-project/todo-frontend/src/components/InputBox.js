import { Button, Container, Input } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
function InputBox({ setData }) {
  const [itemText, setItemText] = useState("");

  function handleChange({ target: { value } }) {
    setItemText(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (itemText.trim().length > 0) {
      axios
        .post(`${process.env.REACT_APP_API_ENDPOINT}/items`, {
          item: itemText,
        })
        .then((newItem) => {
          setData((cData) => {
            const clonedData = structuredClone(cData);
            const newItem = {
              title: itemText,
              did: cData.listItems.length + 1,
            };
            clonedData.listItems.push(newItem);
            return clonedData;
          });
          setItemText("");
        });
    }
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          placeholder="New Item..."
          value={itemText}
          type="text"
        ></Input>
        <Button type="submit"> Add!</Button>
      </form>
    </Container>
  );
}

export default InputBox;

import { useState } from "react";

export default function ({ searchName, setSearchName }) {
  function handleChange(e) {
    setSearchName(e.target.value);
  }

  return <input value={searchName} onChange={handleChange}></input>;
}

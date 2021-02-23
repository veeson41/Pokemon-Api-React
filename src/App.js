import React, { useState, useEffect } from "react";
import { useOnScreen } from "./Components/useOnScreen";
import { Page } from "./Components/Page";
import "./Components/SearchBar";
import SearchBar from "./Components/SearchBar";
import "./Components/AutoScroll";
import AutoScroll from "./Components/AutoScroll";
import "./Components/Modal/ModalComponent";
import ModalComponent from "./Components/Modal/ModalComponent";
function App() {
  const [arrayCount, setRef] = useOnScreen({ rootMargin: "10px" });
  const [searchName, setSearchName] = useState("");
  const [showProfile, setModalProfile] = useState({
    show: false,
    name: "",
    pic: "",
  });

  const pages = [];

  const [isEnd, setIsEnd] = useState(false);

  for (let i = 0; i < arrayCount; i++) {
    pages.push(
      <Page
        setModalProfile={setModalProfile}
        index={i}
        key={i}
        setIsEnd={setIsEnd}
        searchName={searchName}
      />
    );
  }
  return (
    <>
      <ModalComponent setModal={setModalProfile} showModal={showProfile} />
      <SearchBar searchName={searchName} setSearchName={setSearchName} />
      <div className="App">{pages}</div>
      <AutoScroll isEnd={isEnd} setRef={setRef} />
    </>
  );
}

export default App;

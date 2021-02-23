import React, { useState } from "react";
import { Modal } from "./Modal";
import "../../index.css";

export default function ({ setModal, showModal }) {
  const { show, name, pic } = showModal;

  function close() {
    setModal({ show: false, name: name, pic: pic });
  }

  return (
    <div className=".modal">
      <div className="modal-main">
        <Modal show={show}>
          <button onClick={close}>close</button>
          <label>
            <h1>{name}</h1>
          </label>
          <img src={pic} height={400} width={400} />
          <br />
          <p>Description</p>
          <br />
        </Modal>
      </div>
    </div>
  );
}

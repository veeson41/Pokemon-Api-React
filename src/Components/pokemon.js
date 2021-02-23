import React from "react";
import useRequest from "../Utilities/useRequest";
import "./Modal/ModalComponent";

export const Pokemon = ({ pokemon, setShowModal }) => {
  const { name } = pokemon;
  const { data, error } = useRequest("pokemon", name);
  if (error) return <h1>something went wrong!</h1>;
  if (!data) return <h1>loading...</h1>;

  function info() {
    setShowModal({
      show: true,
      name: name,
      pic: data.sprites.other["official-artwork"].front_default,
    });
  }

  return <img src={data.sprites.front_default} alt={name} onClick={info} />;
};

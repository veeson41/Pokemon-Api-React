import { useEffect, useState } from "react";
import useSWR from "swr";
import { Pokemon } from "./pokemon";

export function Page({ index, setIsEnd, searchName, setModalProfile }) {
  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/?offset=${index * 100}&limit=100`
  );
  const [showModal, setShowModal] = useState({
    show: false,
    name: "",
    pic: "",
  });

  useEffect(() => {
    if (showModal.show) {
      setModalProfile({ ...showModal });
      setShowModal({ show: false, name: "", pic: "" });
    }
  }, [showModal.name]);

  if (error) return <h1> Something went wrong!</h1>;
  if (!data) return <h1>loading...</h1>;

  const tempResults = data.results.map((res) => {
    const id = res.url.split("/")[6];
    if (id > 10090) {
      setIsEnd(true);
      return "";
    }
    return (
      <Pokemon
        key={res.name}
        pokemon={res}
        id={id}
        setShowModal={setShowModal}
      />
    );
  });

  const results =
    String(searchName).length < 1
      ? tempResults
      : tempResults.filter(
          (name) =>
            String(name.key)
              .toLowerCase()
              .indexOf(String(searchName).toLowerCase()) !== -1
        );

  return (
    <header className="App-header">
      <div>{results}</div>
    </header>
  );
}

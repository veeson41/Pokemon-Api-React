export default function ({ isEnd, setRef }) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return isEnd ? (
    <button onClick={scrollTop}>Top</button>
  ) : (
    <button onClick={scrollTop} ref={setRef}>
      Top
    </button>
  );
}

import useHook from "./hooks/useHook";

function App() {
  const [value, setValue] = useHook();
  return (
    <div className="container">
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something"
      />
      <output>{value}</output>
    </div>
  );
}

export default App;

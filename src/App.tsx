import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Component } from "./Component";
import { usePashexHook } from "./react-pashex";

function App() {
  const state = usePashexHook();
  console.log("state", state.getState());

  const handleClick = () => {
    state.changeState({ date: new Date().getTime() });
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={handleClick}>count is {amount?.state?.amount}</button> */}
        <button onClick={handleClick}>{"click"}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Component>{state.getState()?.date}</Component>
    </>
  );
}

export default App;

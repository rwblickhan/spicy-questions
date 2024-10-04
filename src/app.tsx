import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import classes from "./app.module.css";
import classNames from "classnames";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={classes.buttons}>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className={classes.logo} alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank" rel="noreferrer">
          <img
            src={preactLogo}
            className={classNames(classes.logo, classes.preact)}
            alt="Preact logo"
          />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div className={classes.card}>
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={classes.readthedocs}>
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  );
}

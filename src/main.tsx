import { render } from "preact";
import { App } from "./app.tsx";

import "./index.css";
import "./pico.css";

/* eslint-disable @typescript-eslint/no-non-null-assertion */

render(<App />, document.getElementById("app")!);

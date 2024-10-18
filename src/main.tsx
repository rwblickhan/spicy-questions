import { render } from "preact";
import { App } from "./app.tsx";
import { setBasePath } from "@shoelace-style/shoelace";

import "./index.css";
import "@shoelace-style/shoelace/dist/themes/light.css";

setBasePath("./shoelace_assets");

/* eslint-disable @typescript-eslint/no-non-null-assertion */

render(<App />, document.getElementById("app")!);

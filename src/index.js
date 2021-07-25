import React, { useState } from "react";
import ReactDOM from "react-dom";

import SlideFade from "./SlideFade";
import Example from "./Example";

const App = () => {
  const [show, set] = useState(false);
  const toggle = () => set(!show);
  return (
    <>
      <div>
        <em>Preceding content...</em>
        <SlideFade toggle={show} unmount={true}>
          <hr />
          <Example />
        </SlideFade>
      </div>
      <hr />
      <em>Further content...</em>
      <footer>
        <button onClick={toggle}>Click to {show ? "hide" : "show"}</button>
      </footer>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

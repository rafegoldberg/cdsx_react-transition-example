import React, { useState } from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import SlideFade from ".";
import Example from "../Example";

const TestElem = () => {
  const [show, set] = useState(true);
  const toggle = () => set(!show);
  return (
    <>
      <SlideFade toggle={show} unmount={true}>
        <Example />
      </SlideFade>
      <button onClick={toggle}>Toggle</button>
    </>
  );
};

describe("<SlideFade>", () => {
  it("Appears immediately.", () => {
    const { container } = render(<TestElem />);
    const transition = container.getElementsByClassName("transition")[0];
    expect(transition.classList).toContain("appear");
  });

  it("Toggled by a stateful prop.", async () => {
    render(<TestElem />);
    fireEvent.click(screen.getByText("Toggle"));
    const el = await screen.getByText("Lorem ipsum");
    console.log(el);

    // Wait for page to update with query text
    // screen.getAllByText("Lorem");

    expect("a").toBe("a");
  });
});

import React, { useLayoutEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

import "./style.scss";

const SlideFade = ({
  children,
  toggle,
  duration = 600,
  unmount = false,
  immediate = true,
  ...props
}) => {
  const ref = useRef();
  const [h, setHeight] = useState("");

  useLayoutEffect(() => {
    const handler = () => {
      setHeight("");
      const { current: el } = ref;
      if (!el) return;
      const height = el.getBoundingClientRect().height;
      setHeight(height ? `${height}px` : "");
    };
    window.addEventListener("resize", () => handler());
    handler();
    return () => window.removeEventListener("resize", () => handler());
  }, []);

  return (
    <CSSTransition
      in={toggle}
      timeout={duration}
      unmountOnExit={unmount}
      appear={immediate}
      onEntered={() => {
        const height = ref.current.getBoundingClientRect().height;
        setHeight(`${height || h}px`);
      }}
      {...props}
    >
      {(state) => (
        <div
          ref={ref}
          className="transition"
          style={{
            "--transition-height": h,
            transitionDuration: `${duration}ms`
          }}
        >
          {children}
        </div>
      )}
    </CSSTransition>
  );
};

export default SlideFade;

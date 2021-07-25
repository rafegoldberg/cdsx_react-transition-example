import React, { useEffect } from "react";

import "./style.scss";

const Test = (props) => {
  useEffect(() => {
    console.log("<Test>:in");
    return () => console.log("<Test>:out");
  }, []);
  return (
    <div className="example" {...props}>
      <div>
        <h3>Lorem ipsum</h3>
        <p>
          Dolor sit amet consectetur adipisicing elit. Dolor quae maxime
          reprehenderit incidunt veritatis reiciendis error, fugiat, asperiores
          laboriosam, nostrum corrupti consequuntur cum et placeat quia aliquid
          totam suscipit! Voluptate excepturi error fugit ullam vel sunt
          suscipit deleniti.
        </p>
      </div>
      <div>
        <img
          height="200px"
          src="https://files.readme.io/4e75a81-undraw_city_driver_re_0x5e.svg"
        />
      </div>
    </div>
  );
};

export default Test;

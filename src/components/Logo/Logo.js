import React from "react";
import Tilty from "react-tilty";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilty
        className="tilty br2 shadow-2"
        glare
        scale={1}
        maxGlare={5}
        style={{ height: 107, width: 107 }}
      >
        <div className="inner pa3">
          <img style={{ paddingTop: "7px" }} alt="logo" src={brain} />
        </div>
      </Tilty>
    </div>
  );
};

export default Logo;

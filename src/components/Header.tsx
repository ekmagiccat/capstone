import React from "react";
import { useSpring, animated } from "@react-spring/web";
import Instructions from "./Instructions";

const Header = () => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  return (
    <div>
      <animated.div style={props} className="display-1 header">
        It's Coffee Time!
      </animated.div>
      
      <br />
      <Instructions />
    </div>
  );
};

export default Header;

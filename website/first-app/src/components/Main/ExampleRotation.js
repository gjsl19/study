import React from "react";
// import cx from "classnames";
import { useParallax } from "react-scroll-parallax";

export const ExampleRotation = () => {
  const parallax =
    useParallax <
    HTMLDivElement >
    {
      rotate: [0, 360],
      shouldAlwaysCompleteAnimation: true,
    };
  return (
    <>
      <div ref={parallax.ref}>
        😵‍💫
        <div>💎</div>
        <div>🤡</div>
      </div>
    </>
  );
};

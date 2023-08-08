import React, { useState } from "react";
import { useParallax } from "react-scroll-parallax";
import { ExampleRotation } from "./ExampleRotation";
import "./style.scss";

const Main = ({ id }) => {
  const parallax =
    useParallax <
    HTMLDivElement >
    {
      rotateY: [0, 360],
    };

  return (
    <>
      <div id={id}>
        <div className="main-wrap">
          <div ref={parallax.ref} className="spinner group">
            <h1>슬기로운 금융생활 페이워치 활용백서</h1>
            <h2>세상에 이런 복지 봤어?</h2>
            <p>
              매달 월급날에 받을 급여 중 일부를 내가 원하고 필요할 때 먼저
              인출할 수 있어요
            </p>
          </div>
          <ExampleRotation />
        </div>
      </div>
    </>
  );
};
export default Main;

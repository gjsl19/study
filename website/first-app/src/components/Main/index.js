import React, { useState } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { ExampleRotation } from "./ExampleRotation";
import "./style.scss";

const Main = ({ id }) => {
  return (
    <>
      <div id={id}>
        <div className="main-wrap">
          <ParallaxProvider>
            <div className="group">
              <h1>
                슬기로운 금융생활 <strong>페이워치 활용백서</strong>
              </h1>

              <Parallax scale={[0, 2]}>
                <h2>세상에 이런 복지 봤어?</h2>
              </Parallax>
              <Parallax>
                <p>
                  매달 월급날에 받을 급여 중 일부를 내가 원하고 필요할 때 먼저
                  인출할 수 있어요
                </p>
              </Parallax>
            </div>

            <Parallax translateY={-100} speed={100} className="group2">
              <ExampleRotation />
            </Parallax>
          </ParallaxProvider>
        </div>
      </div>
    </>
  );
};
export default Main;

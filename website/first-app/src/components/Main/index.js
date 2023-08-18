import React from "react";

import "./style.scss";

const Main = ({ id }) => {
  return (
    <>
      <div id={id}>
        <div className="main-wrap">
          <div className="group">
            <h1>
              슬기로운 금융생활 <strong>페이워치 활용백서</strong>
            </h1>
            <h2>세상에 이런 복지 봤어?</h2>
            <p className="txt01">
              월급 중 일부를 기다리지 않고
              <br />
              내가 원하고 필요할 때
              <br />
              먼저 인출할 수 있다?
            </p>
            <p className="">YES</p>
            <p>NO</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;

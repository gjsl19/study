import React, { useState } from "react";
import { gsap } from "gsap";
import "./style.scss";

const Main = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <div id="home">
        <div className="container01">
          <div className="box">Hello</div>

          <h2>세상에 이런 복지 봤어? </h2>
          <p>
            매달 월급날에 받을 급여 중 일부를 내가 원하고 필요할 때 먼저 인출할
            수 있어요
          </p>
          <p>앱 가입시 회사로부터 전달받은 직장코드를 입력하면 끝!</p>

          <h2>페이워치 도입 아직도 안한 기업 손</h2>
          <p>
            도입을 원하시면 페이워치 홈페이지 방문해 보시고 도입문의 페이지에
            정보를 남겨주세요
          </p>
          <p>퇴사율이 줄어들고 직원복지 만족도가 아주 높아요</p>
          <p>도입만 하면 끝이라고? 내가 더 해줄건 없어?</p>
          <p>급여선지급과 관련된 모든 절차는 페이워치팀에서 진행해요</p>
          <p>
            회사는 직원의 급여계좌 변경과 퇴사 여부만 관리해 주시면 “우리 회사
            최고” 또는 “싸장님 최고” 소리 들으실 거예요
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;

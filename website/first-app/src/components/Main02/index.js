import React, { useState } from "react";
import { gsap } from "gsap";
import "./style.scss";

const Main02 = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <div>
        <div className="container02">
          <h2>프로인출러 모여라</h2>
          <p>
            페이워치 서비스의 근본적인 취지는 월급고개로 인한 금전적 고충을
            해결하고자 무이자 상품을 제공해 드리는 것이예요
          </p>
          <p>
            페이워치를 통해 보다 계획적이고 슬기로운 금융생활을 실천해 볼 수
            있어요!
          </p>

          <h2>얼마나 줄 수 있는데요? 나 돈 피료해요</h2>
          <p>
            내가 필요할때! 일할만큼! 쌓인 급여를 10,000원부터 최대 2,000,000원
            까지 인출
          </p>
          <p>무이자로 금융생활을 관리해줘요</p>
          <p>이용 수수료 : 1~10만원 인출 시 건당 700원</p>
          <p>
            한 번에 30만원 또는 50만원 이용 시(소속 기업에 따라 상이함) 10만원씩
            여러번 인출할 때보다 할인된 수수료로 인출 가능해요
          </p>
        </div>
      </div>
    </>
  );
};

export default Main02;

import React from "react";
import "./style.scss";

const Withdrawal = ({ id }) => {
  return (
    <>
      <div id={id}>
        <div className="withdrawal-wrap">
          <div>
            <h2>프로인출러 모여라</h2>
            <p>
              페이워치 서비스의 근본적인 취지는 월급고개로 인한 금전적 고충을
              해결하고자 무이자 상품을 제공해 드리는 것이예요
            </p>
            <p>
              페이워치를 통해 보다 계획적이고 슬기로운 금융생활을 실천해 볼 수
              있어요!
            </p>
          </div>
          <div>
            <h2>얼마나 줄 수 있는데요? 나 돈 피료해요</h2>
            <p>
              내가 필요할때! 일할만큼! 쌓인 급여를 10,000원부터 최대 2,000,000원
              까지 인출
            </p>
            <p>무이자로 금융생활을 관리해줘요</p>
            <p>이용 수수료 : 1~10만원 인출 시 건당 700원</p>
            <p>
              한 번에 30만원 또는 50만원 이용 시(소속 기업에 따라 상이함)
              10만원씩 여러번 인출할 때보다 할인된 수수료로 인출 가능해요
            </p>
          </div>
          <div>
            <h2>진짜 아무때나?</h2>
            <p>
              매일 서비스 점검 시간인 23:50~00:30을 제외한 24시간 365일 가능해요
            </p>
            <p>
              단, 상환이 이루어지는 급여일 기준 2영업일 전(기업별로 상이할 수
              있음)부터 급여일까지는 인출할 수 없어요(정산 기간)
            </p>
            <p>
              ex)급여일 00시 마일리지가 초기화되고 급여일 다음날 사용가능한
              마일리지가 지급되어 인출 가능!
            </p>
          </div>
          <div>
            <h2>어떻게 하는건데?</h2>
            <p>
              이용 조건이 충족되는 경우 가입과 동시에 마일리지가 지급되어 바로
              인출 가능해요
            </p>
            <p>소속 기업에 따라 추가 인증이 필요한 경우가 있을 수 있어요.</p>
            <p>
              하나머니로 현금인출하거나 이지웰 복지몰포인트로 전환해 필요한
              물건으로 바로 쇼핑도 가능해요
            </p>
          </div>
          <div>
            <h2>나도 이용할 수 있는거 맞아?</h2>
            <p>관리자가 먼저 서비스 도입 후에 근로자가 이용할 수 있어요</p>
            <p>
              급여가 적어도! 근로형태가 시급제이더라도 매월 특정일에 일정하게
              지급되는(월급제) 경우엔 모두 이용 가능해요
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdrawal;
let computerNum = 0;
let playBtn = document.getElementById("play-btn");
let userInput = document.getElementById("user-input");
let result = document.getElementById("result-window");
let resetBtn = document.getElementById("reset-btn");
let chance = document.getElementById("chance");
let txt = document.getElementById("txt-chance");
// 10번의 기회를 다 쓰면 게임 끝 (버튼은 비활성화)
let number = 10;
let userNumber = [];

chance.textContent = number;

playBtn.addEventListener("click", play);
resetBtn.addEventListener("click", resetPlay);

// 랜덤숫자 불러오기
function randomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  // console.log("정답:", computerNum);
}

// 유저가 번호를 입력하고 확인버튼을 누름
// 유저가 랜덤번호를 맞추면, 정답입니다!
// 랜덤번호가 < 유저번호 Down!
// 랜덤번호가 > 유저번호 Up!
function play() {
  let userValue = userInput.value;

  // 숫자 미입력했을때 안내해주고 기회를 깍지않음
  if (userInput.value == "") {
    result.textContent = "숫자를 입력해주세요";
    return;
  }
  // 유저가 1~100 범위 밖의 숫자를 입력하면 알려주고 기회를 깍지않음
  if (userValue > 100 || userValue < 1) {
    result.textContent = "범위 밖의 숫자를 입력하셨습니다";
    return;
  }
  // 유저가 이미 입력한 숫자를 또 입력하면 알려주고 기회를 깍지않음
  if (userNumber.includes(userValue)) {
    result.textContent = "이미 입력한 숫자를 입력하셨습니다";
    return;
  }

  number--;
  chance.textContent = number;

  if (userValue > computerNum) {
    result.textContent = "Down!";
  } else if (userValue < computerNum) {
    result.textContent = "Up!";
  } else if (userValue == computerNum) {
    result.textContent = "와우! 정답입니다~";
    txt.className += " txt-disabled";
    playBtn.disabled = true;
    return;
  }
  // 기회가 다했을때
  // 정답 알려주기
  if (number < 1) {
    result.textContent = "기회가 없습니다. 정답은 : " + computerNum + "이예요~";
    txt.className += " txt-disabled";
    playBtn.disabled = true;
  }

  userNumber.push(userValue);
}

// Reset 버튼을 누르면 게임 초기화
function resetPlay() {
  // user input창이 깨끗하게 정리가됨
  userInput.value = "";
  // 새로운 정답번호가 생성이됨
  randomNum();
  result.textContent = "게임을 시작하지";
  playBtn.disabled = false;
  // 초기화한후에 기회랑 이미 입력한 숫자라는 배열기록까지 전부 리셋되야함
  number = 10;
  chance.textContent = number;
  userNumber = [];
  // 기회 안내 텍스트도 다시 보여야함
  txt.classList.remove("txt-disabled");
}
randomNum();

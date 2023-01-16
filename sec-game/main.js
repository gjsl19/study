// 5x5 동물이름을 유저가 입력함
// 버튼을 누르면 랜덤 동물이름이 하나씩 나옴
// 입력한것과 같으면 칸이 색칠됨
// 2줄이 되면 빙고!

let animals = [
  "개",
  "고양이",
  "여우",
  "라쿤",
  "수달",
  "코요테",
  "너구리",
  "햄스터",
  "다람쥐",
  "생쥐",
  "캥거루",
  "돼지",
  "양",
  "알파카",
  "사슴",
  "염소",
  "소",
  "토끼",
  "나무늘보",
  "말",
  "당나귀",
  "왈라비",
  "원숭이",
  "고슴도치",
  "박쥐",
  "참새",
  "새",
  "독수리",
  "오리",
  "꿩",
  "까마귀",
  "닭",
  "벌새",
  "딱다구리",
  "거위",
  "병아리",
  "까치",
  "부엉이",
  "비둘기",
  "거북이",
  "악어",
  "표범",
  "도마뱀",
  "이구아나",
  "카멜레온",
  "뱀",
  "개구리",
  "물고기",
  "낙타",
  "고릴라",
  "사자",
  "호랑이",
  "기린",
  "코끼리",
  "곰",
  "치타",
];

let userInpValue = [];
let btnSave = document.getElementById("btn-save");

function list() {
  let inp = document.getElementsByTagName("input");
  for (let i = 0; i <= inp.length; i++) {
    let = inp[i];
    // console.log(inp[i]);
  }
  //   console.log(inp);
}

function save() {
  //   let userValue = inp1.value;
  //   userInpValue.push(userValue);
  //   console.log(userInpValue);
  //   for (let i = 0; i <= bingoInp.length; i++) {
  //     document.getElementById("ipt") + i;
  //   }
  //   let inpValue = bingoInp.value;
  //   console.log("input요소의 개수) : " + bingoInp.length);
  //   userInpValue.push(bingoInp);
  //   let inpValue = bingoInp.value;
  //   console.log(bingoInp);
  //   userInpValue.push(inpValue);
}
list();
btnSave.addEventListener("click", save);

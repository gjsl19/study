let taskInput = document.getElementById("todoIpt");
let addBtn = document.getElementById("addBtn");
let tabs = document.querySelectorAll(".task-tab div");
let delBtn = document.getElementsByClassName("del-btn");
let taskList = [];
let mode = "all";
let filterList = [];

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    filter(event);
  });
}

// addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keyup", function (event) {
  // 왜 짝대기감??
  if (event.keyCode === 13) {
    addTask();
    addBtn.addEventListener("click", addTask);
  }
});

// 유저는 할일을 추가할 수 있다.
function addTask() {
  let task = {
    // 랜덤으로 아이디부여
    id: randomIdGenerate(),
    taskContent: taskInput.value,
    // 아직 안끝났어! false, 끝났으면 true
    isComplete: false,
    isDelete: false,
  };
  taskList.push(task);

  console.log(taskList);
  //   왜 함수를 하나 더 만들어서 부르는건지? addTask() 안에서 해도되나?
  render();
}

// 엔터키 이벤트 함수
// function enterKey() {
//   if (window.event.keyCode == 13) {
//     addTask();
//   }
// }

function render() {
  let list = [];
  if (mode == "all") {
    list = taskList;
  } else if (mode == "ongoing" || mode == "done") {
    list = filterList;
  }
  let resultHtml = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete == true) {
      resultHtml += `<li>
      <p class="task-txt done">${list[i].taskContent}</p>
      <div>
        <button type="button" class="btn chk-btn reset" onclick="toggleComplete('${list[i].id}')">되돌리기</button>
        <button type="button" class="btn del-btn" onclick="deleteTask('${list[i].id}')">삭제</button>
      </div>
    </li>`;
    } else {
      resultHtml += `<li>
        <p class="task-txt">${list[i].taskContent}</p>
        <div>
          <button type="button" class="btn chk-btn" onclick="toggleComplete('${list[i].id}')">완료</button>
          <button type="button" class="btn del-btn" onclick="deleteTask('${list[i].id}')">삭제</button>
        </div>
      </li>`;
    }
  }
  //   왜 제일 상단에 let으로 빼서 만들어서 부르면 안되지?
  document.getElementById("taskList").innerHTML = resultHtml;
}
// 완료버튼을 누르면 할일이 끝난것으로 간주하고 밑줄이간다.
// 끝난 할일은 되돌리기 버튼을 클릭하면 다시 되돌릴 수 있다.
function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    // 아이템에 아이디가 내가 받은 매게변수의 아이디와 같다면 true로 바꿔라
    if (taskList[i].id == id) {
      // taskList[i].isComplete = true;
      // 스위치처럼 바꿔주려면 ! 를넣어줌
      taskList[i].isComplete = !taskList[i].isComplete;
      break; //종료하기, 더이상 for문이 돌아가지 않게 탈출~
    }
  }
  // 값이 업데이트되면 UI도 업데이트 해줘야한다
  render();
  // console.log(taskList)
}

// 삭제버튼을 클릭하면 할일이 리스트에서 삭제된다.
function deleteTask(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }

  // 값이 업데이트되면 UI도 업데이트 해줘야한다
  render();
  // delBtn.addEventListener("click", deleteTask(id));
}

// 탭을 이용해 아이템들을 상태별로 나누어서 볼 수 있다.
function filter(event) {
  mode = event.target.id;
  filterList = [];
  // event 클릭했을때 이벤트에 대한거 찾아보기
  // console.log("filter 클릭됨",event.target.id)

  if (mode == "all") {
    document.getElementById("done").classList.remove("active");
    document.getElementById("ongoing").classList.remove("active");
    document.getElementById("all").classList.add("active");
    render();
  } else if (mode == "ongoing") {
    document.getElementById("done").classList.remove("active");
    document.getElementById("all").classList.remove("active");
    document.getElementById("ongoing").classList.add("active");

    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == false) {
        filterList.push(taskList[i]);
      }
    }
    render();
  } else if (mode == "done") {
    document.getElementById("ongoing").classList.remove("active");
    document.getElementById("all").classList.remove("active");
    document.getElementById("done").classList.add("active");

    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == true) {
        filterList.push(taskList[i]);
      }
    }
    render();
    console.log(filterList.isDelete);
    // if (filterList.isDelete == true) {
    //   console.log("click");
    //   // render();
    // }
  }
}
// 랜덤으로 아이디부여 (완료 버튼 누를때마다 체크하기위함)
function randomIdGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

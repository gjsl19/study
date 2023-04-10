const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// ctx.fillRect(200, 200, 50, 200); //기둥
// ctx.fillRect(400, 200, 50, 200); //기둥
// ctx.fillRect(300, 300, 40, 100); //문
// ctx.fillRect(200, 200, 200, 20); //지붕기둥
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100); //지붕
// ctx.lineTo(450, 200); //지붕
// ctx.fill();

// ctx.beginPath();

// ctx.fillRect(220, 200, 20, 130); //기둥
// ctx.fillRect(380, 200, 20, 130); //기둥
// ctx.fillRect(260, 300, 40, 200); //기둥
// ctx.fillRect(320, 300, 40, 200); //기둥
// ctx.fillRect(250, 200, 120, 150); //기둥
// ctx.arc(310, 100, 50, 0, 2 * Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.fillStyle = "white";
// ctx.arc(285, 95, 5, 0, 2 * Math.PI);
// ctx.arc(330, 95, 5, 0, 2 * Math.PI);
// ctx.fill();

ctx.lineWidth = 2;
const colors = ["red", "blue", "green", "orange"];

function onClick(event) {
  ctx.moveTo(this.offsetX, this.offsetY);
  const colorPic = colors[Math.floor(Math.random() * colors.length)];
  //   ctx.strokeStyle = colorPic;

  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}
canvas.addEventListener("mousemove", onClick);

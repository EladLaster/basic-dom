  document.addEventListener("DOMContentLoaded", function () {
  const step = 15;

  const field = document.getElementById("playing-field");
  field.style.backgroundColor = "blue";

  const uparrow = document.getElementById("up");
  const downarrow = document.getElementById("down");
  const leftarrow = document.getElementById("left");
  const rightarrow = document.getElementById("right");

  const ball = document.getElementById("ball");
  ball.style.backgroundColor = "yellow";


  function moveBall(direction) {

    let currentLeft = parseInt(ball.style.left) || 0;
    let currentTop = parseInt(ball.style.top) || 0;

    const containerWidth = field.clientWidth;
    const containerHeight = field.clientHeight;

    const ballWidth = ball.offsetWidth;
    const ballHeight = ball.offsetHeight;


    switch(direction) {
      case "left":
        currentLeft -= step;
        if (currentLeft < 0) currentLeft = 0;
        break;

      case "right":
        currentLeft += step;
        if (currentLeft > containerWidth - ballWidth) currentLeft = containerWidth - ballWidth;
        break;

      case "up":
        currentTop -= step;
        if (currentTop < 0) currentTop = 0;
        break;

      case "down":
        currentTop += step;
        if (currentTop > containerHeight - ballHeight) currentTop = containerHeight - ballHeight;
        break;
    }

    ball.style.left = currentLeft + "px";
    ball.style.top = currentTop + "px";
  }

  leftarrow.addEventListener("click", () => moveBall("left"));
  rightarrow.addEventListener("click", () => moveBall("right"));
  uparrow.addEventListener("click", () => moveBall("up"));
  downarrow.addEventListener("click", () => moveBall("down"));

  document.addEventListener("keydown", (event) => {
    switch(event.key) {
      case "ArrowLeft":
        moveBall("left");
        break;
      case "ArrowRight":
        moveBall("right");
        break;
      case "ArrowUp":
        moveBall("up");
        break;
      case "ArrowDown":
        moveBall("down");
        break;
    }
  });


  const header = document.createElement("h1");
  header.innerHTML = "The Best Game Ever";
  header.classList.add("my-header");
  document.body.appendChild(header);

  const secondHeader = document.createElement("h2");
  secondHeader.textContent = "Game by: ~The Creator~";
  secondHeader.classList.add("my-second-header");
  document.body.appendChild(secondHeader);

});

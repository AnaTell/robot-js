//one by one input moves

const btns = document.querySelectorAll(".race-btns");

// check if a tile have an empty neighbour
function canMove(direction) {
  // Propiedades del tile
  let robot = document.querySelector('.robot');

  // Direction
  switch (direction) {
    case 'left' :
    // LEFT
    if(robot.cellIndex == 0) return false;
    let left = robot.previousElementSibling.className.includes('obstaculo');
    return !left;
    break;
    case 'up' :
      // UP
      if (robot.parentElement.rowIndex == 0) return false;
      let up = robot.parentElement.previousElementSibling.children[robot.cellIndex].className.includes('obstaculo');
      return !up;
      break;
    case 'right':
    // RIGHT
    if(!robot.nextElementSibling) return false;
    let right = robot.nextElementSibling.className.includes('obstaculo');
    return !right;
    break;

    case 'down' :
    // DOWN
    if (!robot.parentElement.nextElementSibling ) return false;
    let down = robot.parentElement.nextElementSibling.children[robot.cellIndex].className.includes('obstaculo');
    return !down;
    break;
    default:
    console.log('Something went wrong');
  }
}

// Move the tile
function moveTile(direction) {
  // Propiedades del tile
  let robot = document.querySelector('.robot');

  // Direction
  switch (direction) {
    case 'left' :

    let leftMove = robot.previousElementSibling;
    robot.classList.toggle("robot");
    leftMove.classList.add("robot");
    // LEFT
    // Add #robot to previousSibling && remove #robot to Actual cell
      // Return boolean

      break;

      case 'up' :
      let upMove = robot.parentElement.previousElementSibling.children[robot.cellIndex];
      robot.classList.toggle("robot");
      upMove.classList.add("robot")

    // UP
    // Get actual row by Parent Element && previousRow && cell by CellIndex
    break;

    case 'right' :
    let rightMove = robot.nextElementSibling;
    robot.classList.toggle("robot");
    rightMove.classList.add("robot");

    // RIGHT
    // Add #robot to nextElementSibling && remove #robot to Actual cell
    break;

    case 'down' :
    let downMove = robot.parentElement.nextElementSibling.children[robot.cellIndex];
    robot.classList.toggle("robot");
    downMove.classList.add("robot")
    // DOWN
    // Get actual row by Parent Element && nextRow && cell by CellIndex
    break;
    default:
    console.log('Something went wrong');
  }
}

function checkIfPlayerWins() {
  let tilesOrder = Array.from(document.querySelectorAll('td')).map((e) => { return parseInt(e.innerHTML); });
  if (tilesOrder.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN") {
    alert("You win!");
  }
}

console.log(btns);



function moveToDirection() {
  const inputID = this.getAttribute('data-input');
  const input = document.getElementById(inputID);
  const times = input.value;
  const direction = this.id;


  multipleMoves(direction, times);
}

btns.forEach(btn => {
  btn.onclick = moveToDirection;
});




function multipleMoves (direction, times) {
  console.log(direction);
  for (let i = 0; i<=times){
    if (canMove(direction)) {
      moveTile(direction);
    }
  }
}

window.multipleMoves = multipleMoves;

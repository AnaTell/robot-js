//Keyboard Moves



// check if a tile have an empty neighbour
function canMove(direction) {
  // Propiedades del tile
  let robot = document.querySelector('.robot');

  // Direction
  switch (direction) {
    case 37 :
    // LEFT
    if(robot.cellIndex == 0) return false;
    let left = robot.previousElementSibling.className.includes('obstaculo');
    return !left;
    break;
    case 38 :
      // UP
      if (robot.parentElement.rowIndex == 0) return false;
      let up = robot.parentElement.previousElementSibling.children[robot.cellIndex].className.includes('obstaculo');
      return !up;
      break;
      case 39:
    // RIGHT
    if(!robot.nextElementSibling) return false;
    let right = robot.nextElementSibling.className.includes('obstaculo');
    return !right;
    break;

    case 40 :
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
    case 37 :

    let leftMove = robot.previousElementSibling;
    robot.classList.toggle("robot");
    leftMove.classList.add("robot");
    // LEFT
    // Add #robot to previousSibling && remove #robot to Actual cell
      // Return boolean

      break;

      case 38 :
      let upMove = robot.parentElement.previousElementSibling.children[robot.cellIndex];
      robot.classList.toggle("robot");
      upMove.classList.add("robot")

    // UP
    // Get actual row by Parent Element && previousRow && cell by CellIndex
    break;

    case 39 :
    let rightMove = robot.nextElementSibling;
    robot.classList.toggle("robot");
    rightMove.classList.add("robot");

    // RIGHT
    // Add #robot to nextElementSibling && remove #robot to Actual cell
    break;

    case 40 :
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


document.addEventListener("keyup", (event) => {
  switch (event.keyCode) {
    case 39 :
    console.log(canMove(39))
    if (canMove(39)) {
      moveTile(39);
      //checkIfPlayerWins();
    }
    break;
    case 37 :
    console.log(canMove(37))
    if (canMove(37)) {
      moveTile(37);
      //checkIfPlayerWins();
    }
    break;
    case 40 :
    console.log(canMove(40))
    if (canMove(40)) {
      moveTile(40);
      //checkIfPlayerWins();
    }
    break;
    case 38 :
    console.log(canMove(38))
    if (canMove(38)) {
      moveTile(38);
      //checkIfPlayerWins();
    }
    break;
    default:
    console.log('Something went wrong');
  }
});

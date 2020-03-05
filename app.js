// Rover Object Goes Here
// ======================
let roverOne = {
    direction: "N",
    travelLog: [],
    position :{
      x:0,
      y:0
    },
    name: "R1"
  };
  
  let roverTwo = {
    direction: "N",
    travelLog: [],
    position :{
      x:0,
      y:0
    },
    name: "R2"
  };
  // ======================
  
  //I´m gonna create now a 10X10 grid to place the obstacles ("O") and others posible rovers ("R").
  
  let marsGrid = [
    ['','','','','','','O','','',''],
    ['','','O','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['O','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','','']];
  
  //function to turn left the rover:
  
  function turnLeft(rover){
    let turnL = rover.direction;
    switch(turnL) {
      case "N":
        rover.direction = "W";
        //console.log(rover.direction);
        break;
      case "W":
        rover.direction = "S";
        //console.log(rover.direction);
        break;
      case "S":
        rover.direction = "E";
        //console.log(rover.direction);
        break;
      case "E":
        rover.direction = "N";
        //console.log(rover.direction);
        break;
    }
    console.log(`turnLeft was called on ${rover.name}!`);
  };
  
  //function to turn right the rover:
  
  function turnRight(rover){
    let turnL = rover.direction;
    switch(turnL) {
      case "N":
        rover.direction = "E";
        //console.log(rover.direction);
        break;
      case "E":
        rover.direction = "S";
        //console.log(rover.direction);
        break;
      case "S":
        rover.direction = "W";
        //console.log(rover.direction);
        break;
      case "W":
        rover.direction = "N";
        //console.log(rover.direction);
        break;
    }
    console.log(`turnRight was called on ${rover.name}!`);
  }
  
  //declare a variable to set out the block code every position 
  
  let acumPosition = {x:0, y:0};
  
  //function to move forward the rover step by step:
  
  function moveForward(rover){
    // register of the last position for each movement and print values in travelLog property:
    let lastPosition = {x:rover.position.x, y: rover.position.y};
    rover.travelLog.push(lastPosition);
    //console.log(lastPosition,"last");
    //conditional to check rover don´t go outside the board:
    if ( rover.position.x >= 0 && rover.position.x < 9 && rover.position.y >= 0 && rover.position.y < 9 ){
      if ( rover.direction === "N"){
      rover.position.y--;
      //console.log(rover.position, 'mF');
      } else if (rover.direction === "S"){
      rover.position.y++;
      //console.log(rover.position, 'mF');
      } else if (rover.direction === "E"){
      rover.position.x++;
      //console.log(rover.position, 'mF');
      } else if (rover.direction === "W"){
      rover.position.x--;
      //console.log(rover.position, 'mF');
    } 
    //put rover in marsGrid:
  
      // declare newPosition variable:
  
      let newPosition = rover.position;
      
  
      //insert values of newPosition in acumPosition variable for each movement:
  
      acumPosition.x = newPosition.x;
      acumPosition.y = newPosition.y;
      //console.log(acumPosition, "acumPosition here!")
  
    //printing the rover in marsGrid:
  
    if ( rover.position.x >= 0 && rover.position.x < 9 && rover.position.y >= 0 && rover.position.y < 9 ){
      marsGrid[lastPosition.y][lastPosition.x] = '';
      marsGrid[acumPosition.y][acumPosition.x] = `${rover.name}`;}
  
    console.log(`moveForward was called on ${rover.name}`);
    } else { console.log(`You can't place ${rover.name} outside of the board!`);}
  };
  
  //function to move rover backward step by step:
  
  
  
  function moveBackward(rover){
    // register of the last position for each movement and print values in travelLog property:
  
    let lastPosition = {x:rover.position.x, y: rover.position.y};
    rover.travelLog.push(lastPosition);
    
    //conditional to check rover don´t go outside the board:
  
    if ( rover.position.x >= 0 && rover.position.x < 9 && rover.position.y >= 0 && rover.position.y < 9 ){
      if ( rover.direction === "N"){
      rover.position.y++; 
      //console.log(rover.position);
      } else if (rover.direction === "S"){
      rover.position.y--;
      //console.log(rover.position);
      } else if (rover.direction === "E"){
      rover.position.x--;
      //console.log(rover.position);
      } else if (rover.direction === "W"){
      rover.position.x++;
      //console.log(rover.position);
    }
    
    //put rover in marsGrid:
  
      // declare newPosition variable:
  
      let newPosition = rover.position;
      
  
      //insert values of newPosition in acumPosition variable for each movement:
  
      acumPosition.x = newPosition.x;
      acumPosition.y = newPosition.y;
      //console.log(acumPosition, "acumPosition here!")
  
    //printing the rover in marsGrid:
  
    if ( rover.position.x >= 0 && rover.position.x < 9 && rover.position.y >= 0 && rover.position.y < 9 ){
      marsGrid[lastPosition.y][lastPosition.x] = '';
      marsGrid[acumPosition.y][acumPosition.x] = `${rover.name}`;}
    
    console.log(`moveBackward was called on ${rover.name}`)
    
    } else { 
      console.log(`You can't place ${rover.name} outside of the board!`);
    }
    
  };
  
  
  
  //fuctions that accepts two commands: type of rover and a string with commands to turn or move rover.
  
  
  function roverCommands(rover, commands) {
    for( let i = 0; i < commands.length; i++){
    
    // check if rover don´t go outside marsGrid and if next move is a Obstacle, stop it:
  
        if (rover.direction === 'E' && 
        acumPosition.x +1 < 10 && acumPosition.x +1 > 0 && marsGrid[acumPosition.y][acumPosition.x +1] === 'O'){
          console.log('OOOOOBSTACLE!');
          break;
        } else if (rover.direction === 'W' && acumPosition.x -1 < 10 && acumPosition.x -1 > 0 && marsGrid[acumPosition.y][acumPosition.x -1] === 'O'){
          console.log('OOOOOBSTACLE!');
          break;
        } else if (rover.direction === 'N' && acumPosition.y -1 < 10 && acumPosition.y -1 > 0 && marsGrid[acumPosition.y -1][acumPosition.x] === 'O'){
          console.log('OOOOOBSTACLE!');
          break;
        } else if (rover.direction === 'S' && acumPosition.y +1 < 10 && acumPosition.y +1 > 0 && marsGrid[acumPosition.y +1][acumPosition.x] === 'O'){
          console.log('OOOOOBSTACLE!');
          break;
        }
  
        // check if rover don´t go outside marsGrid and if next move is another Rover, stop it:
  
        if (rover.direction === 'E' && 
        acumPosition.x +1 < 10 && acumPosition.x +1 > 0 && marsGrid[acumPosition.y][acumPosition.x +1] !== 'O' &&  marsGrid[acumPosition.y][acumPosition.x +1] !== ''){
          console.log('Stop! there´s a rover near!');
          break;
        } else if (rover.direction === 'W' && acumPosition.x -1 < 10 && acumPosition.x -1 > 0 && marsGrid[acumPosition.y][acumPosition.x -1] !== 'O' &&  marsGrid[acumPosition.y][acumPosition.x -1] !== ''){
          console.log('Stop! there´s a rover near!');
          break;
        } else if (rover.direction === 'N' && acumPosition.y -1 < 10 && acumPosition.y -1 > 0 &&  marsGrid[acumPosition.y -1][acumPosition.x] !== 'O' &&  marsGrid[acumPosition.y -1][acumPosition.x] !== ''){
          console.log('Stop! there´s a rover near!');
          break;
        } else if (rover.direction === 'S' && acumPosition.y +1 < 10 && acumPosition.y +1 > 0 && marsGrid[acumPosition.y +1][acumPosition.x] !== 'O' &&  marsGrid[acumPosition.y +1][acumPosition.x] !== ''){
          console.log('Stop! there´s a rover near!');
          break;
        }
  
      //Switch orders for rover commands:
  
      let orders = commands[i]; 
          switch(orders){
          case "f":
            moveForward(rover); 
            //console.log(rover.position,'case f');      
            break;
          case "b":
            moveBackward(rover);
            //console.log(rover.position);
            break;
          case "r":
            turnRight(rover);
            //console.log(rover.direction);
            break;
          case "l":
            turnLeft(rover);
            //console.log(rover.direction);
            break;
          default:
            console.log(`This '${orders}' is not a valid command!`);
            break;
        } 
      } 
      // reset acumPosition variable for every rover movement:
  
      acumPosition = {x:0, y:0};
  
    };
  
    
  console.log(roverCommands(roverOne,"rrffffff"));
  console.log(roverCommands(roverTwo,"rrffffffff"));
  console.log(marsGrid);
  console.log(roverTwo);
  console.log(roverOne);
  
  
        
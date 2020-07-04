/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timenow){
  timenow = timenow.split(':')
  let timeString = timenow[0]
  let res = parseInt (timeString,10);
  if(res<12){
    return "Good Morning"
  }
  
  else if(res > 17){
  return "Good Evening"
    
  }
  else{
    return "Good Afternoon"
  }
}
function displayMessage(arg){
  `welcome ${arg}`;
}
  

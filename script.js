//JS Loops Assignment

//HTML Elements and Event Listeners
const loopOneBtn = document.getElementById("happy-btn");
const loopTwoBtn = document.getElementById("12to800-btn");
const loopThreeBtn = document.getElementById("55to11-btn");
const loopFourBtn = document.getElementById("series1-btn");
const loopFiveBtn = document.getElementById("series2-btn");
const clearBtn = document.getElementById("clear-btn");
const htmlConsole = document.getElementById("console-txt");

//Event Listeners
loopOneBtn.addEventListener("click", loopOne);
loopTwoBtn.addEventListener("click", loopTwo);
loopThreeBtn.addEventListener("click", loopThree);
loopFourBtn.addEventListener("click", loopFour);
loopFiveBtn.addEventListener("click", loopFive);
clearBtn.addEventListener("click", consoleClear);

//"I'm so happy" * 500
function loopOne() {
  for (let n = 1; n <= 500; n++) {
    console.log("I'm so happy!");
    htmlConsole.innerHTML = "I'm so happy!";
  }
}

//Multiples of 4
function loopTwo() {
  //start at 8 to get 12-800, +4 each
  let n = 8;
  while (n < 800) {
    n += 4;
    console.log(n);
    htmlConsole.innerHTML = n;
  }
}

//Odd Numbers from 55-11
function loopThree() {
  for (let n = 55; n >= 11; n -= 2) {
    console.log(n);
    htmlConsole.innerHTML = n;
  }
}

//Sum of Series 1
function loopFour() {
  let sum = 0;
  for (let n = 5; n <= 50; n++) {
    sum = sum + n;
  }
  htmlConsole.innerHTML = sum;
  console.log(sum);
}

//Sum of Series 2
function loopFive() {
  let sum = 0;
  for (let n = 10; n <= 100; n += 10) {
    sum = sum + n;
  }
  htmlConsole.innerHTML = sum;
  console.log(sum);
}

//Clear Console
function consoleClear() {
  console.clear();
  htmlConsole.innerHTML = "<em>Console was cleared<em>";
}
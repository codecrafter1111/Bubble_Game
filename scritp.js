let timmer = 60;
let score = 0;
let hitrn = 0;
// Making the bubble with the help fo function..
function making_bubble() {
  let clutter = "";
  for (let i = 0; i <= 168; i++) {
    //making the random number with the help of "math fuc"
    let random_number = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${random_number}</div>`;
  }

  document.querySelector("#p_btm").innerHTML = clutter;
}
making_bubble();

//Making the function to counterdown the time..
function timer_interval() {
  let countdown = setInterval(function () {
    if (timmer != 0) {
      //we can also do "timmer>0" here..
      timmer--;
      document.querySelector("#timmerval").textContent = timmer;
    } else {
      clearInterval(countdown);
      document.querySelector("#p_btm").innerHTML =`<h1>GAME OVER</h1>`;
    }
  }, 1000);
}
timer_interval();

// Making funciton to decrese the value of hit..
function hit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}
hit();

//increasig the vlaue of score with 10..
function incresing_score() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

let a = document.querySelector("#p_btm");
a.addEventListener("click", (dets) => {
  let click_number =Number(dets.target.textContent);
  if(click_number === hitrn){
    incresing_score();
    making_bubble();
    hit();
  }
//   else{
//     score -=5;
//     document.querySelector("#scoreval").textContent = score;
// }
});

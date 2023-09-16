var count = document.getElementsByClassName("count");
var inc = [];

console.log(count)

function counterFunc() {
  for (let i = 0; i < count.length; i++) {
      inc.push(1);
      console.log(inc)
      if (inc[i] != count[i].getAttribute("max-data")) {
      inc[i]++;
    }
    count[i].innerHTML = inc[i];
  }
}

var mainWrapper = document.getElementById("main");
var timer;

window.addEventListener("scroll", function () {
  if (!timer) {
    timer = setInterval(() => {
      var topElement = mainWrapper.offsetTop;
      var bottomElement = mainWrapper.offsetTop + mainWrapper.clientHeight;
      var topScreen = window.scrollY;
      var bottomScreen = window.scrollY + window.innerHeight;

      if (bottomScreen > topElement && topScreen < bottomElement) {
        counterFunc();
      } else {
        clearInterval(timer);
        timer = null; // Reset the timer
      }
    }, 30);
  }
});

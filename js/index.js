class Timer {
      constructor() {
            this.clock = document.getElementById("time");
            this.actionElement = document.getElementById("action");
            this.timer = 25;
            // this.text = this.timer <= 9 ? this.timer = "0" + this.timer : this.timer = this.timer;

      }

      reset() {
            //    stop the timer
            this.stop();
            this.timer = 25;
            this.text = this.timer <= 9 ? "0" + this.timer : this.timer;
            this.actionElement.innerText = "start";
            //text reset
            this.clock.innerText = this.text + ":00";
      }
      format(timeMeasure) {
            //format the time clock to display the hour and minutes with two digits each one
            return timeMeasure < 10 ? "0" + timeMeasure : timeMeasure
      }
      start() {

            let time = this.timer * 60;

            let minutes = 0;
            let seconds = 0;

            this.interval = setInterval(() => {
                  // The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
                  // Display the current time (the setInterval() method will execute the function once every 1 second, just like a digital watch):
                  minutes = Math.floor(time / 60);
                  seconds = Math.floor(time % 60);
                  console.log("minutes", minutes);
                  console.log("seconds", seconds);

                  let minutesText = this.format(minutes);
                  let secondText = this.format(seconds);

                  this.clock.innerText = minutesText + ":" + secondText;
                  //timer decrement count by 1 second
                  if (--time <= 0) {
                        this.timer = 0;
                        clearInterval(this.interval);
                  }

            }, 1000);

            // Action text change to pause
            document.getElementById("action").innerText = "stop";

            //change clock text
            // this.text = `${minutes, "minutes",  seconds, "seconds"}`
            // console.log('this.text', this);
      }
      

      stop() {
            //pause time
            clearInterval(this.interval);

            document.getElementById("action").innerText = "start";

      }


}


/* ================================================================
==                     Timer Functions                           ==
==================================================================*/

const countDownTimer = new Timer();
countDownTimer.reset();

function action(str) {
      switch (str.toLowerCase()) {
            case "start":
                  countDownTimer.start();
                  break;
            default:
                  countDownTimer.stop();
                  break;

      }
}
// document.getElementById("action").addEventListener("click", (ev) = {

// })

// console.log(beginTimer.timer, "beginTimer.timer")
// timer.start();

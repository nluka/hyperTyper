class GameTimer {
  constructor(element) {
    this._element = element;
    this.intervalId = null;
    this.timeStarted = null;
    this.timeEnded = null;
    this.timeElapsedInSeconds = null;
    //console.log("GameTimer object instantiated");
  }

  async countDownFromMs(lengthInMs) {
    //console.log("Countdown starting, length set to", lengthInMs, "ms");
    for (let i = lengthInMs / 1000; i >= 0; i--) {
      if (i > 0) {
        sound.play("countdownBeepShort");
        gameTimer_div.innerText = i;
        if (i >= 3) this._element.style.color = "rgb(255,0,0)";
        else if (i === 2) this._element.style.color = "rgb(255,125,0)";
        else this._element.style.color = "rgb(255,255,0)";
        //console.log("> starting in", i);
        await sleepForMs(1000);
      } else {
        sound.play("countdownBeepLong");
        this._element.animate(
          [
            // keyframes
            { color: "rgb(150,255,150)" },
            { color: "white" },
          ],
          {
            // timing options
            duration: 1000,
            iterations: 1,
            //fill: "forwards",
            easing: "ease-in",
          }
        );
        setTimeout(() => {
          this._element.removeAttribute("style");
        }, 1000);
        //console.log("> countdown finished");
      }
    }
  }

  start() {
    //console.log("GameTimer starting");
    this._element.innerText = "0:00";
    this.timeStarted = new Date();
    //console.log("> start time is", this.timeStarted);
    this.intervalId = setInterval(gameTimerIntervalCallback, 1000);
  }

  getAndSetInnerTextValue() {
    const secondsElapsedSinceTimerStart = getSecondsElapsedSince(
      this.timeStarted
    );
    let seconds = secondsElapsedSinceTimerStart.toFixed(0);
    let minutes = 0;
    let hours = 0;
    let time_str = "";

    while (seconds >= 60) {
      seconds -= 60;
      minutes++;
    }
    while (minutes >= 60) {
      minutes -= 60;
      hours++;
    }

    if (hours > 0) {
      time_str = `${hours}:`;
      if (minutes < 10) time_str += "0"; // to have x:00 instead of x:0
    }
    time_str += `${minutes}:`;
    if (seconds < 10.0) time_str += "0"; // to have x:00 instead of x:0
    time_str += seconds;

    this._element.innerText = time_str;
  }

  stop() {
    if (this.intervalId == null) return;
    //console.log("GameTimer stopping");
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.timeEnded = new Date();
    //console.log("> end time is", this.timeEnded);
    this.timeElapsedInSeconds = (this.timeEnded - this.timeStarted) / 1000;
    //console.log(`> time elapsed is ${this.timeElapsedInSeconds} seconds`);
  }
}

const sleepForMs = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

const gameTimerIntervalCallback = () => {
  gameTimer.getAndSetInnerTextValue();
};

const getSecondsElapsedSince = (previousTime) => {
  return (new Date() - previousTime) / 1000;
};

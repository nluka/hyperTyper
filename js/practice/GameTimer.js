class GameTimer {
  static INACTIVE_STATE_TEXT = "--:--";

  constructor(element) {
    this.element = element;
    this.intervalId = null;
    this.timeStarted = null;
    this.timeEnded = null;
    this.timeElapsedInSeconds = null;
    this.state = {
      countingDown: false,
      running: false
    };
  }

  async countDownFromMs(lengthInMs) {
    for (let secondsRemaining = lengthInMs/MILLISECONDS_PER_SECOND; secondsRemaining >= 0; secondsRemaining--) {
      if (secondsRemaining > 0) {
        this.countdownTick(secondsRemaining);
        await GameTimer.sleepForMs(MILLISECONDS_PER_SECOND);
      } else {
        this.finalCountdownTick();
      }
    }
  }

  countdownTick(secondsRemaining) {
    Sound.playEffect("countdownBeepShort");
    this.setInnerText(secondsRemaining);
    this.setInnerTextColorForCountdownTick(secondsRemaining);
    this.animateInnerTextSize();
  }

  setInnerText(string) {
    this.element.innerText = string;
  }

  setInnerTextColorForCountdownTick(secondsRemaining) {
    if (secondsRemaining >= 3) {
      this.element.style.color = "rgb(255,0,0)";
      return;
    }
    if (secondsRemaining === 2) {
      this.element.style.color = "rgb(255,125,0)";
      return;
    }
    this.element.style.color = "rgb(255,255,0)";
  }

  animateInnerTextSize() {
    const normalFontSizePx = parseInt(getComputedStyle(this.element).fontSize);
    this.element.animate(
      [
        // keyframes
        {
          fontSize: `${normalFontSizePx * 1.5}px`
        },
        {
          fontSize: `${normalFontSizePx}px`
        },
      ],
      {
        // timing options
        duration: MILLISECONDS_PER_SECOND / 8,
        iterations: 1,
        easing: "ease-in",
      }
    );
  }

  static sleepForMs = (milliseconds) => new Promise(
    (resolve) => setTimeout(resolve, milliseconds)
  );

  finalCountdownTick() {
    Sound.playEffect("countdownBeepLong");
    this.animateInnerTextColorForFinalCountdownTick();
  }

  animateInnerTextColorForFinalCountdownTick() {
    this.element.animate(
      [
        // keyframes
        {
          color: "rgb(150,255,150)"
        },
        {
          color: "white"
        },
      ],
      {
        // timing options
        duration: MILLISECONDS_PER_SECOND,
        iterations: 1,
        easing: "ease-in",
      }
    );
    setTimeout(() => {
      this.removeInlineStyles();
    }, MILLISECONDS_PER_SECOND);
  }

  removeInlineStyles() {
    this.element.removeAttribute("style");
  }

  start() {
    this.setInnerText("0:00");
    this.timeStarted = new Date();
    this.intervalId = setInterval(() => {
      this.updateInnerText();
    }, MILLISECONDS_PER_SECOND);
  }

  updateInnerText() {
    const secondsElapsedSinceTimerStart = this.getSecondsElapsedSinceTimeStarted();
    const elapsedTimeValues = this.calculateElapsedHoursMinutesSeconds(secondsElapsedSinceTimerStart);
    this.setInnerText(this.getFormattedString(elapsedTimeValues));
  }

  getSecondsElapsedSinceTimeStarted() {
    return (new Date() - this.timeStarted) / MILLISECONDS_PER_SECOND;
  }

  calculateElapsedHoursMinutesSeconds(secondsElapsed) {
    let calculatedHours = 0;
    let calculatedMinutes = 0;
    let calculatedSeconds = roundFloat(secondsElapsed, 0);

    while (calculatedSeconds >= SECONDS_PER_MINUTE) {
      calculatedSeconds -= SECONDS_PER_MINUTE;
      calculatedMinutes++;
    }
    while (calculatedMinutes >= MINUTES_PER_HOUR) {
      calculatedMinutes -= MINUTES_PER_HOUR;
      calculatedHours++;
    }

    return {
      hours: calculatedHours,
      minutes: calculatedMinutes,
      seconds: calculatedSeconds
    }
  }

  getFormattedString({hours, minutes, seconds}) {
    let formattedString = "";
    if (hours > 0) {
      formattedString = `${hours}:`;
      if (minutes < 10) {
        formattedString += "0"; // to have h:mm:ss instead of h:m:ss
      }
    }
    formattedString += `${minutes}:`;
    if (seconds < 10.0) {
      formattedString += "0"; // to have mm:ss instead of mm:s
    }
    formattedString += seconds;
    return formattedString;
  }

  stop() {
    if (this.intervalId === null) {
      return;
    }
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.timeEnded = new Date();
    this.timeElapsedInSeconds = (this.timeEnded - this.timeStarted) / MILLISECONDS_PER_SECOND;
  }

  clear() {
    this.setInnerText(GameTimer.INACTIVE_STATE_TEXT);
  }
}
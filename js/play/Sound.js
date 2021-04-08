const countdownBeepShort_mp3 = new Audio("sound/countdown-beep-short.mp3");
const countdownBeepLong_mp3 = new Audio("sound/countdown-beep-long.mp3");
const suddentDeathBuzzer_mp3 = new Audio("sound/sudden-death-buzzer.mp3");

const soundObjects = [
  countdownBeepShort_mp3,
  countdownBeepLong_mp3,
  suddentDeathBuzzer_mp3,
];

class Sound {
  constructor(initialVolume_float) {
    this.setVolumeTo(initialVolume_float);
    //console.log("Sound object instantiated");
  }

  play(soundName) {
    if (!settings.isSoundEnabled) return;

    switch (soundName) {
      case "countdownBeepShort":
        countdownBeepShort_mp3.play();
        return;
      case "countdownBeepLong":
        countdownBeepLong_mp3.play();
        return;
      case "suddenDeathBuzzer":
        suddentDeathBuzzer_mp3.play();
        return;
    }
  }

  setVolumeTo(float) {
    if (float > 1.0) float = 1.0;
    else if (float <= 0.0) float = 0.01;
    soundObjects.forEach((object) => {
      object.volume = float;
    });
  }
}

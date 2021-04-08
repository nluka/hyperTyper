const countdownBeepShort_mp3 = new Audio("sound/countdown-beep-short.mp3");
const countdownBeepLong_mp3 = new Audio("sound/countdown-beep-long.mp3");

const soundFiles = [
  countdownBeepShort_mp3,
  countdownBeepLong_mp3,
];

class Sound {
  static playEffect(soundEffectName) {
    if (!Settings.soundEffects) {
      return;
    }

    switch (soundEffectName) {
      case "countdownBeepShort":
        countdownBeepShort_mp3.play();
        return;
      case "countdownBeepLong":
        this.files.countdownBeepLong_mp3.play();
        return;
    }
  }

  static setVolume(float) {
    if (float > 1.0) float = 1.0;
    else if (float < 0.01) float = 0.01;
    soundFiles.forEach((soundFile) => {
      soundFile.volume = float;
    });
  }
}
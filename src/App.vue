<template>
  <div class="player">
    <div class="player-cover" />
    <div class="player-timeline">
      <span class="player-timeline__elapsed-time">0:36</span>
      <span class="player-timeline__rest-time">-2:59</span>
      <input
        v-model="currentTime" 
        :style="{ background: timelineGradientBackground }"
        :max="duration"
        class="player-timeline__slider" 
        type="range"
        min="0"
        step="any"  
      >
    </div>
    <h1 class="player-artist">Скриптонит</h1>
    <h2 class="player-song">Вечеринка</h2>
    <div class="player-control">
      <button class="player-control__prev"><img src="./assets/img/previous.svg"></button>
      <button class="player-control__play"><img src="./assets/img/play.svg"></button>
      <button class="player-control__next"><img src="./assets/img/next.svg"></button>
    </div>
    <div class="player-volume">
      <img class="player-volume__less" src="./assets/img/less-volume.svg">
      <img class="player-volume__more" src="./assets/img/more-volume.svg">
      <input
        v-model="volume" 
        :style="{ background: volumeGradientBackground }"
        class="player-volume__slider" 
        type="range" 
        min="0"
        max="100"
        step="any" 
      >
    </div>
    <button class="player-telegram">
      <span>Telegram</span>
      <img src="./assets/img/download.svg">
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      volume: 100,

      currentTime: 0,

      duration: 180
    }
  },
  computed: {
    volumeGradientBackground() {
      const start = this.volume
      const end = 100 - start
      return `linear-gradient(to right, #8f8e94 ${start}%, #ddd ${start}%, #ddd ${end}%)`
    },
    timelineGradientBackground() {
      const start = this.currentTime * 100 / this.duration 
      const end = this.duration - start
      return `linear-gradient(to right, #8f8e94 ${start}%, #ddd ${start}%, #ddd ${end}%)`
    }
  }
}
</script>

<style>
/** Regular */
@font-face {
  font-family: "SF";
  font-weight: normal;
  src: url("assets/fonts/SFUIDisplay-Regular.woff");
}

* {
  font-family: "SF";
  letter-spacing: .05em;
  font-weight: 400;
}

div {
  margin: auto;
  text-align: center;
}

.player {
  width: 375px;
  height: 667px;
  background-color: #ffffff;
  border: 1px solid #8f8e94;
}

.player-cover {
  margin: 62px auto;
  width: 249px;
  height: 249px;
  border-radius: 10px;
  background-image: url("assets/img/cover.png");
  background-size: cover;
}

.player-timeline {
   position: relative;
}

.player-timeline__elapsed-time {
  position: absolute;
  bottom: -20px;
  left: 33px;
  font-size: 13px;
  color: #8c8c8c;
}

.player-timeline__rest-time {
  position: absolute;
  bottom: -20px;
  right: 33px;
  font-size: 13px;
  color: #8c8c8c;
}

.player-timeline__slider:focus {
  outline: none;
}

.player-timeline__slider{
  -webkit-appearance: none;
  padding: 0px;
  width: 310px;
  height: 4px;
  border-radius: 2px;
  background-color: #8f8e94;
}

.player-timeline__slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 7px;
  height: 7px;
  background-color: #8f8e94;
  border-radius: 50%;
  cursor: pointer;
}

.player-timeline__slider::-moz-range-thumb {
  border: none;
  width: 7px;
  height: 7px;
  background-color: #8f8e94;
  border-radius: 50%;
  cursor: pointer;
}

.player-timeline__slider::-moz-focus-outer {
  border: none;
}

.player-timeline__slider::-moz-range-track {
  border-radius: inherit;
  background: inherit;
}

.player-timeline__slider::-ms-fill-lower,
.player-timeline__slider::-ms-fill-upper {
  background: transparent;
}

.player-timeline__slider::-ms-track {
  border: 2px solid #bdc3c7;
}

.player-artist {
  padding-top: 20px;
  margin: auto;
  width: 182px;
  height: 28px;
  font-size: 23px;
  color: #060606;
}

.player-song {
  margin: auto;
  width: 216px;
  height: 29px;
  font-size: 24px;
  color: #ff2d55;
}

.player-control {
  margin: 30px 0 20px 0;
}

.player-control img {
  width: 42px;
  height: 46px;
}

.player-control button {
  border: none;
  outline: none;
  background: none;
}

.player-control__play {
  margin: 0 33px;
}

.player-volume {
  position: relative;
}

.player-volume img {
  width: 17px;
  height: 14px;
}

.player-volume__less {
  position: absolute;
  bottom: -1px;
  left: 35px;
}

.player-volume__more {
  position: absolute;
  bottom: -1px;
  right: 30px;
}

.player-volume__slider:focus {
  outline: none;
}

.player-volume__slider {
  -webkit-appearance: none;
  width: 265px;
  height: 3px;
  padding: 0px;
  border-radius: 4px;
}

.player-volume__slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 29px;
  height: 29px;
  background-color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
  border: solid 0.3px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  cursor: pointer;
}

.player-volume__slider::-moz-range-thumb {
  width: 29px;
  height: 29px;
  background-color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
  border: solid 0.3px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
   cursor: pointer;
}

.player-volume__slider::-moz-focus-outer {
  border: none;
}

.player-volume__slider::-moz-range-track {
  background: inherit;
  width: 265px;
  height: 3px;
  border-radius: 4px;
  padding: 0px;
}

.player-volume__slider::-ms-fill-lower,
.player-volume__slider::-ms-fill-upper {
  background: transparent;
}

.player-volume__slider::-ms-track {
  border: 2px solid #bdc3c7;
}

.player-telegram {
  margin: auto;
  margin-top: 40px;
  width: 200px;
  height: 28px;
  border-radius: 100px;
  background-color: #ff2d55;
  border: none;
  outline: none;
  font-size: 15px;
  text-align: center;
  color: #ffffff;
}

.player-telegram span {
  vertical-align: middle;
  padding-right: 14px;
}

.player-telegram img {
  width: 24px;
  height: 23px;
  vertical-align: middle;
}

</style>

<template>
  <div class="player">
        <div class="player-cover"></div>
        <div class="player-timeline">
            <div class="player-timeline__slider"></div>
            <span class="player-timeline__elapsed-time">0:36</span>
            <span class="player-timeline__rest-time">-2:59</span>
        </div>
        <h1 class="player-artist">Скриптонит</h1>
        <h2 class="player-song">Вечеринка</h2>
        <div class="player-control">
          <button> <img class="player-control__prev" src="./assets/img/previous.svg"></button>
          <button><img class="player-control__play" src="./assets/img/play.svg"></button>
          <button> <img class="player-control__next" src="./assets/img/next.svg"></button>

        </div>
        <div class="player-volume">
            <img class="player-volume__less" src="./assets/img/less-volume.svg">
            <img class="player-volume__more" src="./assets/img/more-volume.svg">
            <input 
             class="player-volume__slider" 
             type="range" 
             min="0"
             max="100"
             step="any" 
             v-model="volume" 
             :style="{background: `linear-gradient(to right, #8f8e94 ${volume}%,#ddd ${volume}%, #ddd ${100-volume}%)`}">
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
      volume: 100
    };
  }
};
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
}

div {
  margin: auto;
  text-align: center;
}

.player {
  width: 187.5px;
  height: 333.5px;
  background-color: #ffffff;
  border: 0.5px solid #8f8e94;
}

.player-cover {
  margin: 31.5px auto;
  width: 124.5px;
  height: 124.5px;
  border-radius: 5px;
  background-image: url(assets/img/cover.png);
  background-size: cover;
}

.player-timeline {
  width: 155px;
  height: 1.5px;
  border-radius: 2px;
  background-color: #dddddd;
  position: relative;
}

.player-timeline__slider {
  width: 3px;
  height: 3px;
  position: absolute;
  bottom: -1px;
  left: 10px;
  background-color: #8f8e94;
  border-radius: 50%;
}

.player-timeline__elapsed-time {
  position: absolute;
  bottom: -10px;
  left: 0px;
  font-size: 6.5px;
  color: #8c8c8c;
}

.player-timeline__rest-time {
  position: absolute;
  bottom: -10px;
  right: 0px;
  font-size: 6.5px;
  color: #8c8c8c;
}

.player-artist {
  padding-top: 10px;
  margin: auto;
  width: 91px;
  height: 14px;
  font-size: 11.5px;
  color: #060606;
}

.player-song {
  margin: auto;
  width: 107.8px;
  height: 14.5px;
  font-size: 12px;
  color: #ff2d55;
}

.player-control {
  padding: 10px;
}
.player-control img {
  width: 15.8px;
  height: 18px;
}
.player-control button {
  border: none;
  outline: none;
  background: none;
}

.player-control .play {
  padding: 0px 20px 0px 20px;
}

.player-volume {
  position: relative;
}
.player-volume img {
  width: 8.5px;
  height: 7px;
}
.player-volume__less {
  position: absolute;
  bottom: 1px;
  left: 30px;
}

.player-volume__more {
  position: absolute;
  bottom: 1px;
  right: 28px;
}

.player-volume__slider:focus {
  outline: none;
}

.player-volume__slider {
  -webkit-appearance: none;
  width: 104px;
  height: 1.5px;
  padding: 0px;
  border-radius: 2px;
  background-color: #8f8e94;
}
.player-volume__slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14.5px;
  height: 14.5px;
  background-color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0,0,0.3);
  border: solid 0.3px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
}

.player-volume__slider::-moz-range-thumb {
  width: 14.5px;
  height: 14.5px;
  background-color: #ffffff;
  border: solid 0.3px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
}

.player-volume__slider::-moz-focus-outer {
  border: none;
}

.player-volume__slider::-moz-range-track {
  width: 104px;
  height: 1.5px;
  border-radius: 2px;
  background-color: #8f8e94;
  padding: 0px;
}

.player-volume__slider::-ms-fill-lower,
.player-volume__slider::-ms-fill-upper {
  background: transparent;
}
.player-volume__slider::-ms-track {
  border: 1px solid #bdc3c7;
}

.player-telegram {
  margin: auto;
  margin-top: 15px;
  width: 100px;
  height: 14px;
  border-radius: 50px;
  background-color: #ff2d55;
  border: none;
  outline: none;
  font-size: 7.5px;
  text-align: center;
  color: #ffffff;
}
.player-telegram span {
  vertical-align: middle;
  padding-right: 7px;
}
.player-telegram img {
  width: 12px;
  height: 11.5px;
  vertical-align: middle;
}
</style>

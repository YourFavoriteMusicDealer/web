<template>
  <div class="player">
    <audio 
      ref="audio" 
      :src="songData.url" 
      @canplay="isCanPlay = true"
      @play="isPlay = true" 
      @pause="isPlay = false"
      @timeupdate="currentTime = $refs.audio.currentTime"
      @volumechange="volume = $refs.audio.volume"
      @durationchange="duration = $refs.audio.duration"
    />
    <div :class="['player-cover', { 'player-cover_scaled': isPlay }]">
      <div class="player-cover__img" />
    </div>
    <div class="player-timeline"> 
      <span :class="['player-timeline__elapsed-time', { 'player-timeline__elapsed-timeRevind': timelinePercent<15 && isRevind }, { 'player-timeline__elapsed-timeRevidRed': isRevind }]">{{ currentTime | minute }}</span>
      <span :class="['player-timeline__rest-time', { 'player-timeline__rest-timeRevind': timelinePercent>85 && isRevind }]">-{{ duration - currentTime | minute }}</span>
      <input
        v-model="currentTime" 
        :style="{ background: `linear-gradient(to right, ${colorTimeLine} ${timelinePercent}%, #ddd ${timelinePercent}%)` }"
        :max="duration"
        :class="['player-timeline__slider', { 'player-timeline__sliderRevind': isRevind }]"
        type="range"
        min="0"
        step="any"  
        @input="$refs.audio.currentTime = currentTime"
        @mousedown="isRevind = true, colorTimeLine = '#ff2d55'"
        @mouseup="isRevind = false, colorTimeLine = '#8c8c8c'"
      >
    </div>
    <h1 class="player-song">Вечеринка</h1>
    <h2 class="player-artist">Скриптонит</h2>
    <div class="player-control">
      <button class="player-control__prev"><icon name="previous" /></button>
      <button 
        v-show="!isPlay"
        :disabled="!isCanPlay" 
        class="player-control__play" 
        @click="$refs.audio.play()"
      ><icon name="play" /></button>
      <button 
        v-show="isPlay"
        class="player-control__pause" 
        @click="$refs.audio.pause()"
      ><icon name="pause" /></button>
      <button class="player-control__next"><icon name="next" /></button>
    </div>
    <div class="player-volume">
      <icon name="less-volume" class="player-volume__less" />
      <icon name="more-volume" class="player-volume__more" />
      <input
        v-model="volume" 
        :style="{ background: getGradientBackground(volume, 1) }"
        class="player-volume__slider" 
        type="range" 
        min="0"
        max="1"
        step="any" 
        @input="$refs.audio.volume = volume"
      >
    </div>
    <button class="player-telegram">
      <span>Telegram</span>
      <icon name="download" />
    </button>
  </div>
</template>

<script>
export default {
  filters: {
    minute(value) {
      let minutes = Math.floor(value / 60)
      let seconds = Math.round(value - minutes * 60)

      if (seconds === 60) {
        minutes++
        seconds = 0
      }

      if (seconds < 10) {
        seconds = '0' + seconds
      }

      return `${minutes}:${seconds}`
    }
  },
  data() {
    return {
      volume:        1,
      currentTime:   0,
      duration:      0,
      isCanPlay:     false,
      isPlay:        false,
      isRevind:      false,
      colorTimeLine: '#8f8e94',
      songData:      { url: 'http://dlm.mp3party.net/online/1080/1080860.mp3' }
    }
  },
  computed: {
    timelinePercent() {
      return this.currentTime * 100 / this.duration
    }
  },
  methods: {
    getGradientBackground(currentPosition, maxValue) {
      const start = currentPosition * 100 / maxValue

      return `linear-gradient(to right, #8f8e94 ${start}%, #ddd ${start}%)`
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
  background-color: #ffffff;
  padding: 70px 0 35px;
  border-radius: 10px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  margin-top: 30px;
}

.player-cover {
  margin: 0 auto 45px;
  position: relative;
  z-index: 1;
  transition: transform .3s ease;
  will-change: transform;
}

.player-cover__img {
  background-image: url("https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/ec/ce/69/ecce6903-61a7-4950-b282-d0a084650952/contsched.nuyluqdm.jpg/1200x630bb.jpg");
  background-size: cover;
  width: 240px;
  height: 240px;
  border-radius: 5px;
  position: relative;
}

.player-cover__img::before {
  content: '';
  background-image: inherit;
  background-size: cover;
  position: absolute;
  top: 15px;
  right: 0;
  bottom: -15px;
  left: 0;
  z-index: -1;
  opacity: 0;
  filter: blur(25px);
}

.player-cover_scaled {
  transform: scale(1.25);
  animation: scale-cover .5s linear .2s;
}

.player-cover_scaled .player-cover__img::before {
  opacity: .9;
}

.player-timeline {
  position: relative;
}

.player-timeline__elapsed-time,
.player-timeline__rest-time {
  position: absolute;
  bottom: -18px;
  font-size: 15px;
  letter-spacing: .1em;
  color: #8c8c8c;
  transition: transform .1s ease-in;
}

.player-timeline__elapsed-time {
  left: 37px;
}
.player-timeline__elapsed-timeRevidRed{
   color:#ff2d55;
}

.player-timeline__elapsed-timeRevind{
  transform: translateY(12px);
}

.player-timeline__rest-timeRevind{
  transform: translateY(12px);
}

.player-timeline__rest-time {
  right: 37px;
}

.player-timeline__slider:focus {
  outline: none;
}

.player-timeline__slider {
  -webkit-appearance: none;
  padding: 0;
  width: 300px;
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
  transition: all .1s ease-in;
  will-change: all;
}

.player-timeline__sliderRevind::-webkit-slider-thumb {
  transform: scale(4);
  background-color: #ff2d55;
  
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

.player-timeline__sliderRevind::-moz-range-thumb {
  transform: scale(4);
  background-color: #ff2d55;
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
  overflow: hidden;
  margin: 0 30px 0 30px;
  font-size: 1.2em;
  color: #ff2d55;
}

.player-song {
  overflow: hidden;
  margin: 30px 30px 0 30px; 
  font-size: 1.2em;
  font-weight: bold;
  color: #060606;
}

.player-control {
  margin: 10px 0;
}

.player-control button {
  border: none;
  outline: none;
  background: none;
  border-radius: 50%;
  transition: all .2s;
  width: 80px;
  height: 80px;
}

.player-control button:active {
  background: #eee;
  transform: scale(.85);
}

/* Fix filling in Safari */
.player-control button:active svg {
  fill: inherit;
}

.play-enter-active {
  transition: all .3s ease;
}

.player-control__prev svg {
  transform: scale(-1);
}

.player-control__play, .player-control__pause {
  margin: 0 10px;
}

.player-control__play:disabled, .player-control__play[disabled] {
  opacity: .5; 
}

.player-control svg { 
  width: 40px; 
  height: 40px; 
  vertical-align: middle;
} 

.player-volume {
  position: relative;
}

.player-volume__less,
.player-volume__more {
  color: #8f8e94;
  width: 13px;
  height: 13px;
  position: absolute;
  bottom: -1px;
}

.player-volume__less {
  left: 33px;
}

.player-volume__more {
  right: 35px;
}

.player-volume__slider:focus {
  outline: none;
}

.player-volume__slider {
  -webkit-appearance: none;
  width: 255px;
  height: 3px;
  padding: 0px;
  border-radius: 4px;
  margin-right: 5px;
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
  width: 255px;
  margin-right: 5px;
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
  margin: 35px auto 0;
  width: 160px;
  height: 40px;
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
  margin-right: 5px;
}

.player-telegram svg {
  width: 24px;
  height: 23px;
  vertical-align: middle;
}

@keyframes scale-cover {
  20% {
    transform: scale(1.3);
  }
  70% {
    transform: scale(1.245);
  }
  100% {
    transform: scale(1.25);
  }
}

</style>

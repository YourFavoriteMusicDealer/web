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
    <div :class="['player-cover', { 'player-cover_scaled': isPlay }, { 'player-cover_moved': isRevind }]"> 
      <div :style="{ 'background-image': `url(${songData.img})` }" class="player-cover__img" />
    </div>
    <div class="player-timeline"> 
      <span :class="['player-timeline__time', 'player-timeline__time_left', { 'player-timeline__time_moved': timelinePercent<15 && isRevind }, { 'player-timeline__time_highlight': isRevind }]">{{ currentTime | minute }}</span>
      <span :class="['player-timeline__time', 'player-timeline__time_right', { 'player-timeline__time_moved': timelinePercent>85 && isRevind }]">-{{ duration - currentTime | minute }}</span>
      <input
        v-model="currentTime" 
        :style="{ background: getGradientBackground(currentTime, duration, isRevind) }"
        :max="duration"
        :class="['player-timeline__slider', { 'player-timeline__slider_change-thumb': isRevind }]"
        type="range"
        min="0"
        step="any"  
        @input="$refs.audio.currentTime = currentTime"
        @mousedown="isRevind = true"
        @mouseup="isRevind = false"
      >
    </div>
    <h1 class="player-song">{{ songData.title }}</h1>
    <h2 class="player-artist">{{ songData.artist }}</h2>
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
    <a :href="telegramSongLink"> 
      <button class="player-telegram">
        <span>Telegram</span>
        <icon name="download" />
      </button>
    </a> 
  </div>
</template>

<script>
import axios from 'axios'

export default {
  filters: {
    minute(value) {
      let hours = Math.floor(value / 3600)
      let minutes = Math.floor(value / 60)
      let seconds = Math.round(value - minutes * 60)

      if (seconds === 60) {
        minutes++
        seconds = 0
      }

      if (seconds < 10) {
        seconds = '0' + seconds
      }

      if (minutes >= 60) {
        minutes = minutes - (hours * 60)
        if (minutes < 10) {
          minutes = '0' + minutes
        }    
      }

      if (minutes === 60) {
        hours++
        minutes = '0' + 0
      } 

      return hours >= 1 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`
    }
  },
  props: {
    telegramMessageId: {
      type:     Number,
      required: true
    } 
  },
  data() {
    return {
      volume:      1,
      currentTime: 0,
      duration:    0,
      isCanPlay:   false,
      isPlay:      false,
      isRevind:    false,
      songData:    {}
    }
  },
  computed: {
    timelinePercent() {
      return this.currentTime * 100 / this.duration
    },
    telegramSongLink() {
      return `tg://resolve?domain=jonkofee_music&post=${this.telegramMessageId}`
    }
  },
  created() {
    this.initSong()
  },
  methods: {
    getGradientBackground(currentPosition, maxValue, isHighlight) {
      const start = currentPosition * 100 / maxValue
      const color = isHighlight ? '#ff2d55' : '#8c8c8c'

      return `linear-gradient(to right, ${color} ${start}%, #ddd ${start}%)`
    },
    initSong() {
      axios.get(`https://www.jonkofee-music.ru/song/${this.telegramMessageId}`)
        .then(({ data }) => this.songData = data)
        .catch(console.warn)
    }
  }
}
</script>
<style lang="scss" scoped>

$primary-color: #ff2d55;

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

  &__img {
    background-size: cover;
    width: 240px;
    height: 240px;
    border-radius: 5px;
    position: relative;
  }

  &__img::before {
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

  &_scaled {
    transform: scale(1.25);
    animation: scale-cover .5s linear .2s;
  }

  &_moved {
    transform: translateY(-20px);
  }

  &_scaled &__img::before {
    opacity: .9;
  }
}

.player-timeline {
  position: relative;

  &__time {
    position: absolute;
    bottom: -18px;
    font-size: 15px;
    letter-spacing: .1em;
    color: #8c8c8c;
    transition: transform .1s ease-in;
  }

  &-timeline__time_highlight { 
    color: $primary-color;
  }

  &__time_moved {
    transform: translateY(12px);
  }

  &__time_right {
    right: 37px;
  }

  &__slider:focus {
    outline: none;
  }

  &__slider {
    -webkit-appearance: none;
    padding: 0;
    width: 300px;
    height: 4px;
    border-radius: 2px;
    background-color: #8f8e94;
  }

  &__slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 7px;
    height: 7px;
    background-color: #8f8e94;
    border-radius: 50%;
    cursor: pointer;
    backface-visibility: hidden;
    transition: all .1s ease-in;
    will-change: all;
  }

  &__slider_change-thumb::-webkit-slider-thumb {
    transform: scale(4);
    background-color: $primary-color;
  }

  &__slider::-moz-range-thumb {
    border: none;
    width: 7px;
    height: 7px;
    background-color: #8f8e94;
    border-radius: 50%;
    cursor: pointer;
  }

  &__slider_change-thumb::-moz-range-thumb {
    transform: scale(4);
    background-color: $primary-color;
  }

  &__slider::-moz-focus-outer {
    border: none;
  }

  &__slider::-moz-range-track {
    border-radius: inherit;
    background: inherit;
  }

  &__slider::-ms-fill-lower,
  &__slider::-ms-fill-upper {
    background: transparent;
  }

  &__slider::-ms-track {
    border: 2px solid #bdc3c7;
  }
}

.player-artist {
  overflow: hidden;
  margin: 0 30px 0 30px;
  font-size: 1.2em;
  color: $primary-color;
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

  button {
    border: none;
    outline: none;
    background: none;
    border-radius: 50%;
    transition: all .2s;
    width: 80px;
    height: 80px;
  }

  button:active {
    background: #eee;
    transform: scale(.85);
  }
  /* Fix filling in Safari */
  button:active svg {
    fill: inherit;
  }

  &__prev svg {
    transform: scale(-1);
  }

  &__play, &__pause {
    margin: 0 10px;
  }

  &__play:disabled, 
  &__play[disabled] {
    opacity: .5; 
  }

  svg { 
    width: 40px; 
    height: 40px; 
    vertical-align: middle;
  } 
}

.player-volume {
  position: relative;

  &__less,
  &__more {
    color: #8f8e94;
    width: 13px;
    height: 13px;
    position: absolute;
    bottom: -1px;
  }

  &__less {
    left: 33px;
  }

  &__more {
    right: 35px;
  }

  &__slider {
  -webkit-appearance: none;
    width: 255px;
    height: 3px;
    padding: 0px;
    border-radius: 4px;
    margin-right: 5px;

    &:focus {
      outline: none;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 29px;
      height: 29px;
      background-color: #ffffff;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
      border: solid 0.3px rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      cursor: pointer;
    }

     &::-moz-range-thumb {
      width: 29px;
      height: 29px;
      background-color: #ffffff;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
      border: solid 0.3px rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      cursor: pointer;
    }
    
    &::-moz-focus-outer {
      border: none;
    }

    &::-moz-range-track {
      background: inherit;
      width: 255px;
      margin-right: 5px;
      height: 3px;
      border-radius: 4px;
      padding: 0px;
    }

    &::-ms-fill-lower,
    &::-ms-fill-upper {
      background: transparent;
    }

    &::-ms-track {
      border: 2px solid #bdc3c7;
    }
  }
}

.player-telegram {
  cursor: pointer;
  margin: 35px auto 0;
  width: 160px;
  height: 40px;
  border-radius: 100px;
  background-color: $primary-color;
  border: none;
  outline: none;
  font-size: 15px;
  text-align: center;
  color: #ffffff;

  &:hover {
    background-color: darken($primary-color,20%);
  }

  span {
    vertical-align: middle;
    margin-right: 5px;
  }

  svg {
    width: 24px;
    height: 23px;
    vertical-align: middle;
  }
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

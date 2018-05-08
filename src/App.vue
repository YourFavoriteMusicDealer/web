<template>
  <div class="framing">
        <div class="cover"></div>
        <div class="playline">
            <div class="play-slider"></div>
            <span class="elapsed-time">0:36</span>
            <span class="rest-time">-2:59</span>
        </div>
        <h1 class="artist">Скриптонит</h1>
        <h2 class="title">Вечеринка</h2>
        <div class="control">
            <img class="previous" src="./assets/img/previous.svg">
            <img class="play" src="./assets/img/play.svg">
            <img class="next" src="./assets/img/next.svg">
        </div>
        <div class="volume">
            <img class="less" src="./assets/img/less-volume.svg">
            <img class="more" src="./assets/img/more-volume.svg">
            <div class="slider"></div>
        </div>
        <button class="telegram">
            <span>Telegram</span>
            <img src="./assets/img/download.svg">
        </button>
    </div>
</template>

<script>
export default {

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
  font-family: 'SF';
}

div {
    margin: auto;
    text-align: center;
}

.framing {
    width: 187.5px;
    height: 333.5px;
    background-color: #ffffff;
    border: 0.5px solid #8f8e94;
    padding-top: 14px;
}

.cover {
    margin: 31.5px auto;
    width: 124.5px;
    height: 124.5px;
    border-radius: 5px;
    background-image: url(assets/img/cover.png);
    background-size: cover;
}

.control {
    padding: 17px;
}

.playline {
    width: 155px;
    height: 1.5px;
    border-radius: 2px;
    background-color: #dddddd;
    position: relative;
}

.play-slider {
    width: 3px;
    height: 3px;
    position: absolute;
    bottom: -1px;
    left: 10px;
    background-color: #8f8e94;
    border-radius: 50%;
}

.elapsed-time {
    position: absolute;
    bottom: -10px;
    left: 0px;
    font-size: 6.5px;
    color: #8c8c8c;
}

.rest-time {
    position: absolute;
    bottom: -10px;
    right: 0px;
    font-size: 6.5px;
    color: #8c8c8c;
}

.artist {
    padding-top: 20px;
    margin: auto;
    width: 91px;
    height: 14px;
    font-size: 11.5px;
    color: #060606;
}

.title {
    margin: auto;
    width: 107.8px;
    height: 14.5px;
    font-size: 12px;
    color: #ff2d55;
}

.volume {
    width: 104px;
    height: 1.5px;
    border-radius: 2px;
    background-color: #8f8e94;
    position: relative;
}

.volume .slider {
    width: 14.5px;
    height: 14.5px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.3);
    background-color: #ffffff;
    border: solid 0.3px rgba(0, 0, 0, 0.15);
    border-radius: 50px;
    position: absolute;
    bottom: -7px;
    right: 10px;
}

button {
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

span {
    vertical-align: middle;
}

img {
    vertical-align: middle;
}

.volume .less {
    position: absolute;
    bottom: -3px;
    left: -10px;
}

.volume .more {
    position: absolute;
    bottom: -3px;
    right: -12px;
}

button span {
    padding-right: 7px;
}

.control img {
  width: 15.8px;
  height: 18px;
}

.control .play {
  padding: 0px 20px 0px 20px;
}

.volume img {
  width: 8.5px;
  height: 7px;
}

.telegram img {
  width: 12px;
  height: 11.5px;
}

</style>

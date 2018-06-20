<template>
  <div class="not-found">
    <p class="not-found__error">E<span>r</span>ror</p>
    <p class="not-found__code">4<span>0</span><span>4</span></p>
  </div>
</template>

<style lang="scss">




.not-found {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #111111; 
  font-size: 75px;
  font-family: 'Monoton';
  text-shadow: 0 0 80px red,0 0 30px FireBrick,0 0 6px DarkRed;
  color: red;

  p { 
    margin:0; 
  }

  &__error {
    color: #fff;
    text-shadow: 0 0 80px #ffffff,0 0 30px #008000,0 0 6px #0000ff;
  }

  &__error span {
    animation: upper 11s linear infinite;
  }

  &__code span:nth-of-type(2) {
    animation: lower 10s linear infinite;
  }

  &__code span:nth-of-type(1) {
    text-shadow: none;
    opacity:.4;
  }
}

@keyframes upper {
  0%,19.999%,22%,62.999%,64%, 64.999%,70%,100% {
    opacity:.99; text-shadow: 0 0 80px #ffffff,0 0 30px #008000,0 0 6px #0000ff;
  }
  20%,21.999%,63%,63.999%,65%,69.999% {
    opacity:0.4; text-shadow: none; 
  }
}

@keyframes lower {
  0%,12%,18.999%,23%,31.999%,37%,44.999%,46%,49.999%,51%,58.999%,61%,68.999%,71%,85.999%,96%,100% {
    opacity:0.99; text-shadow: 0 0 80px red,0 0 30px FireBrick,0 0 6px DarkRed;
  }
  19%,22.99%,32%,36.999%,45%,45.999%,50%,50.99%,59%,60.999%,69%,70.999%,86%,95.999% { 
    opacity:0.4; text-shadow: none; 
  }
}

</style>
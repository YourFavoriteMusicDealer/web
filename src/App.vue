<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style>
/** Regular */
@font-face {
  font-family: "SF";
  font-weight: normal;
  src: url("assets/fonts/SFUIDisplay-Regular.woff");
}

@font-face {
  font-family: "Monoton";
  font-weight: normal;
  src: url("assets/fonts/Monoton.woff");
}

* {
  letter-spacing: .05em;
  font-weight: 400;
}

body{
  margin: 0px;
}
</style>
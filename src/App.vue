<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
/** Regular */
@font-face {
  font-family: "SF";
  font-weight: normal;
  src: url("fonts/SFUIDisplay-Regular.woff");
}

* {
  font-family: "SF";
  letter-spacing: .05em;
  font-weight: 400;
}
</style>
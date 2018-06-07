<template>
  <div>{{ notFoundComponent }}</div>
</template>

<script>
export default {
  data() {
    return {
      notFoundComponent: '404'
    }
  }
}
</script>

<style>

div {
  text-align: center;
  color: #ff2d55;
  font-size: 100px;
}

</style>
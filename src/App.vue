<template>
  <div id="app" class="roboto">
    <router-view/>
  </div>
</template>

<script>

export default {
  
}
</script>

<style lang="scss">
#app {
  background: white;
  // Adding this property will mess with the sal.js transition on the about section and the banner. 
  // dont't add it
  // overflow-x: hidden;
}

</style>

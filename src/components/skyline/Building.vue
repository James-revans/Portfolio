<template>
  <div class="building" :style="style">
  </div>
</template>

<script>
export default {
    props: ['width', 'height'],
    computed: {
        style() {
            return 'width:' + this.width + ';' + 'height:' + this.height + ';';
        }
    }
  
}
</script>

<style lang="scss">
.building {
    transform: scaleY(0.8);

}

</style>
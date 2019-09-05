<template>
  <div class="building-r-two">
      <Building class="building-r-two__building-two" v-for="(item, index) in bArrayTwo" :key="index"
      :width="item.width"
      :height="item.height"/>
      
  </div>
</template>

<script>
import Building from "@/components/skyline/Building.vue";
import bArrayTwo from "../../../buildingData/bArrayTwo.json";
export default {
    components: {
        Building
    },
    data() {
        return {
            bArrayTwo
        }
    }
  
}
</script>


<style lang="scss">
.building-r-two {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100vw;
    &__building-two {
        background: rgb(66, 66, 66);
    }

}

</style>
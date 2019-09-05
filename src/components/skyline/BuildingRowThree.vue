<template>
  <div class="building-r-three">
      <Building class="building-r-three__building-three" v-for="(item, index) in bArrayThree" :key="index"
      :width="item.width"
      :height="item.height"/>
      
  </div>
</template>

<script>
import Building from "@/components/skyline/Building.vue";
import bArrayThree from "../../../buildingData/bArrayThree.json";
export default {
    components: {
        Building
    },
    data() {
        return {
            bArrayThree
        }
    }
  
}
</script>


<style lang="scss">
.building-r-three {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100vw;
    
    &__building-three {
        background: rgb(101, 94, 104);
    }

}

</style>
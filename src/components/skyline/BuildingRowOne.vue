<template>
  <div class="building-r-one">
      <Building class="building-r-one__building" v-for="(item, index) in bArrayOne" :key="index"
      :width="item.width"
      :height="item.height"/>
      
  </div>


</template>

<script>
import Building from "@/components/skyline/Building.vue";
import bArrayOne from "../../../buildingData/bArrayOne.json";
export default {
    components: {
        Building
    },
    data() {
        return {
            bArrayOne
        }
    }
  
}
</script>

<style lang="scss">
.building-r-one {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100vw;
    &__building {
        background: rgb(22, 22, 22);
    }

}

</style>
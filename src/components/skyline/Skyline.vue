<template>
    <div class="skyline" id="parallax-container">
        <BuildingRowThree class="group-one buildings"/>
        <BuildingRowTwo class="group-two buildings"/>
        <BuildingRowOne class="group-three buildings"/>
        <div class="border">
          <div class="hill-one"></div>
          <div class="hill-two"></div>
        </div>
    </div>
</template>

<script>
import BuildingRowOne from '@/components/skyline/BuildingRowOne.vue'
import BuildingRowTwo from '@/components/skyline/BuildingRowTwo.vue'
import BuildingRowThree from '@/components/skyline/BuildingRowThree.vue'


// window.addEventListener('scroll', () => {
//   let parent = document.getElementById('parallax-container');
//   let children = parent.getElementsByClassName('buildings');
//   for(let i = 0; i < children.length; i++) {
//     children[i].style.transform = 'translateY(-' + (window.pageYOffset * (0.8 * i) / children.length) + 'px)';
//   }
// }, false)


export default {
  name: 'app',
  components: {
    BuildingRowOne,
    BuildingRowTwo,
    BuildingRowThree,
  },
}
</script>

<style lang="scss">
.skyline {
    //background-image: linear-gradient(to bottom, #b9ff75, #c3d442, #c4a918, #bd7e00, #af5300);
    height: 100vh;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    
    .border {
        width: 100%;
        height: 200vh;
        background: rgb(22, 22, 22);
        position: absolute;
        left: 0;
        top: 90vh;

        .hill-one {
          width: 100%;
          height: 9vw;
          background: rgb(0, 78, 0);
          border-top-right-radius: 100%;
          position: absolute;
          z-index: 2;
          top: 0;  
          
        }
        .hill-two {
          width: 100%;
          height: 8vw;
          background: rgb(0, 65, 0);
          border-top-left-radius: 100%;
          z-index: 1;
        }
    }
}

#parallax-container {

  display: block;
  height: 100vh;

  .buildings {
    position: fixed;
    top: 0;
    background-position: center !important;
    transform: translateY(0px);
    height: 100vh;
    width: 100%;
  }
  
}


</style>
<template>
<div>
    <div class="banner pontano">
        <h1>James Evans</h1>
        <h2>Front End Web Developer</h2>
    </div>
    <div class="arrow text-center" id="banner">
        <div class="arrow p-3"><i class="fas fa-arrow-down"></i></div>
    </div>
    <div class="skyline" id="parallax-container">
        <div class="skyline__sun"
          data-sal="slide-down"
          data-sal-delay="500"
          data-sal-duration="4000"
          data-sal-easing="ease-out-bounce"></div>
        <div class="skyline__moon"
          data-sal="slide-up"
          data-sal-delay="1000"
          data-sal-duration="4000"
          data-sal-easing="ease-out-bounce"></div>
        <BuildingRowThree class="group-one buildings"/>
        <BuildingRowTwo class="group-two buildings"/>
        <BuildingRowOne class="group-three buildings"/>
        <div class="skyline__border-hill buildings">
          <div class="hill-one"></div>
          <div class="hill-two"></div>
      </div>
    </div>
</div>
</template>

<script>


import BuildingRowOne from '@/components/skyline/BuildingRowOne.vue'
import BuildingRowTwo from '@/components/skyline/BuildingRowTwo.vue'
import BuildingRowThree from '@/components/skyline/BuildingRowThree.vue'


window.addEventListener('scroll', () => {
  let parent = document.getElementById('parallax-container');
  let children = parent.getElementsByClassName('buildings');
  for(let i = 0; i < children.length; i++) {
    children[i].style.transform = 'translateY(-' + (window.pageYOffset * (0.5 * i) / children.length) + 'px)';
  }
}, false)


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

.banner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: white;
}

.arrow {
  color: rgb(255, 255, 255); 
  font-size: 40px;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.4s;
  z-index: 5;
  &:hover {
      cursor: pointer;
      transform: translateX(-50%)scale(1.2);
      
  }
}

.skyline {
    background-image: linear-gradient(to bottom, #5352fc, #bf2ad3, #ef00a2, #ff0c72, #ff4949, #ed5534, #d95f21, #c5660e, #9a4f10, #713a0f, #4a260c, #271300);
    position: relative;
    bottom: 0;
    left: 0;
    display: block;
    height: 150vh;

    .buildings {
      position: fixed;
      top: 0;
      background-position: center !important;
      transform: translateY(0px);
      height: 100vh;
      width: 100%;
  }


  &__border-hill {
    width: 100%;
    background: rgb(22, 22, 22);
    position: absolute;
    left: 0;
    border: none !important;

      .hill-one {
        width: 100%;
        height: 50vw;
        background: rgb(0, 78, 0);
        border-top-right-radius: 100%;
        position: absolute;
        z-index: 2;
        top: 0;  
      }
      .hill-two {
        width: 100%;
        height: 50vw;
        background: rgb(0, 65, 0);
        border-top-left-radius: 100%;
        z-index: 1;
      }
  }

    
      &__sun {
        position: absolute;
        top: 100px;
        left: 150px;
        height: 100px;
        width: 100px;
        border-radius: 100%;
        background: rgb(255, 255, 78);
        box-shadow: 0 0 90px 30px yellow;
            @media only screen and (max-width: 800px) {
                top: 100px;
                left: 35px;
                height: 50px;
                width: 50px;
        } 
    }

    &__moon {
        position: absolute;
        top: 100vh;
        left: 150px;
        height: 100px;
        width: 100px;
        border-radius: 100%;
        background: rgb(255, 255, 255);
        box-shadow: 0 0 90px 30px rgb(255, 255, 255);
            @media only screen and (max-width: 800px) {
                top: 100vh;
                left: 35px;
                height: 50px;
                width: 50px;
        } 
    }
}
#parallax-container {
  .skyline__border-hill {
    height: 10vw;
    top: 90vh;
  }
}






</style>
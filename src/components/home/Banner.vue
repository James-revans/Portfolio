<template>
   <div class="banner">
      <div class="main-content">
         <div
            class="moon"
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="1000"
            data-sal-easing="ease-out-bounce"
         >
            <div class="moonHole-one"></div>
            <div class="moonHole-two"></div>
            <div class="moonHole-three"></div>
         </div>
         <div
            class="sun"
            data-sal="slide-down"
            data-sal-delay="500"
            data-sal-duration="4000"
            data-sal-easing="ease-out-bounce"
         ></div>
         <div class="cloud cloud-one"></div>
         <div class="cloud cloud-two"></div>
      </div>
      <div class="banner__container text-center" id="banner">
         <Mountains />
         <Landscape />
         <div class="banner__container__caption">
            <h1 class="anton my-name">James Evans</h1>
            <h2 class="roboto mb-4">Front End Web Developer</h2>
            <Nav />
         </div>
         <div class="banner__container__arrow p-3">
            <a href="#projects"><i class="fas fa-arrow-down"></i></a>
         </div>
      </div>
   </div>
</template>

<script>
import sal from 'sal.js';
import Landscape from '@/components/home/BannerLandscape';
import Mountains from '@/components/home/Mountains';
import Nav from '@/components/nav/Nav';
export default {
   components: {
      Landscape,
      Mountains,
      Nav
   },
   data() {
      return {};
   },
   mounted() {
      sal();
   }
};
</script>

<style lang="scss">
.banner {
   background-image: linear-gradient(
      to bottom,
      #318cff,
      #ac79ea,
      #e765c1,
      #ff608f,
      #ff715f,
      #f06e4e,
      #e06b3d,
      #cf692d,
      #a04833,
      #6c2e2d,
      #381b1f,
      #000000
   );
   width: 100%;
   // overflow: hidden;

   .main-content {
      min-height: 300vh;

      .sun {
         position: absolute;
         top: 80px;
         left: 80px;
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

      .moon {
         position: absolute;
         top: 320vh;
         left: 150px;
         height: 100px;
         width: 100px;
         border-radius: 100%;
         background: rgb(240, 240, 240);
         box-shadow: 0 0 80px 15px rgb(201, 201, 201);
         @media only screen and (max-width: 800px) {
            top: 220vh;
            left: 35px;
            height: 50px;
            width: 50px;
         }
         .moonHole-one,
         .moonHole-two,
         .moonHole-three {
            position: absolute;
            top: 18px;
            left: 20px;
            height: 22px;
            width: 22px;
            border-radius: 100%;
            background: rgba(128, 128, 128, 0.192);
            @media only screen and (max-width: 800px) {
               display: none;
            }
         }
         .moonHole-two {
            top: 60px;
            left: 25px;
            width: 30px;
            height: 30px;
         }
         .moonHole-three {
            top: 40px;
            left: 70px;
            width: 12px;
            height: 12px;
         }
      }
      .cloud {
         position: absolute;
         width: 100px;
         height: 50px;
         background: white;
         top: 20%;
         -webkit-animation: cloud 15s infinite linear;
         animation: cloud 15s infinite linear;
         z-index: 1;
         border-radius: 50%;
         overflow: hidden;
         @media only screen and (max-width: 800px) {
            transform: scale(0.5);
         }
      }
      .cloud-one {
         @media only screen and (max-width: 800px) {
            display: none;
         }
      }
      @-webkit-keyframes cloud {
         0% {
            left: -100px;
         }
         100% {
            left: 100vw;
         }
      }
      @keyframes cloud {
         0% {
            left: -100px;
         }
         100% {
            left: 100vw;
         }
      }

      .cloud-two {
         top: 30%;
         -webkit-animation: cloud-two 30s infinite linear;
         animation: cloud-two 30s infinite linear;
         z-index: 2;
         overflow: hidden;
      }
      @-webkit-keyframes cloud-two {
         0% {
            right: 0px;
         }
         100% {
            right: 1400px;
         }
      }
      @keyframes cloud-two {
         0% {
            right: 0px;
         }
         100% {
            right: 1400px;
         }
      }
   }
   &__container {
      position: sticky;
      bottom: 0;
      height: 100vh;
      width: 100vw;
      overflow: hidden;

      h1 {
         font-size: 200px;
         font-weight: bold;
      }
      &__caption {
         position: absolute;
         color: white;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         padding: 15px;
         z-index: 2;
         text-shadow: 1px 0px #181818;
         @media only screen and (max-width: 480px) {
            width: 80%;
            h1 {
               font-size: 35px;
            }
            h2 {
               font-size: 25px;
            }
         }
      }
      &__arrow {
         color: rgb(255, 255, 255);
         font-size: 40px;
         position: absolute;
         bottom: 5%;
         left: 50%;
         transform: translateX(-50%);
         transition: 0.4s;
         z-index: 5;
         a {
            color: white;
            &:hover {
               color: white;
            }
         }
         &:hover {
            cursor: pointer;
            transform: translateX(-50%) scale(1.5);
         }
      }
      &__border {
         background: rgb(255, 255, 255);
         height: 120px;
         width: 100%;
         z-index: 5;
         position: absolute;
         bottom: -120px;
      }
   }
}
</style>

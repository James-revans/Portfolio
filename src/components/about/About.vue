<template>
   <div
      id="about"
      data-sal="slide-up"
      data-sal-delay="500"
      data-sal-duration="900"
      data-sal-easing="ease-out-bounce"
      class="about d-md-flex align-items-center"
   >
      <div class="about__text">
         <h1>ABOUT ME</h1>

         <p>
            Hi! I'm James Evans, a front-end web developer from Seattle,
            Washington. I'm currently a developer at M2 Information Systems and
            Qudo Creative where I have contributed to the design and development
            of numerous products using cutting edge frameworks and technologies.
            I am an experienced developer in the field and have a strong drive
            for learning all things web related.
         </p>
         <a data-scroll href="#contact" class="about__text__button">CONTACT</a>
      </div>
      <div class="about__photo">
         <img src="../../assets/images/james-cutout.png" />
      </div>
   </div>
</template>
<script>
import sal from 'sal.js';

export default {
   mounted() {
      sal({
         threshold: 0.25
      });
   }
};
</script>

<style lang="scss">
.about {
   background: #ffffff;
   height: 100%;
   width: 100%;
//    padding-top: 50px;
//    padding-bottom: 50px;

   @media only screen and (max-width: 480px) {
      padding-top: 50px;
   }

   &__photo {
      position: relative;
      width: 100%;
      text-align: center;
      margin: 0 auto;
      z-index: 0;
      //   margin-bottom: -90px;
    //   height: 30%;

      img {
         width: 80%;
      }
      @media only screen and (max-width: 1024px) {
         padding-top: 60px;
      }
   }

   &__text {
      margin: 0 10%;
      font-size: 20px;
      width: 100%;

      p {
         border-top: solid thick black;
         padding-top: 20px;
      }

      a {
         background: rgb(19, 19, 19);
         color: white;
         border: none;
         padding: 10px 40px;
         border-radius: 2px;
         box-shadow: 0px 2px 6px 2px rgb(175, 175, 175);
         transition: 0.2s;

         &:hover {
            border-color: white;
            text-decoration: none;
            background: white;
            color: black;
            transition: 0.3s;
         }
         &:focus {
            color: white;
         }
      }

      @media only screen and (max-width: 1024px) {
         margin: 0 auto;
         padding: 0 20px;
      }
   }
}
</style>

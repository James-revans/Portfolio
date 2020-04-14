<template>
   <div class="project-modal">
      <div
         @click="$emit('closeModal', false)"
         class="project-modal__wrapper"
      ></div>
      <div @click="$emit('closeModal', false)" class="project-modal__close">
         <i class="fas fa-times"></i>
      </div>
      <div class="project-modal__content">
         <h1>{{ project }}</h1>
         <div class="project-modal__content__img">
            <img :src="getImgUrl()" />
         </div>
         <div class="project-modal__content__text">
            <h6 v-for="(item, index) in tools" :key="index" class="p-2">
               {{ item }}
            </h6>
            <p>{{ description }}</p>
            <a v-if="url !== ''" target="_blank" v-bind:href="url">VISIT</a>
            <a v-if="code !== ''" target="_blank" v-bind:href="code">GITHUB</a>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: ['project', 'description', 'tools', 'img', 'url', 'code'],
   data() {
      return {};
   },
   methods: {
      getImgUrl() {
         return require('../../assets/images/' + this.img);
      },
   },
   created() {
      document.body.style.overflowY = 'hidden';
   },
};
</script>

<style lang="scss">
.project-modal {
   position: fixed;
   width: 100%;
   height: 100%;
   bottom: 0;
   left: 0;
   z-index: 2;

   &__wrapper {
      background: rgba(0, 0, 0, 0.603);
      position: absolute;
      width: 100vw;
      height: 100%;
      overflow: hidden;
      bottom: 0;
      left: 0;
   }
   &__close {
      position: absolute;
      // background: rgb(0, 0, 0);
      padding: 0 8px;
      border-radius: 5px;
      top: 5%;
      right: 15%;
      color: white;
      font-size: 25px;
      transition: 0.2s;
      z-index: 1000;
      &:hover {
         cursor: pointer;
         transform: scale(1.2);
         transition: 0.2s;
      }
      @media (max-width: 800px) {
         top: 0%;
         right: 2%;
      }
   }

   &__content {
      width: 100%;
      max-width: 600px;
      position: absolute;
      bottom: 50%;
      left: 50%;
      transform: translate(-50%, 50%);
      background: rgba(29, 35, 53, 0.959);
      border-radius: 2px;
      z-index: 3;
      color: white;
      h1 {
         text-align: center;
         padding: 10px;
         padding-top: 20px;
         font-size: 30px;
         @media only screen and (max-width: 650px) {
            font-size: 20px;
         }
      }
      @media only screen and (max-width: 800px) {
         bottom: 0;
         transform: translate(-50%, 0%);
      }

      &__img {
         width: 100%;
         background: rgba(39, 47, 71, 0.959);
         img {
            width: 80%;
            padding: 2% 0;
            height: auto;
            margin: auto;
            display: block;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            // border-bottom: solid 1px rgb(219, 219, 219);
         }
      }

      &__text {
         // color: white;
         padding: 40px;
         padding-top: 20px;
         @media only screen and (max-width: 650px) {
            padding: 20px;
         }
         h1 {
            padding-bottom: 10px;
            font-size: 30px;
            @media only screen and (max-width: 650px) {
               font-size: 20px;
            }
         }
         h6 {
            background: rgb(96, 146, 255);
            color: white;
            display: inline-block;
            margin-right: 10px;
            border-radius: 1px;
            // box-shadow: 0px 2px 6px 1px rgb(175, 175, 175);
            font-size: 12px;
         }
         p {
            padding: 30px 0px 20px 0px;
            @media only screen and (max-width: 650px) {
               padding: 15px 0px 5px 0px;
               font-size: 13px;
            }
         }
         a {
            padding: 10px 25px;
            margin-right: 10px;
            background: black;
            color: white;
            // box-shadow: 0px 2px 6px 2px rgb(175, 175, 175);
            // box-shadow: 0px 2px 6px 2px rgb(0, 6, 22);
            &:hover {
               color: white;
            }
            @media only screen and (max-width: 650px) {
               font-size: 13px;
            }
         }
      }
   }
}
</style>

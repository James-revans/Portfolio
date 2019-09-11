<template>
    <div class="blade">
        <div data-sal="slide-right" data-sal-delay="100" data-sal-duration="800" data-sal-easing="ease-out-bounce" class="blade__img">
            <div @click="viewMore = true" class="blade__img__link">
                <p class="pontano">{{ project }}</p>
                <button>VIEW MORE</button>
            </div>
            <img class="" :src="getImgUrl()">
            <div class="blade__img__tools"><h6 v-for="(item, index) in tools" :key="index" class="p-2">{{ item }}</h6></div>
        </div>
        <ProjectModal v-show="viewMore" v-on:closeModal="viewMore = false"
        :project="project"
        :description="description"
        :tools="tools"  
        :img="img"
        :url="url"/>
    </div>
</template>

<script>

import ProjectModal from "@/components/projects/ProjectModal";
import sal from "sal.js";

export default {    
    props: ['project', 'description', 'tools', 'img', 'url'],
    components: {
        ProjectModal

    },
    data() {
        return {
            viewMore: false
            
        }
    },
    methods: {
        getImgUrl() {
            return require('../../assets/images/' + this.img)
        },

    },
    mounted() {
        sal();
    }
}
</script>

<style lang="scss">
.blade {
    position: relative;
    padding: 25px;
    width: 500px;

    &__img {
        position: relative;
        width: 100%;
        
        img {
            width: 100%;
            border-radius: 2px;
            border: solid 1px rgb(199, 199, 199);
            box-shadow: 0px 2px 12px 2px rgb(196, 196, 196);
            
        }
        &__tools {
            position: absolute;
            bottom: 1%;
            right: 1%;
            text-align: right;
            h6 {
                background: rgb(96, 146, 255);
                color: white;
                display: inline-block;
                margin-right: 10px;
                border-radius: 1px;
                box-shadow: 0px 2px 6px 1px rgba(56, 151, 96, 0.582);
                @media only screen and(max-width: 800px) {
                    font-size: 12px;
                }
            }
        }


        @media only screen and (max-width: 800px) {
            width: 100%;
        }

        &__link {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 2px;
            background: #000E30;
            opacity: 0;
            z-index: 1;
            transition: 0.6s;
            p {
                text-align: center;
                position: absolute;
                top: 20%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
                font-size: 23px;
                font-weight: 100;
            }
            button {
                position: absolute;
                bottom: 20%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
                background: transparent;
                border: solid 2px white;
                padding: 10px 25px;
                transition: 0.5s;

                &:hover {
                    transition: 0.3s;
                    background: white;
                    color: #000E30;
                    
                }

            }
            &:hover {
                opacity: 0.9;
                transition: 0.5s;
                cursor: pointer;
            }

        }
    }
}

</style>
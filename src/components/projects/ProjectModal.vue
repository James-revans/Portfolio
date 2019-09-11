<template>
    <div class="project-modal">
        <div class="project-modal__content">
            <div @click="$emit('closeModal', false)" class="project-modal__content__close"><i class="fas fa-times"></i></div>
            <img class="" :src="getImgUrl()">
            <div class="project-modal__content__text">
                <h1>{{ project }}</h1>
                <h6 v-for="(item, index) in tools" :key="index" class="p-2">{{ item }}</h6>
                <p>{{ description }}</p>
                <a target="_blank" v-bind:href="url">VISIT PROJECT</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['project', 'description', 'tools', 'img', 'url'],
    data() {
        return {

        }
    },
    methods: {
        getImgUrl() {
            return require('../../assets/images/' + this.img)
        },
    }
}
</script>

<style lang="scss">


.project-modal {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.603);
    bottom: 0;
    left: 0;
    z-index: 2;
    overflow: hidden;

    &__content {
        max-width: 500px;
        min-width: 280px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        border-radius: 5px;
        z-index: 3;
        
        &__close {
            position: absolute;
            background: rgb(0, 0, 0);
            padding: 0 8px;
            border-radius: 5px;
            top: 1%;
            right: 3%;
            color: white;
            font-size: 25px;
            &:hover {
                cursor: pointer;
            }
        }
        
        img {
            width: 100%;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            border-bottom: solid 1px rgb(219, 219, 219);

        }
        &__text {
            padding: 40px;
            padding-top: 20px;
            @media only screen and (max-width: 650px) {
                padding: 20px;
            }
            h1 {
                padding-bottom: 10px;
                font-size: 30px;
            }
            h6 {
                background: rgb(96, 146, 255);
                color: white;
                display: inline-block;
                margin-right: 10px;
                border-radius: 1px;
                box-shadow: 0px 2px 6px 1px rgb(175, 175, 175);
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
                background: black;
                color: white;
                box-shadow: 0px 2px 6px 2px rgb(175, 175, 175);
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
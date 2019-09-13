<template>
    <div class="banner">
        <div class="moon"
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="1000"
            data-sal-easing="ease-out-bounce">
            <div class="moonHole-one"></div>
            <div class="moonHole-two"></div>
            <div class="moonHole-three"></div>
        </div>
        <div class="sun"
                data-sal="slide-down"
                data-sal-delay="500"
                data-sal-duration="4000"
                data-sal-easing="ease-out-bounce"></div>
        <div class="cloud cloud-one"></div>
        <div class="cloud cloud-two"></div>
        <div class="banner__container text-center" :class="{ stay: isActive }" id="banner">
            <Mountains/>
            <Landscape
            :stopScroll ="isActive"/>
            <div class="banner__container__caption">
                <h1 class="anton">James Evans</h1>
                <h2 class="roboto">Front End Web Developer</h2>
            </div>
            <div class="banner__container__arrow p-3"><i class="fas fa-arrow-down"></i></div>
        </div>
    </div>
</template>

<script>
import sal from "sal.js";
import Landscape from "@/components/home/BannerLandscape";
import Mountains from "@/components/home/Mountains";
export default {
    components: {
        Landscape,
        Mountains
    },
    data() {
        return { 
            isActive: false,
            scrolled: false,
            bannerHeight: null

        }
    },
    methods: {
        handleScroll () {
            this.bannerHeight = 2*window.innerHeight;
            this.scrolled = window.scrollY > 0;
            var a = window.scrollY;             
            
            if(a < this.bannerHeight) {
                this.isActive = false;
            }
            else {
                this.isActive = true;
            }
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);  
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    }
}

</script>

<style lang="scss">
.banner {
    background-image: linear-gradient(to bottom, #318cff, #ac79ea, #e765c1, #ff608f, #ff715f, #f06e4e, #e06b3d, #cf692d, #a04833, #6c2e2d, #381b1f, #000000);
    height: 300vh;
    width: 100%;
    overflow: hidden;
    
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
        top: 220vh;
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
        .moonHole-one, .moonHole-two, .moonHole-three {
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
        0%   { left: -100px; }
        100% { left: 100vw; } 
    }
    @keyframes cloud {
    
        0%   { left: -100px; }
        100% { left: 100vw; } 
    }

    .cloud-two {
        top: 30%;
        -webkit-animation: cloud-two 30s infinite linear;
                animation: cloud-two 30s infinite linear;
        z-index: 2;
        overflow: hidden;
    }
    @-webkit-keyframes cloud-two {
        0%   { right: 0px; }
        100% { right: 1400px; } 
    }
    @keyframes cloud-two {
    
        0%   { right: 0px; }
        100% { right: 1400px; } 
    }
    &__container {
        position: fixed;
        height: 100%;  
        width: 100%;
        overflow: hidden;

        h1 {
            font-size: 60px;
        }


        &__caption {
            position: absolute;
            color: white;
            top: 50%; 
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 15px;
            z-index: 2;
            text-shadow: 1px 1px #181818;
            
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
            &:hover {
                cursor: pointer;
                transform: translateX(-50%)scale(1.5);
                
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
    .stay{
        position: absolute;
        overflow: hidden;
        top: 200vh;
    }
    
}

</style>
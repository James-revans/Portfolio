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
        <div class="cloud"></div>
        <div class="cloud cloud-two"></div>
        <div class="banner__container text-center" :class="{ stay: isActive }" id="banner">
            <div class="mountains">  
                <div class="mountain-one">
                    <div class="snow-one"></div>
                </div>
                <div class="mountain-shadow-one">
                    <div class="snow-shadow-one"></div>
                </div>

                <div class="mountain-two">
                    <div class="snow-two"></div>
                </div>
                <div class="mountain-shadow-two">
                    <div class="snow-shadow-two"></div>
                </div>

                <div class="mountain-three">
                    <div class="snow-three"></div>
                </div>
                <div class="mountain-shadow-three">
                    <div class="snow-shadow-three"></div>
                </div>
            </div>
            <div class="landscape">
                <div class="hill-one"></div>
                <div class="hill-two"></div>
                <div class="trees">
                    <div class="treeBranch-one">
                        <div class="treeBush-oneLeft">
                            <div class="treeBush-oneRight"></div>
                        </div>
                        <div class="treeBush-oneLeft-shade">
                            <div class="treeBush-oneRight-shade"></div>
                        </div>
                    </div>
                    <div class="treeBranch-one tree-two">
                        <div class="treeBush-oneLeft">
                            <div class="treeBush-oneRight"></div>
                        </div>
                        <div class="treeBush-oneLeft-shade">
                            <div class="treeBush-oneRight-shade"></div>
                        </div>
                    </div>
                    <div class="treeBranch-one tree-three">
                        <div class="treeBush-oneLeft">
                            <div class="treeBush-oneRight"></div>
                        </div>
                        <div class="treeBush-oneLeft-shade">
                            <div class="treeBush-oneRight-shade"></div>
                        </div>
                    </div>
                    <div class="treeBranch-one tree-four">
                        <div class="treeBush-oneLeft">
                            <div class="treeBush-oneRight"></div>
                        </div>
                        <div class="treeBush-oneLeft-shade">
                            <div class="treeBush-oneRight-shade"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="banner__container__caption ssPro">
                <h1>James Evans</h1>
                <h2>Front-end Web Developer</h2>
            </div>
            <div class="banner__container__arrow p-3"><i class="fas fa-arrow-down"></i></div>
            <div class="banner__container__border"></div>
        </div>
    </div>
</template>

<script>
import sal from "sal.js";
export default {
    data() {
        return { 
            isActive: false,
            scrolled: false,
            bannerHeight: null

        }
    },
    methods: {
        handleScroll () {
            this.scrolled = window.scrollY > 0;
            var a = window.scrollY;
            var viewPortWidth = window.innerWidth;
            console.log(a);
            
            if(viewPortWidth > 800) {
            }
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
        this.bannerHeight = 2*window.innerHeight;
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    }
}

</script>

<style lang="scss">
.banner {
    background-image: linear-gradient(to bottom, #318cff, #ac79ea, #e765c1, #ff608f, #ff715f, #f06e4e, #e06b3d, #cf692d, #a04833, #6c2e2d, #381b1f, #000000);    margin-bottom: 200px;
    height: 300vh;
    .sun {
        position: absolute;
        top: 150px;
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
        top: 60%;
        -webkit-animation: cloud 15s infinite linear;
                animation: cloud 15s infinite linear;
        z-index: 1;
        border-radius: 50%;
        @media only screen and (max-width: 800px) {
                transform: scale(0.5);
            }
    }
    @-webkit-keyframes cloud {
        0%   { left: -100px; }
        100% { left: 90vw; } 
    }
    @keyframes cloud {
    
        0%   { left: -100px; }
        100% { left: 90vw; } 
    }

    .cloud-two {
        top: 68%;
        -webkit-animation: cloud-two 30s infinite linear;
                animation: cloud-two 30s infinite linear;
        z-index: 2;
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
        height: 100vh;  
        width: 100vw;

        h1 {
            font-size: 60px;
        }

        .mountains {
            position: absolute;
            bottom: 25px;
            right: 1300px;
            @media only screen and (max-width: 800px) {
                transform: scale(0.4);
                right: 500px;
            }

            .mountain-one, .mountain-two, .mountain-three {
                position: absolute;
                bottom: 0;
                left: 600px;
                border-top: 0;
                border-left: 300px solid transparent;
                border-right: 300px solid transparent;
                border-bottom: 400px solid #00897b;
                z-index: 1;
                
                
            }
            .mountain-two {
                left: 400px;
                bottom: -140px;
                border-left: 200px solid transparent;
                border-bottom: 400px solid #007267;
                opacity: 0.8;
                z-index: 0;
            }
            .mountain-three {
                left: 850px;
                bottom: -50px;
                opacity: 0.7;
                z-index: 0;
            }
            .mountain-shadow-one, .mountain-shadow-two, .mountain-shadow-three {
                position: absolute;
                bottom: 0;
                left: 900px;
                border-right: 140px solid transparent;
                border-bottom: 400px solid #00695c;
                border-left: 0px solid transparent;
                border-top: 0;
                z-index: 1;
                transform-origin: top right;
                transform: skew(25deg);
            }
            .mountain-shadow-two {
                position: absolute;
                bottom: -140px;
                left: 600px;
                border-right: 120px solid transparent;
                border-bottom: 400px solid #00695c;
                z-index: 0;
            }
            .mountain-shadow-three {
                position: absolute;
                bottom: -50px;
                left: 1150px;
                border-right: 140px solid transparent;
                border-bottom: 400px solid #00695c;
                z-index: 0;
            }
            .snow-one {
                position: absolute;
                bottom: -100px;
                left: -75px;
                border-right: 50px solid transparent;
                border-bottom: 100px solid #dddddd;
                border-left: 75px solid transparent;
                z-index: 2;
            }
            .snow-shadow-one {
                position: absolute;
                bottom: -87px;
                left: 0px;
                border-right: 30px solid transparent;
                border-bottom: 101px solid #aaaaaa;
                border-left: 0px solid transparent;
                z-index: 2;      
                transform-origin: top right;
                transform: skewY(-25deg);
            }
            .snow-two {
                position: absolute;
                bottom: -100px;
                left: -50px;
                border-right: 50px solid transparent;
                border-bottom: 100px solid #dddddd;
                border-left: 50px solid transparent;
                z-index: 2;
            }
            .snow-shadow-two {
                position: absolute;
                bottom: -87px;
                left: 0px;
                border-right: 26px solid transparent;
                border-bottom: 100px solid #aaaaaa;
                border-left: 0px solid transparent;
                z-index: 2;      
                transform-origin: top right;
                transform: skewY(-25deg);
            }
            .snow-three {
                position: absolute;
                bottom: -100px;
                left: -75px;
                border-right: 50px solid transparent;
                border-bottom: 102px solid #dddddd;
                border-left: 75px solid transparent;
                z-index: 2;
            }
            .snow-shadow-three {
                position: absolute;
                bottom: -87px;
                left: 0px;
                border-right: 30px solid transparent;
                border-bottom: 102px solid #aaaaaa;
                border-left: 0px solid transparent;
                z-index: 2;      
                transform-origin: top right;
                transform: skewY(-25deg);
            }

        }
        .landscape {
            width: 100%;
            height: 90px;
            background: #6f9249;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 1;
            @media only screen and (max-width: 800px) {
                height: 45px;
            }
            .hill-one {
                width: 60%;
                height: 120px;
                background: #7ca34f;
                position: absolute;
                bottom: 0;
                right: 0;
                border-top-left-radius: 100%;
                z-index: 0;
                @media only screen and (max-width: 800px) {
                    height: 60px;
            }
            }
            .hill-two {
                width: 70%;
                height: 100px;
                background: #8eb95b;
                position: absolute;
                bottom: 0;
                left: 0;
                border-top-right-radius: 100%;
                z-index: 0;
                @media only screen and (max-width: 800px) {
                    height: 50px;
            }
            }
            .trees {
                .treeBranch-one {
                    position: absolute;
                    bottom: 20px; 
                    left: 20%;
                    width: 15px;
                    height: 10px;
                    background: brown;
                    .treeBush-oneLeft, .treeBush-oneRight {
                        position: absolute;
                        bottom: 10px;
                        right: 50%;
                        border-left: 30px solid transparent;
                        border-right: 0px solid transparent;
                        border-bottom: 50px solid #009625;
                    }

                    .treeBush-oneLeft-shade, .treeBush-oneRight-shade {
                        position: absolute;
                        bottom: 10px;
                        left: 50%;
                        border-left: 0px solid transparent;
                        border-right: 30px solid transparent;
                        border-bottom: 50px solid #018623;                    
                    }
                    .treeBush-oneRight, .treeBush-oneRight-shade {
                        bottom: -30px;
                    }
                }
                .tree-two {
                    left: 40%;
                    transform: scale(0.7);
                    bottom: 30px;
                }
                .tree-three {
                    left: 60%;
                    transform: scale(0.4);
                    bottom: 60px;
                    @media only screen and (max-width: 800px) {
                        bottom: 30px;
                    }
                }
                .tree-four {
                    left: 85%;
                    transform: scale(0.8);
                    bottom: 30px;
                }
            }
        }

        &__caption {
            position: absolute;
            color: white;
            top: 50%; 
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 15px;
            z-index: 2;
            
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
            height: 200px;
            width: 100%;
            z-index: 5;
            position: absolute;
            bottom: -200px;
        }
    }
    .stay{
        position: absolute;
        top: 200vh;
    }
    
}

</style>
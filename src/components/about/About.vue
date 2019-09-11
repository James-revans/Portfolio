<template>
    <div data-sal="slide-left" data-sal-delay="200" data-sal-duration= "900" data-sal-easing="ease-out-bounce" class="about d-md-flex align-items-center">

        <div class="about__text">
            <h1>ABOUT ME</h1>
            
            <p>Hi! I'm James Evans, a front-end web developer from Seattle, Washington. I'm currently a developer at Qudo Creative where I have contributed to the design and development of projects.
                I am an experienced developer in the field and have a strong drive for learning new technologies.
            </p>
            <button class="about__text__button">CONTACT</button>
        </div>
        <div class="about__photo">
            <img src='../../assets/images/james-cutout.png'>
        </div>
    </div>
</template>
<script>

import sal from "sal.js";
export default {
    mounted() {
        sal();
    }
    
}
</script>

<style lang="scss">
.about {
    background: #ffffff;
    height: 100%;
    width: 100%;
    padding-top: 80px;
    padding-bottom: 50px;
    

    @media only screen and (max-width: 480px) {
        padding-top: 50px;
    }

    &__photo {
        position: relative;
        width: 100%;
        text-align: center;
        margin: 0 auto; 
        z-index: 0;
        margin-bottom: -90px;
        
        img {
            width: 100%;
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

        &__button {
            background: rgb(0, 0, 0);
            color: white;
            border: none;
            padding: 10px 40px;
            border-radius: 2px;
            box-shadow: 0px 2px 6px 2px rgb(175, 175, 175);
        }

        @media only screen and (max-width: 1024px) {
            margin: 0 auto;
            padding: 0 20px;
            
        }

    }
    
}

</style>
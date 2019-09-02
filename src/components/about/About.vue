<template>
    <div class="about">
        <!-- <div class="about__divide"></div> -->
        <h2 class="pb-5 text-center">About me</h2>
        <b-row class="m-0">
            <b-col cols="12" sm="6" class="about__james py-3">  
                <div class="about__james__circle"></div>
            </b-col>
            <b-col cols="12" sm="6">
                <p class="about__bio p-1 p-sm-3">
                    Hi! I'm James Evans, a front-end web developer from Seattle, Washington. I'm currently a developer at Qudo Creative where I have contributed to the design and development of projects.
                </p>
                <b-col cols="9" class="divider mb-5"></b-col>
            </b-col>
        </b-row>
        <Skills/>
    </div>
</template>
<script>

import Skills from "@/components/about/Skills";
export default {
    components: {
        Skills
    }
}
</script>

<style lang="scss">
.about {

    background: #ffffff;
    height: 100%;


    h2 {
        color: #003249;
        font-size: 50px;
    }

    &__divide {
        height: 5px;
        background: #007ea7;
    }
    &__james {
        &__circle {
            margin: 0 auto;
            width: 200px;
            height: 200px;
            border-radius: 100%;
            z-index: 1000;
            color: transparent;
            background-image: url('../../assets/james.png');
            background-size: cover;
            background-position-x: -10px;
            transform: rotate(90deg);
        }
    }
    &__bio {
        font-size: 1em;
        max-width: 400px;
        margin: 10% auto;       
    }
    .divider {
        height: 5px;
        background: #003249;
        margin: 0 auto;
        
    }
    
}

</style>
<template>
    <div class="about d-md-flex align-items-center">
        <div class="about__photo">
            <img src='../../assets/james.png'>
        </div>
        <div class="about__text">
            <h1>ABOUT ME</h1>
            
            <p>Hi! I'm James Evans, a front-end web developer from Seattle, Washington. I'm currently a developer at Qudo Creative where I have contributed to the design and development of projects.</p>
        </div>
    </div>
</template>
<script>

export default {
    components: {

    }
}
</script>

<style lang="scss">
.about {
    background: #ffffff;
    height: 100%;
    width: 100vw;
    padding-top: 150px;

    @media only screen and (max-width: 800px) {
        padding-top: 50px;
    }

    &__photo {
        width: 40%;
        text-align: center;
        img {
            width: 80%;
            transform: rotate(90deg);
            
        }
        @media only screen and (max-width: 800px) {
            width: 100%;
            padding-bottom: 150px;
        }   
    }

    &__text {
        margin: 0 auto;
        font-size: 20px;
        width: 60%;

        p {
            border-top: solid thick black;
            padding-top: 20px;

        }
        p, h1 {
            margin: 0 15%;
            @media only screen and (max-width: 800px) {
                width: 80%;
                margin: 0 auto;
            }    
        }
        @media only screen and (max-width: 800px) {
            width: 100%;
            
            
        }
    }
    
}

</style>
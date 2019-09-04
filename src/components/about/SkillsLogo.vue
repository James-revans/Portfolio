<template>
    <div class="d-flex skill-icons pb-5" 
    data-sal="slide-up"
    data-sal-delay="300"
    data-sal-duration="500"
    data-sal-easing="ease-out-bounce">
    <div class="skill-icons__icon"><i class="fab fa-html5"></i><p>HTML5</p></div>
    <div class="skill-icons__icon"><i class="fab fa-css3-alt"></i><p>CSS/Sass</p></div>
    <div class="skill-icons__icon"><i class="fab fa-js-square"></i><p>JavaScript</p></div>
    <div class="skill-icons__icon"><i class="fab fa-vuejs"></i><p>Vue.js</p></div>
    <div class="skill-icons__icon"><i class="fab fa-bootstrap"></i><p>Bootstrap</p></div>
    
    </div>
</template>

<script>
import sal from "sal.js";

export default {
    props: ['icons'],
     mounted() {
        sal();
        }
}

</script>

<style lang="scss">
@import "../../../node_modules/sal.js/dist/sal.css";
.skill-icons {
    justify-content: space-evenly;
    font-size: 50px;
    color: rgb(255, 255, 255);
    

    &__icon {
        position: relative;
        transition: 0.4s;
        &:hover {
            transform: scale(1.2);
            transition: 0.2s;
            cursor: pointer;
            p {
                display: block;
                color: white;  
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                font-size: 15px;
                
            } 
        }
        p {
            display: none;
        }
    }
}

</style>
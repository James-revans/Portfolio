<template>
    <div class="d-flex skill-icons pb-5" 
    data-sal="slide-up"
    data-sal-delay="300"
    data-sal-duration="500"
    data-sal-easing="ease-out-bounce">
    <i class="fab fa-html5"></i>
    <i class="fab fa-css3-alt"></i>
    <i class="fab fa-js-square"></i>
    <i class="fab fa-bootstrap"></i>
    <i class="fab fa-vuejs"></i>
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
}

</style>
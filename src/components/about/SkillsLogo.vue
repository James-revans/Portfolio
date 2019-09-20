<template>
    <div class="d-flex flex-wrap skill-icons">
    <div data-sal="slide-up" data-sal-delay="0" data-sal-duration="500" data-sal-easing="ease-out-bounce"><div class="icon-block"><i class="fab fa-html5"></i><p>HTML5</p></div></div>
    <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="500" data-sal-easing="ease-out-bounce"><div class="icon-block"><i class="fab fa-css3-alt"></i><p>CSS</p></div></div>
    <div data-sal="slide-up" data-sal-delay="200" data-sal-duration="500" data-sal-easing="ease-out-bounce"><div class="icon-block"><i class="fab fa-sass"></i><p>Sass</p></div></div>
    <div data-sal="slide-up" data-sal-delay="300" data-sal-duration="500" data-sal-easing="ease-out-bounce"><div class="icon-block"><i class="fab fa-bootstrap"></i><p>Bootstrap</p></div></div>
    <div data-sal="slide-up" data-sal-delay="400" data-sal-duration="500" data-sal-easing="ease-out-bounce"><div class="icon-block"><i class="fab fa-js-square"></i><p>JavaScript</p></div></div>
    <div data-sal="slide-up" data-sal-delay="500" data-sal-duration="500" data-sal-easing="ease-out-bounce"><div class="icon-block"><i class="fab fa-vuejs"></i><p>Vue.js</p></div></div>
    <div data-sal="slide-up" data-sal-delay="500" data-sal-duration="500" data-sal-easing="ease-out-bounce"><div class="icon-block"><img src="../../assets/images/svelte.png"><p>Svelte.js</p></div></div>
    <div data-sal="slide-up" data-sal-delay="600" data-sal-duration="500" data-sal-easing="ease-out-bounce"><div class="icon-block jquery"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 227.95 214.69"><defs></defs><title>Asset 2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="jquery" d="M139.73,213.49a99.95,99.95,0,0,0,82.33-57.14c-3,2.47-5.69,5.43-8.68,8-22.71,19.59-49.78,24.8-78.48,21.81-41.68-4.35-73.71-25.45-96.38-60.31-14.74-22.68-20.64-47.8-16.05-74.81,1.16-6.81,3.5-13.42,5.32-20.25C19.72,38.81,3,57.84.36,85.52a79.22,79.22,0,0,0,.25,17.34A121.06,121.06,0,0,0,11.38,141.4a126.38,126.38,0,0,0,26.74,36.84c6.36,6.12,23.93,22.84,51.13,31.25a118.23,118.23,0,0,0,23.62,4.73A113.81,113.81,0,0,0,139.73,213.49Z"/><path class="cls-1" d="M85.31,13.05C81.1,24.67,79.69,36.64,82,48.51c7,36.16,29.31,59.3,63.5,70.94,24.22,8.24,47.89,6.36,69.44-8.74,4.4-3.08,8.17-7.08,13-11.37a70.21,70.21,0,0,1-21,27.72c-14.19,11.48-30.86,15.66-48.73,16.39C114.71,145.21,77,111.22,68.83,74.86,63.8,52.44,69.78,28.23,85.31,13.05Z"/><path class="cls-1" d="M134.14,0c-6,26.58,4.26,46.67,26.55,60.06,18.72,11.24,38.73,13.69,57.88.22C216.35,69,201,79.3,188,80.58c-26.17,2.57-49.14-10.2-59.91-33.3C120.33,30.73,122.85,11.18,134.14,0Z"/><line class="cls-1" x1="0.61" y1="102.86" x2="0.36" y2="85.52"/></g></g></svg><p>jQuery</p></div></div>
    <div data-sal="slide-up" data-sal-delay="700" data-sal-duration="500" data-sal-easing="ease-out-bounce"><div class="icon-block"><i class="fab fa-node"></i><p>Node.js</p></div></div>
    <div data-sal="slide-up" data-sal-delay="800" data-sal-duration="500" data-sal-easing="ease-out-bounce"><div class="icon-block"><i class="fab fa-git-alt"></i><p>Git</p></div></div>
    <div data-sal="slide-up" data-sal-delay="900" data-sal-duration="500" data-sal-easing="ease-out-bounce"><div class="icon-block"><i class="fab fa-figma"></i><p>Figma</p></div></div>
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
.skill-icons {
    justify-content: space-evenly;
    font-size: 50px;
    color: rgb(255, 255, 255);
    
    .icon-block {
        position: relative;
        padding: 10px;
        margin-bottom: 15px;
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
    .jquery {
        fill: white;
        width: 70px;
        height: 70px;
        margin-top: -7px; 
    }
    img {
        width: 50px;
        height: 50px;
        margin-top: -7px; 
    }
}

</style>
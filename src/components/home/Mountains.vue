<template>
    <div class="mountains">  
        <div class="mountain-one">
            <div class="snow-one"></div>
            <div class="mountain-shadow-one">
                <div class="snow-shadow-one"></div>
            </div>
        </div>


        <div class="mountain-two">
            <div class="snow-two"></div>
            <div class="mountain-shadow-two">
                <div class="snow-shadow-two"></div>
            </div>
        </div>


        <div class="mountain-three">
            <div class="snow-three"></div>
            <div class="mountain-shadow-three">
                <div class="snow-shadow-three"></div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

.mountains {
    position: absolute;
    bottom: 25px;
    right: 700px;
    z-index: -1;

    @media only screen and (max-width: 800px) {
        right: 220px;
        transform: scale(0.3);

    }

    .mountain-one, .mountain-two, .mountain-three {
        position: absolute;
        bottom: 0;
        border-top: 0;
        border-left: 300px solid transparent;
        border-right: 300px solid transparent;
        border-bottom: 400px solid #00897b;
        z-index: 1;
        
        .mountain-shadow-one, .mountain-shadow-two, .mountain-shadow-three {
            position: absolute;
            top: 0;
            border-right: 140px solid transparent;
            border-bottom: 400px solid #00695c;
            border-left: 0px solid transparent;
            border-top: 0;
            z-index: 1;
            transform-origin: top right;
            transform: skew(25deg);
        }
    }
    .mountain-two {
        left: -120px;
        bottom: -100px;
        border-left: 200px solid transparent;
        border-bottom: 400px solid #007267;
        opacity: 0.8;
        z-index: 0;
        .mountain-shadow-two {
            position: absolute;
            bottom: -140px;
            border-right: 120px solid transparent;
            border-bottom: 400px solid #00695c;
            z-index: 0;
        }
    }
    .mountain-three {
        left: 300px;
        bottom: -50px;
        opacity: 0.7;
        z-index: 0;
        .mountain-shadow-three {
            position: absolute;
            bottom: -50px;
            border-right: 140px solid transparent;
            border-bottom: 400px solid #00695c;
            z-index: 0;
        }
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

</style>
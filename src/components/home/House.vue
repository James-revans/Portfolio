<template>
    <div class="house">
        <div class="roof d-flex">
            <div class="side-roof"></div>
            <div class="front-roof"></div>
        </div>
        <div class="base d-flex">
            <div class="side-base">
                <div class="chimney">
                    <div class="smoke-one"></div>
                    <div class="smoke-two"></div>
                    <div class="smoke-three"></div>
                </div>
            </div>
            <div class="front-base">
                <div class="door"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.house {
    -moz-transform: scale(-.2, .2);
    -webkit-transform: scale(-.2, .2);
    -o-transform: scale(-.2, .2);
    -ms-transform: scale(-.2, .2);
    transform: scale(-.2, .2);
        
    .roof {
        position: relative;
        width: 180px;
        
        .side-roof {
            position: relative;
            border-left: 60px solid transparent;
            border-right: 60px solid transparent;
            border-bottom: 80px solid rgb(87, 60, 60);
            border-top: 0;
            border-radius: 5px;
            right: 10px;
            top: 5px;
            z-index: 1;
        }
        .front-roof {
            position: absolute;
            width: 75px;
            height: 75px;
            background: rgb(110, 76, 76);
            bottom: 0;
            right: 0;
            z-index: 0;
            transform-origin: bottom right;
            transform: skew(37deg);
            
            
        }
    }





    .base {
        height: 100px;
        .side-base {
            position: relative;
            background: rgb(82, 45, 45);
            width: 100px;
            height: 100%;
            .chimney {
                position: absolute;
                top: -60px; 
                left: 5px;  
                background: black;
                width: 20px;
                height: 50px;
                .smoke-one, .smoke-two, .smoke-three {
                    position: absolute;
                    background: rgb(202, 202, 202);
                    width: 50px;
                    height: 30px;
                    top: -25px;
                    border-radius: 80%;
                    right: -7px;

                }

                .smoke-two {
                    top: -65px;
                    width: 100px;
                    height: 50px;
                    border-top-left-radius: 10px;
                    border-bottom-right-radius: 15px;
                }
                .smoke-three {
                    top: -140px;
                    width: 200px;
                    height: 100px;
                    right: 15px;
                    border-bottom-right-radius: 50%;
                    border-top-left-radius: 40%;
                    border-bottom-left-radius: 80%;
                }
                
                
            }
        }
        .front-base {
            position: relative;
            background: #705252;
            width: 70px;
            height: 100%;
            .door {
                position: absolute;
                background: #533d3d;
                width: 25px;
                height: 50%;
                bottom: 0; 
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }

}

</style>
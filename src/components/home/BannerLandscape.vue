<template>
    <div class="landscape">
        <Mountains/>
        <div class="hill-one"></div>
        <div class="hill-two"></div>
        <div class="trees">
            <div class="treeBranch-one tree">
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
</template>

<script>
import Mountains from "@/components/home/Mountains";

export default {
    components: {
        Mountains
    }
    
}
</script>

<style lang="scss">
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
        @media only screen and (max-width: 800px) {
            transform: scale(0.6);
            position: relative;
            left: 0;
            bottom: -30px;
        }
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

</style>
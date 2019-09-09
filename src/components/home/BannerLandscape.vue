<template>
    <div class="landscape" id="parallax-container-landscape">
        
        <div class="hill-four p-landscape"></div>
        <div class="hill-three p-landscape"></div>
        <div class="hill-two p-landscape"></div>
        <div class="hill-one p-landscape"></div>


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


// window.addEventListener('scroll', () => {
//   let parent = document.getElementById('parallax-container-landscape');
//   let children = parent.getElementsByClassName('p-landscape');
//   for(let i = 0; i < children.length; i++) {
//     // children[i].style.transform = 'translateY(' + (window.pageYOffset * (1 * i) / children.length) + 'px)';
//     children[i].style.transform = 'translateY(' + (window.pageYOffset / (1 * (i+1)) / children.length) + 'px)';
//     children[0].style.transform = 'translateY(' + (window.pageYOffset / (2) / children.length) + 'px)';
//     children[1].style.transform = 'translateY(' + (window.pageYOffset / (1.8) / children.length) + 'px)';

//   }
// }, false)


export default {
    props: ["stopScroll"],
    components: {
        Mountains
    },

    methods: {
        handleScroll() {
            console.log(this.stopScroll);
            if(!this.stopScroll) {
                let parent = document.getElementById('parallax-container-landscape');
                let children = parent.getElementsByClassName('p-landscape');
                for(let i = 0; i < children.length; i++) {
                    // children[i].style.transform = 'translateY(' + (window.pageYOffset * (1 * i) / children.length) + 'px)';
                    children[i].style.transform = 'translateY(' + (window.pageYOffset / (1 * (i+1)) / children.length) + 'px)';
                    children[0].style.transform = 'translateY(' + (window.pageYOffset / (2) / children.length) + 'px)';
                    children[1].style.transform = 'translateY(' + (window.pageYOffset / (1.8) / children.length) + 'px)';
                }
            }
        }
    },

    created () {
        window.addEventListener('scroll', this.handleScroll);  
    },
    
}
</script>

<style lang="scss">
.landscape {
    width: 100%;
    height: 60%;
    background: rgb(0, 94, 0)45;
    position: absolute;
    bottom: 0;
    left: 0;

    @media only screen and (max-width: 480px) {
        // height: 45px;
    }




    .hill-one {
        width: 100%;
        height: 40%;
        background: #87b158;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top-right-radius: 100%;
        z-index: 0;
        @media only screen and (min-width: 1024px) {
            height: 50%;
        }
    }

    .hill-two {
        width: 130%;
        height: 50%;
        background: #7ca34f;
        position: absolute;
        bottom: 0;
        right: 0;
        border-top-left-radius: 100%;
        z-index: 0;
        @media only screen and (min-width: 1024px) {
            height: 60%;
            width: 100%;
        }
    }
    .hill-three {
        width: 150%;
        height: 80%;
        background: #6b8d45;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top-right-radius: 100%;
        z-index: 0;
        @media only screen and (min-width: 1024px) {
            height: 98%;
            width: 100%;
        }
    }
    .hill-four {
        width: 150%;
        height: 85%;
        background: #63813f;
        position: absolute;
        bottom: 0;
        right: 0;
        border-top-left-radius: 100%;
        z-index: 0;
        @media only screen and (min-width: 1024px) {
            height: 100%;
            width: 100%;

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
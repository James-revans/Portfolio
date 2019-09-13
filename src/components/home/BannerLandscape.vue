<template>
    <div class="landscape" id="parallax-container-landscape">
        
        <div class="hill-four p-landscape">
            <div class="tree-seven"><Tree/></div>
            <div class="tree-six"><Tree/></div>
            <div class="tree-five"><Tree/></div>
            <div class="tree-four"><Tree/></div>
            <!-- <House class="house-one"/> -->
        </div>
        <div class="hill-three p-landscape">
            <div class="tree-three"><Tree/></div>
            
        </div>
        <div class="hill-two p-landscape"><div class="tree-two"><Tree/></div></div>
        <div class="hill-one p-landscape">
            <div class="tree-one"><Tree/></div>
            
        </div>

    </div>
</template>

<script>
import Mountains from "@/components/home/Mountains";
import Tree from "@/components/home/Tree";
import House from "@/components/home/House";


export default {
    props: ["stopScroll"],
    components: {
        Mountains,
        Tree,
        House
    },

    methods: {
        handleScroll() {
            if(!this.stopScroll) {
                let parent = document.getElementById('parallax-container-landscape');
                let children = parent.getElementsByClassName('p-landscape');
                for(let i = 0; i < children.length; i++) {
                    // children[i].style.transform = 'translateY(' + (window.pageYOffset * (1 * i) / children.length) + 'px)';
                    children[i].style.transform = 'translateY(' + (window.pageYOffset / (0.75 * (i+1)) / children.length) + 'px)';
                    children[0].style.transform = 'translateY(' + (window.pageYOffset / (1.5) / children.length) + 'px)';
                    children[1].style.transform = 'translateY(' + (window.pageYOffset / (1.35) / children.length) + 'px)';
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
    height: 70%;
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
        .tree-one {
            position: relative;
            bottom: -38%;
            left: 38%;
            transform: scale(1.5);
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
        .tree-two {
            position: relative;
            transform: scale(0.8);
            bottom: -30%;
            left: 70%;
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
        .tree-three {
            position: relative;
            bottom: -18%;
            left: 5%;
            transform: scale(0.6);
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
        .tree-four {
            position: relative;
            bottom: -5%;
            left: 49%;
            transform: scale(0.4);
        }
        .tree-five {
            position: relative;
            bottom: -15%;   
            left: 46%;
            transform: scale(0.65);
        }
        .tree-six {
            position: relative;
            bottom: -5%;
            left: 65%;
            transform: scale(0.5);
        }
        .tree-seven {
            position: relative;
            bottom: -20%;
            left: 75%;
            transform: scale(0.8);
        }
        .house-one {
            position: relative;
            bottom: 17%;
            left: 16%;
        }
    }
    // .trees {
    //     @media only screen and (max-width: 800px) {
    //         transform: scale(0.6);
    //         position: relative;
    //         left: 0;
    //         bottom: -30px;
    //     }
    //     .treeBranch-one {
    //         position: absolute;
    //         bottom: 20px; 
    //         left: 20%;
    //         width: 15px;
    //         height: 10px;
    //         background: brown;
    //         .treeBush-oneLeft, .treeBush-oneRight {
    //             position: absolute;
    //             bottom: 10px;
    //             right: 50%;
    //             border-left: 30px solid transparent;
    //             border-right: 0px solid transparent;
    //             border-bottom: 50px solid #009625;
    //         }

    //         .treeBush-oneLeft-shade, .treeBush-oneRight-shade {
    //             position: absolute;
    //             bottom: 10px;
    //             left: 50%;
    //             border-left: 0px solid transparent;
    //             border-right: 30px solid transparent;
    //             border-bottom: 50px solid #018623;                    
    //         }
    //         .treeBush-oneRight, .treeBush-oneRight-shade {
    //             bottom: -30px;
    //         }
    //     }
    //     .tree-two {
    //         left: 40%;
    //         transform: scale(0.7);
    //         bottom: 30px;
    //     }
    //     .tree-three {
    //         left: 60%;
    //         transform: scale(0.4);
    //         bottom: 60px;
    //         @media only screen and (max-width: 800px) {
    //             bottom: 30px;
    //         }
    //     }
    //     .tree-four {
    //         left: 85%;
    //         transform: scale(0.8);
    //         bottom: 30px;
    //     }


    // }
}

</style>
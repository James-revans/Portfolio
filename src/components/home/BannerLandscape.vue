<template>
    <div class="landscape" id="parallax-container-landscape">
        
        <div class="hill-four p-landscape">
            <div class="tree-seven"><Tree/></div>
            <div class="tree-six"><Tree/></div>
            <div class="tree-five"><Tree/></div>
            <div class="tree-four"><Tree/></div>
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
import Tree from "@/components/home/Tree";


export default {
    components: {
        Tree,
    },

    methods: {
        handleScroll() {
            let parent = document.getElementById('parallax-container-landscape');
            let children = parent.getElementsByClassName('p-landscape');
            for(let i = 0; i < children.length; i++) {
                // children[i].style.transform = 'translateY(' + (window.pageYOffset * (1 * i) / children.length) + 'px)';
                children[i].style.transform = 'translateY(' + (window.pageYOffset / (1.35 * (i+1)) / children.length) + 'px)';
                children[0].style.transform = 'translateY(' + (window.pageYOffset / (2.7) / children.length) + 'px)';
                children[1].style.transform = 'translateY(' + (window.pageYOffset / (2.43) / children.length) + 'px)';
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
            z-index: 5;
            bottom: -33%;
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

        .tree-three {
            display: none;
        }
        @media only screen and (min-width: 1024px) {
            height: 98%;
            width: 100%;
            .tree-three {
                display: block;
                bottom: -15%;
                position: relative;
                left: 5%;
                transform: scale(0.6);
            }
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

        .tree-four {
            position: relative;
            bottom: -5%;
            left: 49%;
            transform: scale(0.4);
        }
        .tree-five {
            display: none;
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
            left: 70%;
            transform: scale(0.7);
        }
        .house-one {
            position: relative;
            bottom: 17%;
            left: 16%;
        }
        @media only screen and (min-width: 1024px) {
            height: 100%;
            width: 100%;
            .tree-five {
                display: inline-block;
                position: relative;
                bottom: -15%;   
                left: 46%;
                transform: scale(0.65);
            }
            .tree-seven {
                bottom: -24%;
            }
        }
    }
}

</style>
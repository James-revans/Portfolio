<template>
<div class="tree">
    <div class="treeBranch-one">
        <div class="treeBush-oneLeft">
            <div class="treeBush-oneRight"></div>
        </div>
        <div class="treeBush-oneLeft-shade">
            <div class="treeBush-oneRight-shade"></div>
        </div>
    </div>
</div>


</template>

<script>
export default {
    
}
</script>

<style lang="scss">


.tree {

    .treeBranch-one {
        position: absolute;
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

}


</style>
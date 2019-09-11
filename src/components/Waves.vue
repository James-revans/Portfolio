<template>
    <div class="waves">
        <div class="waves__wave-1"></div>
        <div class="waves__wave-2"></div>
        <div class="waves__wave-3"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.waves {
    position: relative;
    width: 100%;
    height: 250px;
    overflow: hidden;
    background: #87b158;
    &__wave-1 {
        position: absolute;
        width: 800vw;
        height: 800vw;
        left: -350%;
        top: 30%;
        background-color: rgba(108, 201, 255, 0.534);
        border-radius: 49%;
        animation: rotate 15s linear infinite;
    }
    &__wave-2 {
        position: absolute;
        width: 800vw;
        height: 800vw;
        left: -360%;
        top: 60%;
        background-color: rgba(58, 154, 209, 0.863);
        border-radius: 48%;
        animation: rotate 12s linear infinite;
    }
    &__wave-3 {
        position: absolute;
        width: 800vw;
        height: 800vw;
        left: -340%;
        top: 50%;
        background-color: rgb(49, 129, 175);
        border-radius: 49%;
        animation: rotate 11s linear infinite;
    }






    @keyframes rotate {
        100% { transform: rotate(360deg);}
        }
}

</style>
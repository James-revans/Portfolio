<template>
    <div class="nav d-flex flex-wrap">
        <a href="#skills">Portfolio</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </div>
</template>

<script>
export default {
    
}
</script>


<style lang="scss">
.nav {
    justify-content: space-around;
    //width: 50%;
    margin: 0 auto;
    a {
        font-size: 1.1em;
        color: white;
        padding-bottom: 3px;
        border-bottom: solid 1px transparent;
        &:hover {
            color: white;
            border-color: white;
            
            text-decoration: none;
        }
        &:focus {
            color: white;
        }
    }
}

</style>
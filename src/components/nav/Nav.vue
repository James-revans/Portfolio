<template>
   <div class="nav d-flex flex-wrap">
      <a data-scroll href="#projects">Portfolio</a>
      <a data-scroll href="#about">About</a>
      <a data-scroll href="#contact">Contact</a>
   </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.nav {
   justify-content: center;
   //width: 50%;
   margin: 0 auto;
   a {
      font-size: 1.1em;
      color: white;
      padding-bottom: 3px;
      border-bottom: solid 1px transparent;
      margin: 0 10px;
      &:hover {
         color: white;
         border-color: white;
         text-decoration: none;
      }
      &:focus {
         color: white;
      }
      @media only screen and (max-width: 800px) {
         font-size: 0.7em;
      }
   }
}
</style>

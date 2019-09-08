<template>
  <div>
    <Banner/>
    <Skills/>
    <Projects/>
    <About/>
  </div>
</template>

<script>

import Banner from '@/components/home/Banner';
import Skills from "@/components/about/Skills";
import About from '@/components/about/About';
import Projects from '@/components/projects/Projects';

export default {
  components: {
    Banner,
    Skills,
    About,
    Projects
  }
 
}
</script>

<style lang="scss">

</style>
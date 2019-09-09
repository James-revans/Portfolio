<template>
  <div>
    <Banner/>
    <Skills/>
    <Projects/>
    <About/>
    <Contact/>
  </div>
</template>

<script>

import Banner from '@/components/home/Banner';
import Skills from "@/components/about/Skills";
import Projects from '@/components/projects/Projects';
import About from '@/components/about/About';
import Contact from "@/components/Contact";


export default {
  components: {
    Banner,
    Skills,
    About,
    Contact,
    Projects
  }
 
}
</script>

<style lang="scss">

</style>
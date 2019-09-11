<template>
  <div>
    <Banner/>
    <Waves/>
    <Skills/>
    <Projects/>
    <About/>
    <Contact/>
  </div>
</template>

<script>
import Waves from "@/components/Waves";
import Banner from '@/components/home/Banner';
import Skills from "@/components/about/Skills";
import Projects from '@/components/projects/Projects';
import About from '@/components/about/About';
import Contact from "@/components/footer/Contact";


export default {
  components: {
    Waves,
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
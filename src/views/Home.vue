<template>
  <div>
    <Banner/>
    <About/>
    <Projects/>
  </div>
</template>

<script>

import Banner from '@/components/home/Banner';
import Skyline from '@/components/skyline/Skyline';
import About from '@/components/about/About';
import Projects from '@/components/projects/Projects';

export default {
  components: {
    Banner,
    Skyline,
    About,
    Projects
  }
 
}
</script>

<style lang="scss">

</style>
<template>
  <div class="home">
    <!-- <Banner/> -->
    <Skyline/>
    <div class="content">
      <About/>
      <Projects/>
    </div>

  </div>
</template>

<script>
import Skyline from '@/components/skyline/Skyline';
import About from '@/components/about/About';
import Projects from '@/components/projects/Projects';

export default {
  components: {
    Skyline,
    About,
    Projects
  }
 
}
</script>

<style lang="scss">

.home {
  background: white;
  .content {
    background: white;
    position: relative;
  }

}


</style>
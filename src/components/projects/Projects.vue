<template>
    <div class='projects m-0'>
        <div class="text-center pt-3 pt-sm-5">
            <h2>PROJECTS</h2>
        </div>
        <div class="justify-content-center py-5">
            <ProjectBlade v-for="(item, index) in projectData" :key="index"
            :project="item.project"
            :description="item.description"
            :tools="item.tools"
            :img="item.img"
            :url="item.url"/>
        </div>

    </div>
</template>

<script>
import ProjectBlade from "@/components/projects/ProjectBlade";
import projectData from '../../projectData.json';
export default {
    components: {
        ProjectBlade
    },
    data() {
        return {
            projectData
        }
    }
}
</script>

<style lang="scss">
.projects {
    h2 {
        color: #003249;
        font-size: 45px;
    }
}
</style>
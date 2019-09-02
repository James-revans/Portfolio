<template>
    <b-row class='skills m-0'>
        <b-col cols="12 text-center pt-5">
            <h3>Skills</h3>
        </b-col>
        <b-col class="py-5">
            <SkillsLogo/>
        </b-col>
    </b-row>
</template>

<script>
import SkillsLogo from "@/components/about/SkillsLogo";
export default {
    components: {
        SkillsLogo
    },
    data() {
        return {
            
        }
    }
    
}
</script>

<style lang="scss">
.skills {
    background: #000E30;
    h3 {
        color: #ffffff;
        font-size: 50px;
    }
}

</style>
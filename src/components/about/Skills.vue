<template>
    <b-row class='skills mx-0'>
        <b-col cols="12 text-center pt-3">
            <h3>EXPERIENCE</h3>
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
    background-color: rgb(49, 129, 175);
    width: 100%;
    h3 {
        color: #ffffff;
        font-size: 45px;
    }
}

</style>
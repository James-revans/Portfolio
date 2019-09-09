<template>
    <div class="blade d-md-flex align-items-center justify-content-center">
        <div class="blade__img">
            <div class="blade__img__link">
                <a target="_blank" v-bind:href="url">Visit Site</a>
            </div>
            <img class="" :src="getImgUrl()">
        </div>
        <div class="blade__description">
            <p>{{ description }}</p>
            <div v-for="(item, index) in tools" :key="index" class="pt-2 d-flex"><br><h6 class="p-1">{{ item }}</h6></div>
        </div>
    </div>
</template>

<script>
export default {    
    props: ['project', 'description', 'tools', 'img', 'url'],
    data() {
        return {
            
        }
    },
    methods: {
        getImgUrl() {
            return require('../../assets/images/' + this.img)
        }
    }
    
}
</script>

<style lang="scss">
.blade {
    position: relative;
    width: 100vw;
    padding: 25px;
    

    &__img {
        position: relative;
        width: 40%;
        
        img {
            width: 100%;
            border-radius: 15px;
            border: solid 2px gray;
            
        }

        @media only screen and (max-width: 800px) {
            width: 100%;
        }

        &__link {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 15px;
            background: #000E30;
            opacity: 0;
            z-index: 1;
            transition: 0.3s;
            a {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
                font-size: 25px;
                &:hover {
                    color: rgb(95, 151, 255);
                    text-decoration: none;
                }
            }
            &:hover {
                opacity: 0.9;
                transition: 0.3s;
                cursor: pointer;
            }

        }
    }


        
    &__description {
        padding: 50px;
        width: 50%;        
        color: black;
        font-size: 1.2em;

        @media only screen and (max-width: 800px) {
            width: 100%;
            padding: 15px 5px;
            font-size: 0.75em;
        }

        h6 {
            display: block;
            background: rgb(218, 218, 218);
            
        }
    }


}

</style>
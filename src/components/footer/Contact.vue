<template>
    <div class="contact" id="contact">
        <div class="contact__content">
            <h1 data-sal="slide-up" data-sal-delay="200" data-sal-duration= "900" data-sal-easing="ease-out-bounce">CONTACT</h1>
            <form data-sal="zoom-in" data-sal-delay="300" data-sal-duration="700" data-sal-easing="ease-out-bounce" class="contact__content__form">
                <input type="text" placeholder="Name">
                <input type="email" placeholder="Email">
                <textarea placeholder="Message"></textarea>
                <button class="contact__content__form__button">SEND MESSAGE</button>
            </form>
        </div>

    </div>
</template>

<script>
import sal from "sal.js";
export default {
    mounted() {
        sal();
    }
    
}
</script>

<style lang="scss">

.contact {
    position: relative;
    background: rgb(19, 19, 19);
    width: 100%;
    padding: 50px 0;
    z-index: 1;

    &__content {
        h1 {
            margin: 0 auto;
            width: 100%;
            text-align: center;
            color: white;
            padding-bottom: 50px;
        }

        &__form {
            width: 30%;
            margin: 0 auto;

            input {
                padding: 13px;
                margin: 5px 0px;
                width: 100%;
            }

            textarea {
                padding: 13px;
                margin: 5px 0;
                height: 200px;
                width: 100%;
            }

            &__button {
                background: rgba(255, 255, 255, 0);
                color: rgb(255, 255, 255);
                border: solid 2px white;
                padding: 10px 40px;
                border-radius: 1px;
                transition: 0.2s;
                &:hover {
                    transition: 0.3s;
                    background: rgba(255, 255, 255, 0.925);
                    color: black;

                }
            }
            


            @media only screen and (max-width: 1024px) {
                width: 50%;
            }

            @media only screen and (max-width: 480px) {
                width: 80%;
            }
            
        }

    }

}

</style>
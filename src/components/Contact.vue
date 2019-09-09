<template>
    <div class="contact">
        <h1>CONTACT</h1>
        <form class="contact__form">
            <input type="text" placeholder="Name">
            <input type="email" placeholder="Email">
            <textarea placeholder="Message"></textarea>
            <button class="contact__form__button">SEND MESSAGE</button>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

.contact {
    position: relative;
    background: rgb(12, 12, 12);
    width: 100%;
    padding: 50px 0;
    z-index: 1;
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
            background: rgb(50, 153, 50);
            color: white;
            border: none;
            padding: 10px 40px;
            border-radius: 2px;

        }
        


        @media only screen and (max-width: 1024px) {
            width: 50%;
        }

        @media only screen and (max-width: 480px) {
            width: 80%;
        }
        
    }
}

</style>
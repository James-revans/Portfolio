<template>
    <div class="contact" id="contact">
        <div class="contact__content">
            <h1>
                CONTACT
            </h1>
            <form
                name="contact"
                method="post"
                netlify
                data-netlify-honeypot="bot-field"
                class="contact__content__form"
            >
                <input type="hidden" name="form-name" value="contact" />
                <input type="text" name="name" id="name" placeholder="Name" />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                />
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                />
                <textarea
                    name="message"
                    id="text"
                    placeholder="Message"
                ></textarea>
                <button
                    type="submit"
                    value="submit"
                    class="contact__content__form__button"
                >
                    SEND MESSAGE
                </button>
            </form>
            <!-- <div class="contact__content__resume"><a href="http://evans-james.com/Resume.pdf" download target="_blank">View Resume</a></div> -->
        </div>
    </div>
</template>

<style lang="scss">
.contact {
    position: relative;
    background: rgb(19, 19, 19);
    width: 100%;
    padding: 50px 0;
    z-index: 1;

    &__content {
        &__resume {
            font-size: 20px;
            width: 100%;
            color: white;
            text-align: center;
            margin: 50px auto 0px auto;

            a {
                color: white;
                border-bottom: solid thin transparent;
                padding-bottom: 5px;
                transition: 0.3s;
                &:hover {
                    color: white;
                    text-decoration: none;
                    border-color: white;
                    transition: 0.2s;
                }
            }
        }

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

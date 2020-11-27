<template>
    <div ref="grecaptcha"></div>
</template>

<script>
    export default {

        props: ['sitekey'],

        methods: {

            loaded(){

                window.grecaptcha.render(this.$refs.grecaptcha, {
                    sitekey: this.sitekey,
                    callback: (response) => {

                        this.$emit('input', response);

                    },
                });

            },

        },

        mounted(){

            /**
             * Set Recapchat loaded function
             */
            window.ReCaptchaLoaded = this.loaded;

            /**
             * Set Recaptcha script in header
             */
            var script = document.createElement('script');
            script.src = 'https://www.google.com/recaptcha/api.js?onload=ReCaptchaLoaded&render=explicit';
            document.head.appendChild(script);

        }

    }
</script>
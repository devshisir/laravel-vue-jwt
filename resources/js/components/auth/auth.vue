<template>
    <div class="forny-container">

        <div class="forny-inner">
            <div class="forny-two-pane">
                <vue-page-transition name="fade-in-down">
                    <router-view />
                </vue-page-transition>
                <div class="right-pane">
                    <div class="text-center" style="width: 300px">
                        <div class="mb-10 forny-logo">
                            <!-- <img src="img/logo-05.svg"> -->
                        </div>
                        <div class="mt-10">
                            <h4 class="mb-4">Welcome to Forny.</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                sed diam nonumm. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        computed:{
            loggedIn(){
               return this.$store.getters.loggedIn;
            }
        }
    }
</script>

<style>

</style>
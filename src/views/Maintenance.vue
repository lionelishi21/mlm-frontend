<template>
    <div role="main" class="main" style="min-height: calc(100vh - 393px);">
        <div class="container" style="margin-top: 10%;">
            <div class="row mt-5">
                <div class="col text-center">
                    <div class="logo">
                        <a href="/">
                            <img width="200" src="@/assets/logo.png"  alt="Porto">
                        </a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <hr class="solid my-5">
                </div>
            </div>
            <div class="row">
                <div class="col text-center">
                    <div class="overflow-hidden mb-2">
                        <h2 class="font-weight-normal text-7 mb-0 appear-animation" data-appear-animation="maskUp"><strong class="font-weight-extra-bold">Maintenance Mode</strong></h2>
                    </div>
                    <div class="overflow-hidden mb-1">
                        <p class="lead mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="200">The website is undergoing some scheduled maintenance.<br>Please come back later.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <hr class="solid my-5">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Maintenance.vue"
    }
</script>

<style scoped>

</style>
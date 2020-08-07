<template>
    <div style="position: absolute; top: 0; right: 22px;left: 22px;z-index: 9999;">
        <div class="toast toast-primary fade hide" role="alert" data-delay="6000" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="mr-auto">Withdraw</strong>
                <small class="meta-time">just now</small>
                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="toast-body">
                {{msg}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['msg'],
        name: "Notification.vue"
    }
</script>

<style scoped>

</style>
<template>

    <div id="content" class="main-content">
        <div class="">
            <div class="row">
                <div class="col-md-12">

                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                        <div class="widget widget-table-three">

                            <div class="widget-heading">
                                <h5 class="">Ebook</h5>
                            </div>

                            <div class="widget-content">
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                        <tr>
                                            <th><div class="th-content">Product</div></th>
                                            <th><div class="th-content th-heading">Price</div></th>
                                            <th><div class="th-content">Source</div></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="">
                                                         <img src="@/assets/ebook.png" alt="product" width="54px;">
                                                         Ebooks
                                                    </div>
                                                </td>
                                                <td><div class="td-content">
                                                    <span class="pricing">$34.95</span></div>
                                                </td>
                                                <td>
                                                    <div class="td-content">
                                                        <button @click="downloadEbook()" class="btn btn-sm btn-primary">
                                                            Download
                                                        </button>
                                                   </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import  { mapGetters } from 'vuex';
    export default {
        name: "Ebook.vue",
        created() {

        },
        computed: {
            ...mapGetters([
                'Ebook'
            ])
        },
        methods: {
            downloadEbook() {
                this.$store.dispatch('GET_EBOOK_TOKEN')
                    .then( response => {

                        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                        var fileLink = document.createElement('a');
                        fileLink.href = fileURL;
                        fileLink.setAttribute('download', 'ebook.pdf');
                        document.body.appendChild(fileLink);
                        fileLink.click();

                    })
            }
        }
    }
</script>

<style scoped>

</style>
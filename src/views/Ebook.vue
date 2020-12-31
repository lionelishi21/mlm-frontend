<template>

    <div id="content" class="main-content">
        <div class="layout-px-spacing">
            <div class="row layout-top-spacing">
                <div class="col-md-12">
                    <nav class="breadcrumb-two" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>
                            <li class="breadcrumb-item active"><a href="javascript:void(0);">Products</a></li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div class="row ">
                <div class="col-md-6  col-sm-12 col-lg-3 col-xl-3">
                    <div class="card w-100">

                        <div class="card-body text-center">
                            <img src="@/assets/ebook.png" class="" width="45%">
                        </div>

                        <div class="card-body">
                            <h5 class="card-title">Learn How to Stop Working</h5>
                            <p class="card-text">Price: $34.95</p>
                            <button @click="downloadEbook()" class="btn btn-sm btn-primary">
                                Download
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6  col-sm-12 col-lg-3 col-xl-3">
                    <div class="card w-100">

                        <div class="card-body text-center">
                            <img src="@/assets/ebook.png" class="" width="45%">
                        </div>

                        <div class="card-body">
                            <h5 class="card-title">Advirtising Package</h5>
                            <p class="card-text">Price: $25.00</p>
                            <small><a href="">Learn More</a></small>
                        </div>
                    </div>
                </div>
                <div class="col-md-6  col-sm-12 col-lg-3 col-xl-3">
                    <div class="card w-100">

                        <div class="card-body text-center">
                            <img src="https://via.placeholder.com/400.png/fff?text=comingsoon"  width="200px">
                        </div>

                        <div class="card-body">
                            <h5 class="card-title">Anti Aging Formula</h5>
                            <p class="card-text">Price: <i>Not Available</i></p>
                            <small class="badge badge-danger">Coming Soon</small>
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
            },
        }
    }
</script>

<style scoped>

</style>
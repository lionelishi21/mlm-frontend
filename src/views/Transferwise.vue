<template>
    <div id="content" class="main-content">
        <div class="layout-px-spacing">
            <div class="row layout-top-spacing">
                <div class="col-md-12">
                    <nav class="breadcrumb-two" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>
                            <li class="breadcrumb-item active"><a href="javascript:void(0);">TransferWise</a></li>
                        </ol>
                    </nav>
                </div>
            </div>

            <b-modal v-model="transfer_modal" title="TransferWise" modal-footer centered hide-footer="true" >
                <label class="text-dark" >TransferWise Contact Information</label>
                <hr>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Enter your transferWise Email"c v-model="form.email">
                </div>

                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Enter your transferWise Phone Number ( optional )"c v-model="form.phone">
                </div>

                <hr>
                <button class="btn btn-primary" @click="addTransferWiseAccount()">Submit</button>
            </b-modal>

            <div class="row h-100">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <div class="card card-block w-100" style="background: #f2f5f7;">
                        <div class="card-body">
                            <div class="row text-center">
                                <div class="col-md-12">
                                    <img src="@/assets/transferwise.png" width="50%">
                                </div>
                            </div>
                            <div class="row text-center">
                                <div class="col-md-12">
                                    <button class="btn btn-primary btn-rounded" @click="showTransferWiseModal()">Add Account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3"
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "Transferwise",

        data:() => ({
            isLoading: false,
            transfer_modal: false,
            form: {
                email: null,
                phone: null
            }
        }),

        created() {
            this.$store.dispatch('TRANSFERWISE_FETCH_ACCOUNT')
        },

        computed: {
            ...mapGetters([
                'transferwiseAccount'
            ])
        },

        methods: {
            showTransferWiseModal() {
                this.transfer_modal = !this.transfer_modal
            },

            addTransferWiseAccount() {

                this.isLoading = true;
                var self = this

                setTimeout(function() {

                    self.$store.dispatch('TRANSFERWISE_POST', this.form)
                        .then( response => {
                            console.log( response )
                            self.isLoading = false
                            self.modal = !self.modal
                        })
                    .catch( error => {
                        self.isLoading = false
                        console.log(error.response)
                    })

                }, 2000, this);
            }
        }
    }
</script>

<style scoped>
    .myauto {
        margin-top: auto;
        margin-bottom: auto;
    }
</style>
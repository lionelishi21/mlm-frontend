
const state = {
    account: {},
}

const getters = {
    transferwiseAccount: state => state.account
}

const actions = {

    TRANSFERWISE_FETCH_ACCOUNT({commit}) {

    },

    TRANSFERWISE_POST(content, params) {
        return new Promise((resolve, reject) => {

        })
    }

}

const mutations = {

}

export default  {
    state,
    getters,
    actions,
    mutations
}
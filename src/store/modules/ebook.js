import api from '../../api/services/ebook-service.js';
import axios from 'axios';

const actions = {
    GET_EBOOK_TOKEN() {
        return new Promise((resolve, reject) => {

            axios({
                url: 'http://majesticaring/api/v1/download-ebook',
                method: 'GET',
                responseType: 'blob',
            })
                .then( response => {
                    console.log(response)
                    resolve(response)
                })
                .catch( response => {
                    console.log(response)
                    reject(response)
                })
        })
    }
}

export default {
    actions
}
import axios from 'axios'
import Vue from 'vue';
export default() => {
    return axios.create({
        // baseURL: 'http://127.0.0.1:8000/api/v1/',
        baseURL: 'https://majesticaring/api/',
        withCredentials: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
            'Content-Type': 'application/json',
        }
    })
}


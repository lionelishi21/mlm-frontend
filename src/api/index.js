import axios from 'axios'
import Vue from 'vue';
export default() => {
    return axios.create({
        baseURL: 'https://majesticaring.com/api/v1/',
        // baseURL: 'http://127.0.0.1:8000/api/v1/',
        withCredentials: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length',
            'Content-Type': 'application/json',
        }
    })
}


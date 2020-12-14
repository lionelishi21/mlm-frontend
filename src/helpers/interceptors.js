import axios from 'axios';
import Vue from "vue";
import router from "../router";

export default function setup () {
    axios.interceptors.request.use( function( config ) {
        const token = localStorage.getItem('access_token')    ;
        if ( token ) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, function(err ) {
        return Promise.reject(err)
    });
}



// Vue.http.interceptors.push((request, next)  => {
//     request.headers['Authorization'] = auth.getAuthHeader()
//     next((response) => {
//         if(response.status == 401 ) {
//             auth.logout();
//             router.go('/login?unauthorized=1');
//         }
//     });
// });
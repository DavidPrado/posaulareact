import axios from "axios";

export const getPrince = () =>{
    return axios.request({
        baseURL : 'https://economia.awesomeapi.com.br/',
        url: 'json/all'
    })
}
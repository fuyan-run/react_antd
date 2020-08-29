import axios from "axios";
import { message } from 'antd';
// import { loginout } from './checkLogin'

axios.defaults.baseURL = CONFIG.axiosBase;
// axios.defaults.withCredentials = true;

let acitveAxios = 0
let timer
const showLoading = () => {
    acitveAxios++
    if (timer) {
        clearTimeout(timer)
    }
    timer = setTimeout(() => {
        if (acitveAxios > 0) {
            document.getElementById("allloading").style.display = "block"
        }
    }, 400);
}

const closeLoading = () => {
    acitveAxios--
    if (acitveAxios <= 0) {
        clearTimeout(timer)
        document.getElementById("allloading").style.display = "none"
    }
}

axios.interceptors.response.use(function (configData) {
    closeLoading();
    // console.log('config-response', configData);
    if (configData.config.url === "/api/login" && configData.data.success === true) {
        const token = configData.data.data.token;
        localStorage.setItem("token", token)
    }
    if (configData.data.success === false) {
        if (configData.data.code === 10006) {
            message.error("请重新登录！");
            // loginout();
        } else {
            message.error(configData.data.message);
        }
    }
    return configData.data;
}, function (error) {
    closeLoading();
    message.error(error.message);
    return Promise.reject(error);
});

axios.interceptors.request.use(function (config) {
    showLoading();
    if (config.url !== "/api/login") {
        config.headers["Authorization"] = localStorage.getItem("token") || ""
    }
    return config;
}, function (error) {
    closeLoading();
    return Promise.reject(error);
});

export const baseAjax = function (url, type="GET", params = {}, headers = {}) {
    
    let axiosBase = {
        method: type,
        url: url,
        headers
    }
    switch (type) {
        case 'GET':
            axiosBase.params=params
            break;
        case 'POST':
            axiosBase.data=params
            break;
        default:
            axiosBase.params=params
    }
    return axios({...axiosBase});
}

export const noobGet = (url, params, headers) =>{
    return baseAjax(url, "GET", params, headers)
}
export const noobPost = (url, params, headers) =>{
    return baseAjax(url, "POST", params, headers)
}
export const noobDelete = (url, params, headers) =>{
    return baseAjax(url, "DELETE", params, headers)
}
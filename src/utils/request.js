import axios from 'axios'
import API_URL from './urls'
import {Toast} from 'antd-mobile'

const Axios=axios.create({
    baseURL:API_URL
})

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    Toast.loading('loading',30*29*12,null)
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    Toast.hide()
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export default Axios
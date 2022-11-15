/**
 * @Author liming
 * @Date 2022/11/15 23:18
 **/

import originAxios from 'axios'
import {message} from 'antd'

const axios = originAxios.create({
    timeout: 20000  //请求超时是20s
})

axios.interceptors.response.use(
    function (response) {
        if (response.data && response.data.flag === 1) {
            /*
                successful response:
                {"flag": 0, "data": ""}

                unsuccessful response:
                {"flag": 1, "msg": "server error"}
            */
            let errorMsg = response.data.msg;
            message.error(errorMsg);
            return Promise.reject(errorMsg);
        }
        return response.data;
    },
    function (error) {
        return Promise.reject(error)
    }
)

export function get(url: string, data: any) {
    return axios.get(url, {
        params: data
    });
};

// By default, axios serializes JavaScript objects to JSON.
export function post(url: string, data: any) {
    //这种发送到后端的是表单格式，后端就不用进行JSON解析了
    return axios({
        //没有使用return axios.post这种方式调用，这种不好
        method: 'post',
        url,
        data
    });
};

export default axios;
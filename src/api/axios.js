import axios from "axios"

const conf = {
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
    timeout: 3000,
    baseURL: 'http://localhost:8080/'
}
const instance = axios.create(conf)

instance.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    //请求失败的情况
    error => {
        if (error.response.status){
            switch (error.response.status){
                case 400:
                    console.log('请求异常')
                    break;
                case 500: 
                    console.log('服务器端异常！')
                    break;
                default: 
                    console.log('请求失败！')
            }
            return Promise.reject(error.response)
        }
    }
)

/** 
 * get方法
 * @param {String} url [请求地址]
 * @param {Object} params [请求携带的参数]
 * */ 
 
export function get(url, params){
    //空值过滤
    let newObj = {}
    for(let key in params){
        if(params[key]){
            newObj[key] = params[key];
        }
    }
    return new Promise((resolve, reject) => {
        instance.get(url, {
            params: newObj
        })
        .then(res => {
            resolve(res.data)
        })
        .catch(err => {
            reject(err)
        })
    })
}

/**  
 * post方法
 * @param {String} url [请求地址]
 * @param {Object} params [请求携带的参数]
 * */ 
 
export function post(url, params){
    //空值过滤
    let newObj = {}
    for(let key in params){
        if(params[key]){
            newObj[key] = params[key];
        }
    }
    return new Promise((resolve, reject) => {
        instance
        .post(url, JSON.stringify(params))
        .then(res => {
            resolve(res.data)
        })
        .catch(err => {
            reject(err)
        })
    })
}
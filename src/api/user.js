import * as api from '@/api/axios.js'

export function showMsg(params){
    return api.get('/api/showMsg', params)
}

export function postMsg(params){
    return api.post('/api/postMsg', params)
}
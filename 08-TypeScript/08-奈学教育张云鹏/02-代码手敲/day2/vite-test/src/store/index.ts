import { defineStore, StoreDefinition } from 'pinia'
export const useStore: StoreDefinition = defineStore('main', {
    state() {
        return {
            userInfo: {},
            token: ''
        }
    },
    actions: {
        setUserInfo(userInfo) {
            this.userInfo = userInfo
        },
        setToken(token) {
            this.token = token
        }
    },
    // 配置持久化策略
    persist: {
        // 持久化key
        key: 'userData',
        // 持久化对象
        storage: window.sessionStorage,
        // 需要持久化存储的key
        paths: ['userInfo', 'token'],
        //是否可以重写
        overwrite: true
    },
})

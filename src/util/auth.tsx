import {AsyncStorage} from "react-native";

export const login = (token: string) => AsyncStorage.setItem('token', token).then(()=>{
    location.reload(false);
})

export const logout = () => AsyncStorage.removeItem('token').then(res=>{
    location.reload(false);
})

export const isLogin = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('token').then(res => {
            if (res) {
                resolve(true)
            }
        }).catch(e => {
            reject(e)
        })
    })
}

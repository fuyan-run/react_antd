import { noobGet } from "fetch";

export const checkLogin = async (jump=false) => {
    try {
        const token = localStorage.getItem("token") || "";
        if (token) {
            const res = await noobGet('/api/checklogin', { token })
            if (!res.data) {
                if (!jump) {
                    window.location.href = '/login';
                } else {
                    return false
                }
            } else {
                return true
            }
        }
    } catch (error) {
        
    }
}

export const loginout = async () => {
    try {
        localStorage.setItem('token', null)
        window.location.href = '/login';
    } catch (error) {
        
    }
}
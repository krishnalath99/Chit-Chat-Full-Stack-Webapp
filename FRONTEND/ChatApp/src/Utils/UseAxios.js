import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext"
import dayjs from "dayjs";

const baseURL = "http://127.0.0.1:8000/api"

const UseAxios = () => {
    const {authTokens, setUser, setAuthTokens} = useContext(AuthContext)

    const axiosInstance = axios.create({
        baseURL,
        headers: {
            Authorization: authTokens?.access ? `Bearer ${authTokens?.access}` : ''
        }
    })

    axiosInstance.interceptors.request.use(async req => {
        if (!authTokens || !authTokens.access) return req;
        
        const user = jwtDecode(authTokens.access)
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1

        if (isExpired) return req

        const response = await axios.post(`${baseURL}/token/refresh/`, {
            refresh: authTokens.refresh
        })
        localStorage.setItem("authTokens", JSON.stringify(response.data))
        
        setAuthTokens(response.data)
        setUser(jwtDecode(response.data.access))

        req.headers.Authorization = `Bearer ${response.data.access}`
        return req
    })

    return axiosInstance
}

export default UseAxios;
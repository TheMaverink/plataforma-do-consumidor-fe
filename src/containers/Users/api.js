import axios from "config/api"

export const userLoginApi = (userData) => axios.post('/users/login', userData)

export const isUserLoggedInApi = () => axios.get('/users/isUserLoggedIn')

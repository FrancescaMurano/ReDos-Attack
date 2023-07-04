import axios from "axios";
import { createContext, useState } from "react";
import {useNavigate} from "react-router-dom";

const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
    const navigate = useNavigate();

    axios.interceptors.request.use(req => {
        req.meta = req.meta || {}
        req.meta.requestStartedAt = new Date().getTime();
        return req;
    })
    axios.interceptors.response.use(res => {
        res.durationInMs = new Date().getTime() - res.config.meta.requestStartedAt
        return res;
    })


    const login = async (username, password) => {
        console.log(username, password)
        const payload = {
            "username": username,
            "password": password,
        }
        const url = 'http://localhost:3200/login'
        const apiResponse = await axios.post(url, payload).then((response) => {
            console.log(response.data)
            if(response.data === true)
                navigate("/")
            else
                alert("Errore") 

            console.log("duration",response.durationInMs)

        }).catch((error) => {
            console.log(error)
        })


    };


    return (<LoginContext.Provider value={
        { login }
    }> {children} </LoginContext.Provider>);
};


export default LoginContext;
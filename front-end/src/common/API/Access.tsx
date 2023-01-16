import axios from 'axios';
import React from "react";

export const login_api= (email: string, password: string) => {
    const response= axios.post("http://localhost:3000/api/login", {
        email,
        password,
    });
    return response;
}

export const signup_api= (name:string,email: string,phone_num:string, password: string) => {
    const response= axios.post("http://localhost:3000/api/signup", {
        name,
        email,
        phone_num,
        password,
    });
    return response;
}
import axios from "axios";

export const loginApi = (email: string, password: string) => {
    const response = axios.post("http://localhost:3000/api/login", {
        email,
        password
    });
    return response;
};

export const signUpApi = (
    name: string,
    email: string,
    phone_num: string,
    password: string
) => {
    const response = axios.post("http://localhost:3000/api/signup", {
        name,
        email,
        phone_num,
        password
    });
    return response;
};

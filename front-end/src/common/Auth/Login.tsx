import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";

import { useAppDispatch } from "../../app/hooks";

import { loginAction } from "../../features/login/loginSlice";

import { login_api } from "../API/Access";

export const Login = () => {

    const [Userdetails, setUserdetails] = useState({ email: "", password: "" });

    const dispatch = useAppDispatch();

    const handlechange = (e: any) => {
        setUserdetails({ ...Userdetails, [e.target.type]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        // e.preventDefault();

        dispatch(loginAction(Userdetails));
    };

    return (
        <div>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={handlechange} />
            </FormControl>

            <FormControl>
                <FormLabel>password</FormLabel>
                <Input type="password" onChange={handlechange} />
            </FormControl>

            <Button colorScheme="blue" onClick={handleSubmit}>
                Button
            </Button>
        </div>
    );
};

import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";

export const Login = () => {
    const [UserInfo, setUserInfo] = useState({ email: "", password: "" });

    const handlechange = (e: any) => {
        setUserInfo({ ...UserInfo, [e.target.type]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(UserInfo);
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

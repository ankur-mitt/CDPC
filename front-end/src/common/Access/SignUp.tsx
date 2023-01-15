import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";

export const SignUp = () => {
    const [UserInfo, setUserInfo] = useState({
        name: "",
        email: "",
        mobile_num: "",
        password: ""
    });

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
                <FormLabel>Name</FormLabel>
                <Input type="name" onChange={handlechange} />
            </FormControl>

            <FormControl>
                <FormLabel>Email Address</FormLabel>
                <Input type="email" onChange={handlechange} />
            </FormControl>

            <FormControl>
                <FormLabel>Mobile Number</FormLabel>
                <Input type="mobile_num" onChange={handlechange} />
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

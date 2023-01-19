import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
// import { signup_api } from "../API/Access";

export const SignUp = () => {
    const [Userdetails, setUserdetails] = useState({
        name: "",
        email: "",
        mobile_num: "",
        password: ""
    });

    const handlechange = (e: any) => {
        setUserdetails({ ...Userdetails, [e.target.type]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        
        // const res=signup_api(UserInfo.name,UserInfo.email,UserInfo.mobile_num,UserInfo.password);
        console.log(Userdetails);
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

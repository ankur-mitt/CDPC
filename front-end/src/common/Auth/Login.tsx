import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";

import { useAppDispatch } from "../../app/hooks";
import { loginAction } from "../../features/login/loginSlice";

export const Login = () => {
    const [userdetails, setUserdetails] = useState({ email: "", password: "" });

    const dispatch = useAppDispatch();


    const handleChange = (e: any) => {
        setUserdetails({ ...userdetails, [e.target.type]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        dispatch(loginAction());
    };

    return (
        <div>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={handleChange} />
            </FormControl>

            <FormControl>
                <FormLabel>password</FormLabel>
                <Input type="password" onChange={handleChange} />
            </FormControl>

            <Button colorScheme="blue" onClick={handleSubmit}>
                Button
            </Button>
        </div>
    );
};

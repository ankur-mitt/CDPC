import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginAction, selectlogin } from "../../features/login/loginSlice";

export const Login = () => {
    const [Userdetails, setUserdetails] = useState({ email: "", password: "" });

    const dispatch = useAppDispatch();

    const login = useAppSelector(selectlogin);

    const handlechange = (e: any) => {
        setUserdetails({ ...Userdetails, [e.target.type]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        console.log(login);
        dispatch(loginAction());
        console.log(login);
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

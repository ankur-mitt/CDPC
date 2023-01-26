import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";

import { useAppDispatch } from "../../app/hooks";
import { loginAction } from "../../features/login/loginSlice";

export const Login = () => {
    const [userDetails, setUserDetails] = useState({ email: "", password: "" });

    const dispatch = useAppDispatch();


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserDetails({ ...userDetails, [event.target.type]: event.target.value });
    };

    const handleSubmit = () => {
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
                Log In
            </Button>
        </div>
    );
};

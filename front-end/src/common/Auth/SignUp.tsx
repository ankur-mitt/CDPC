import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";


export const SignUp = () => {
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        mobileNum: "",
        password: ""
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserDetails({ ...userDetails, [event.target.type]: event.target.value });
    };

    const handleSubmit = () => {
        console.log(userDetails);
    };

    return (
        <div>
            <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type="name" onChange={handleChange} />
            </FormControl>

            <FormControl>
                <FormLabel>Email Address</FormLabel>
                <Input type="email" onChange={handleChange} />
            </FormControl>

            <FormControl>
                <FormLabel>Mobile Number</FormLabel>
                <Input type="mobileNum" onChange={handleChange} />
            </FormControl>

            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={handleChange} />
            </FormControl>

            <Button colorScheme="blue" onClick={handleSubmit}>
                Sign Up
            </Button>
        </div>
    );
};

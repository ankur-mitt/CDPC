import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";


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

import { Stack, Image, Text, Card, CardBody } from "@chakra-ui/react";
import {PhoneIcon,EmailIcon} from '@chakra-ui/icons'
import { TeamMemberInfoType } from "../../types";

export default function TeamMember({memberInfo,...props}:{memberInfo:TeamMemberInfoType}) {
    
    const {name,designation, emailID, imgLink, contactNumber} = memberInfo;

    return (
        <Card maxW='sm'>
            <CardBody>
                <Stack direction='column' align='center'>
                    <Image
                        // boxSize='100px'
                        objectFit='cover'
                        align = 'center'
                        src={imgLink}
                        alt= {name}
                    />
                    <Text as = 'b'>{name}</Text>
                    <Text>{designation}</Text>
                    <Stack direction ='row'>
                        <EmailIcon/>
                        <Text>{emailID}</Text>
                    </Stack>
                    {
                        contactNumber&& (
                        <Stack direction ='row'>
                            <PhoneIcon/>
                            <Text>{contactNumber}</Text>
                        </Stack>
                        )
                    }      
                </Stack>
            </CardBody>
        </Card>
    )

}


import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Card, CardBody, Image, Stack, Text } from "@chakra-ui/react";

import { TeamMemberInfoType } from "../../types";

export default function TeamMember({
    memberInfo,
    ...props
}: {
    memberInfo: TeamMemberInfoType;
}) {
    const { name, designation, emailID, imgLink, contactNumber } = memberInfo;

    return (
        <Card size="sm">
            <CardBody>
                <Stack direction="column" align="center">
                    <Image
                        // boxSize='100px'
                        objectFit="cover"
                        align="center"
                        src={imgLink}
                        alt={name}
                    />
                    <Text as="b">{name}</Text>
                    <Text>{designation}</Text>
                    <Stack direction="row">
                        <EmailIcon />
                        <Text>{emailID}</Text>
                    </Stack>
                    {contactNumber && (
                        <Stack direction="row">
                            <PhoneIcon />
                            <Text>{contactNumber}</Text>
                        </Stack>
                    )}
                </Stack>
            </CardBody>
        </Card>
    );
}

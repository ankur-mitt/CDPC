import { Card, CardBody, Heading, CardHeader, Button, Badge, Flex, Spacer } from "@chakra-ui/react";
import { Resource } from "../../types";

export default function ResourceCard({ data }:{ data:Resource }) {
    return (
        <Card>
            <CardHeader>
                <Heading size='md'> { data['company']} - { data['year'] } </Heading>
            </CardHeader>
            <CardBody>
                <p>{ data['type']} - {data['role']}</p>
            </CardBody>
            <Flex minWidth='max-content' alignItems='center'>
                <Button className="card-footer"> { data['resourcetype'] } </Button>
                <Spacer />
                <Badge>{ data['name'] }</Badge>
            </Flex>
        </Card>
    );
}
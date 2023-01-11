import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    HStack,
    Heading,
    Image,
    Stack,
    Tag,
    Text
} from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NewsCard = ({ isLoaded }: { isLoaded: boolean }) => {
    return (
        <>
            <Card maxW="100%" m={4} bg={"blue.50"}>
                <CardBody>
                    <Stack mt="6" spacing="3">
                        <Heading size="md">
                            <Skeleton height="auto" isLoaded={isLoaded}>
                                News 2
                            </Skeleton>
                        </Heading>
                        <Text>
                            <Skeleton height="auto" isLoaded={isLoaded}>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Consectetur recusandae earum
                                neque id, atque deserunt odit nisi accusantium,
                                labore eligendi commodi sequi eos dicta
                                assumenda libero doloribus exercitationem nulla
                                saepe.
                            </Skeleton>
                        </Text>
                        <Text color="blue.600" fontSize="2xl">
                            <Skeleton
                                height="auto"
                                width="200px"
                                isLoaded={isLoaded}
                            >
                                <HStack spacing={4}>
                                    <Tag
                                        size={"sm"}
                                        variant="subtle"
                                        colorScheme="blue"
                                    >
                                        #AI
                                    </Tag>
                                    <Tag
                                        size={"sm"}
                                        variant="subtle"
                                        colorScheme="blue"
                                    >
                                        #TECH
                                    </Tag>
                                    <Tag
                                        size={"sm"}
                                        variant="subtle"
                                        colorScheme="blue"
                                    >
                                        #ML
                                    </Tag>
                                </HStack>
                            </Skeleton>
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing="2">
                        <Skeleton height="auto" isLoaded={isLoaded}>
                            <Button
                                variant="solid"
                                colorScheme="blue"
                                as={Link}
                                to={"/news/2q3w4etryhjnbvd/view"}
                                disabled={!isLoaded}
                            >
                                View
                            </Button>
                        </Skeleton>
                        <Skeleton height="auto" isLoaded={isLoaded}>
                            <Button
                                variant="ghost"
                                colorScheme="blue"
                                as={Link}
                                to={"/news/create"}
                                disabled={!isLoaded}
                            >
                                Edit
                            </Button>
                        </Skeleton>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    );
};

export default NewsCard;

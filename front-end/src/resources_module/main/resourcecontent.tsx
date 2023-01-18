import { Box, Button, Input, VStack } from "@chakra-ui/react";

export default function ResourceContent() {
    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            color="black"
            className="resource-content"
        >
            <VStack align="stretch">
                <Input
                    className="resource-content-heading"
                    variant="unstyled"
                    placeholder="Heading"
                />
                <Box
                    borderWidth="1px"
                    borderRadius="lg"
                    w="100%"
                    h="200px"
                    p={4}
                    color="black"
                >
                    Markdown editor
                </Box>
                <div className="upload-resource-div">
                    <Button colorScheme="teal">Upload</Button>
                </div>
            </VStack>
        </Box>
    );
}

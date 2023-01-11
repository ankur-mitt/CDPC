import { Box, Button, ButtonGroup, Heading } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

import { MarkdownTypes } from "../types";
import NewsCreateRules from "./rules";

const mdParser = new MarkdownIt(/* Markdown-it options */);

const NewsCreateModule = () => {
    const toast = useToast();
    const handleChange = ({ html, text }: MarkdownTypes) => {
        console.log(text);
    };
    const handleImageUpload = (file: File) => {
        const MIN_FILE_SIZE = 50; // 50kb
        const MAX_FILE_SIZE = 1024; // 1MB
        const fileSizeKiloBytes = file.size / 1024;
        if (fileSizeKiloBytes > MAX_FILE_SIZE) {
            toast({
                title: "Error.",
                description: `Max Image Size Exceeded`,
                status: "error",
                duration: 9000,
                isClosable: true,
                position: "top-right"
            });
            return;
        }
        if (fileSizeKiloBytes < MIN_FILE_SIZE) {
            toast({
                title: "Error.",
                description: `Image Size is Too Small`,
                status: "error",
                duration: 9000,
                isClosable: true,
                position: "top-right"
            });
            return;
        }
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (data: ProgressEvent<FileReader>) => {
                resolve(data.target?.result);
            };
            reader.readAsDataURL(file);
            toast({
                title: "Congrats.",
                description: `Image Added Successfully`,
                status: "success",
                duration: 9000,
                isClosable: true,
                position: "top-right"
            });
        });
    };
    return (
        <>
            <Box bg="white" p={6} rounded="md" w="100%">
                <Heading as="h1" size="xl" color="blue.400" noOfLines={1}>
                    Create News
                </Heading>
            </Box>
            <Box bg="white" p={6} rounded="md" w="100%">
                <MdEditor
                    style={{ height: "80vh" }}
                    renderHTML={(text) => mdParser.render(text)}
                    onChange={handleChange}
                    onImageUpload={handleImageUpload}
                    table={{ maxRow: 10, maxCol: 10 }}
                    // shortcuts={true}
                />
                <Box
                    display={"flex"}
                    justifyContent="end"
                    bg="white"
                    p={6}
                    rounded="md"
                    w="100%"
                >
                    <ButtonGroup variant="outline" spacing="6">
                        <Button colorScheme="blue">Save</Button>
                        <Button>Cancel</Button>
                    </ButtonGroup>
                </Box>
                <NewsCreateRules />
            </Box>{" "}
        </>
    );
};

export default NewsCreateModule;

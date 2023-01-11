import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import MarkdownIt from "markdown-it";
import { useEffect, useState } from "react";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { Link } from "react-router-dom";

// import MarkdownTypes from "../types";
import demo from "./Demo.md";

const mdParser = new MarkdownIt();

const NewsCreateModule = () => {
    const [Html, setHtml] = useState<string>("");
    useEffect(() => {
        fetch(demo)
            .then((response) => response.text())
            .then((text: string) => {
                setHtml(text);
            });
    }, []);
    return (
        <>
            <Box bg="white" p={6} rounded="md" w="100%">
                <Box
                    display={"flex"}
                    justifyContent="center"
                    bg="white"
                    p={4}
                    rounded="md"
                    w="100%"
                >
                    <ButtonGroup variant="outline" spacing="6">
                        <Button colorScheme="blue" as={Link} to={"/news"}>
                            Back
                        </Button>
                        <Button as={Link} to={"/news/create"}>
                            New
                        </Button>
                    </ButtonGroup>
                </Box>
                <MdEditor
                    style={{ height: "auto" }}
                    renderHTML={(text) => mdParser.render(text)}
                    value={Html}
                    view={{ menu: false, md: false, html: true }}
                />
            </Box>{" "}
        </>
    );
};

export default NewsCreateModule;

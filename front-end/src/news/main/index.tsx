import { UpDownIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    FormControl,
    Input,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItemOption,
    MenuList,
    MenuOptionGroup,
    Spinner
} from "@chakra-ui/react";
import "react-markdown-editor-lite/lib/index.css";

import NewsCard from "./newsCard";

const NewsMainModule = () => {
    return (
        <>
            <Box
                bg="white"
                p={4}
                rounded="md"
                w="100%"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "nowrap",
                    alignItems: "center"
                }}
            >
                <FormControl isInvalid={false} maxW={"88%"}>
                    {/* <FormLabel>Email</FormLabel> */}
                    <Input
                        type="email"
                        placeholder="Type a keyword.."
                        // value={input}
                        // onChange={handleInputChange}
                    />
                </FormControl>
                <Menu closeOnSelect={false}>
                    <MenuButton
                        as={Button}
                        colorScheme="blue"
                        m={4}
                        maxW={"22%"}
                    >
                        Filter by
                        <UpDownIcon m={1} />
                    </MenuButton>
                    <MenuList minWidth="240px">
                        <MenuOptionGroup
                            defaultValue="asc"
                            title="Order of Date"
                            type="radio"
                        >
                            <MenuItemOption value="asc">
                                Ascending
                            </MenuItemOption>
                            <MenuItemOption value="desc">
                                Descending
                            </MenuItemOption>
                        </MenuOptionGroup>
                        <MenuDivider />
                        <MenuOptionGroup title="Tags" type="checkbox">
                            <MenuItemOption value="Six Month">
                                Six Month
                            </MenuItemOption>
                            <MenuItemOption value="Two Month">
                                Two Month
                            </MenuItemOption>
                            <MenuItemOption value="Minor">Minor</MenuItemOption>
                            <MenuItemOption value="Concentration">
                                Concentration
                            </MenuItemOption>
                        </MenuOptionGroup>
                    </MenuList>
                </Menu>
            </Box>
            <Box
                bg="white"
                p={4}
                rounded="md"
                w="100%"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap"
                }}
            >
                <NewsCard isLoaded={false} />
                <NewsCard isLoaded={true} />
                <NewsCard isLoaded={false} />
                <NewsCard isLoaded={false} />
            </Box>
            <Box
                bg="white"
                p={4}
                rounded="md"
                w="100%"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap"
                }}
            >
                <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                />
            </Box>
        </>
    );
};

export default NewsMainModule;

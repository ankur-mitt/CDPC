import { ChakraProvider, Flex, HStack, VStack } from "@chakra-ui/react";
import {
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";

import data from "../types/tempData";

console.log(data);
export default function CommonModule() {
    return (
        <>
            <VStack>
                {data.map((entry) => {
                    return (
                        <>
                            <Flex w={"100%"}>{entry.year}</Flex>
                            <TableContainer>
                                <Table variant="striped" colorScheme="teal">
                                    <TableCaption>
                                        YearWise Placement data
                                    </TableCaption>
                                    <Thead>
                                        <Tr>
                                            <Th>Description</Th>
                                            <Th>
                                                {" "}
                                                {entry.year +
                                                    " - " +
                                                    (entry.year + 1)}
                                            </Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>Highest Annual Package</Td>
                                            <Td>{entry.highest + " LPA"}</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Average Package</Td>
                                            <Td>{entry.avg + " LPA"}</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>No of Domestic offers</Td>
                                            <Td>
                                                {entry.domesticOffers + " LPA"}
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </>
                    );
                })}
            </VStack>
        </>
    );
}

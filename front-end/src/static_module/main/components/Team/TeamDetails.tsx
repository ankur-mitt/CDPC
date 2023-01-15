import { Box, Spinner, Text, Wrap, WrapItem } from "@chakra-ui/react";

import { useGetTeamDetails } from "../../hooks";
import TeamMember from "./TeamMember";

export default function TeamDetails() {
    const { isLoading, teamDetails } = useGetTeamDetails();

    return (
        <Box>
            {isLoading ? (
                <Spinner />
            ) : teamDetails?.length ? (
                <Wrap justify="center">
                    {teamDetails.map((member, index) => {
                        return (
                            <WrapItem key={index}>
                                <TeamMember memberInfo={member} />
                            </WrapItem>
                        );
                    })}
                </Wrap>
            ) : (
                <Text color="tomato">Some error occured</Text>
            )}
        </Box>
    );
}

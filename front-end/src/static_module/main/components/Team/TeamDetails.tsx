import {useState,useEffect} from 'react'
import {Box, Spinner, Text, Wrap, WrapItem} from '@chakra-ui/react'
import TeamMember from './TeamMember'
import { TeamMemberInfoType } from "../../types"



export default function TeamDetails() {
    const [isLoading,setIsLoading] = useState<boolean>(true);
    const [teamDetails,setTeamDetails] = useState<TeamMemberInfoType[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setTeamDetails(data);
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
            setIsLoading(false);
        })
    },[])

    return (
        <Box>
        {
            isLoading ? <Spinner/> :
            teamDetails?.length ?
            <Wrap justify='center'> 
            {teamDetails.map((member,index)=>{
                return (
                <WrapItem key={index}>
                    <TeamMember memberInfo={member}/>
                </WrapItem>
                )
            })} 
            </Wrap>:
            <Text color='tomato'>Some error occured</Text>
        }
        </Box>

    )


}
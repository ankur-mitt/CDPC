import {useState, useEffect} from 'react';
import { getTeamDetails } from '../services';
import { TeamMemberInfoType } from '../types';

export function useGetTeamDetails() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [teamDetails, setTeamDetails] = useState<TeamMemberInfoType[]>([]);

    useEffect(() => {
        getTeamDetails()
            .then((data) => {
                setTeamDetails(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    }, []);

    return { isLoading, teamDetails };

}
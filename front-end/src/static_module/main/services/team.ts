import { TeamMemberInfoType } from "../types";

function sleep(seconds: number) {
    return new Promise<void>((resolve, _reject) => {
        window.setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
}

const dummyTeamDetails: TeamMemberInfoType[] = [
    {
        name: "Riya",
        designation: "HPC",
        emailID: "hpc@iitrpr.ac.in",
        imgLink:
            "https://visualpharm.com/assets/387/Person-595b40b75ba036ed117da139.svg",
        contactNumber: "1234567890"
    },
    {
        name: "Anirudh",
        designation: "APC SDE",
        emailID: "apc-sde@iitrpr.ac.in",
        imgLink:
            "https://visualpharm.com/assets/387/Person-595b40b75ba036ed117da139.svg",
        contactNumber: "1234567890"
    }
];

async function getTeamDetails(): Promise<TeamMemberInfoType[]> {
    await sleep(2);
    return dummyTeamDetails;
}

export { getTeamDetails };

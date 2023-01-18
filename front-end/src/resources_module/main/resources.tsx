import { SimpleGrid } from "@chakra-ui/react";

import { Resource } from "../../types";
import "../styles/resourcemodule.css";
import ResourceCard from "./resourcecard";

export default function Resources({
    resourceList
}: {
    resourceList: Resource[];
}) {
    return (
        <div className="resources-grid">
            <SimpleGrid
                spacing={5}
                templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
            >
                {resourceList.map((resource: Resource) => (
                    <ResourceCard data={resource}></ResourceCard>
                ))}
            </SimpleGrid>
        </div>
    );
}

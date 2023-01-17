import { Divider } from "@chakra-ui/react";

import { resources } from "../../data/resources";
import AddButton from "./addbutton";
import FilterBar from "./filterbar";
import Resources from "./resources";

export default function ResourcesMainModule() {
    return (
        <div>
            <FilterBar />
            <Divider />
            <Resources resourceList={resources} />
            <AddButton />
        </div>
    );
}

import { Divider } from "@chakra-ui/react";
import AddButton from "./addbutton";
import { resources } from "../../data/resources";
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
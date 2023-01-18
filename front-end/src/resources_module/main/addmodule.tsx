import { Button } from "@chakra-ui/react";

import "../styles/resourcemodule.css";
import ResourceContent from "./resourcecontent";
import ResourceFields from "./resourcefields";

export default function ResourcesAddModule() {
    return (
        <div>
            <ResourceFields />
            <ResourceContent />
            <Button colorScheme="teal" className="submit-button">
                Submit
            </Button>
        </div>
    );
}

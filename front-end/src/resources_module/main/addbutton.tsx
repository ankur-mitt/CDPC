import { AddIcon } from "@chakra-ui/icons";
import { IconButton, Tooltip } from "@chakra-ui/react";

import "../styles/addbutton.css";

export default function AddButton() {
    return (
        <Tooltip label="Add resource">
            <IconButton
                colorScheme={"teal"}
                className="add-button"
                aria-label="Add Resource"
                icon={<AddIcon className="add-icon" />}
            />
        </Tooltip>
    );
}

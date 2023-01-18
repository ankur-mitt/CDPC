import {
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Wrap,
    WrapItem
} from "@chakra-ui/react";

import Dropdown from "../../common/dropdown";
import { jobType, resourceType } from "../../data/filters";

export default function ResourceFields() {
    return (
        <div className="resource-fields-bar">
            <Wrap>
                <WrapItem>
                    <Dropdown menuItems={jobType} menuName={"Job Type"} />
                </WrapItem>
                <WrapItem>
                    <Input variant="filled" placeholder="Company" />
                </WrapItem>
                <WrapItem>
                    <NumberInput
                        variant="filled"
                        defaultValue={new Date().getFullYear()}
                        max={new Date().getFullYear()}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </WrapItem>
                <WrapItem>
                    <Input variant="filled" placeholder="Profile" />
                </WrapItem>
                <WrapItem>
                    <Dropdown
                        menuItems={resourceType}
                        menuName={"Resource Type"}
                    />
                </WrapItem>
            </Wrap>
        </div>
    );
}

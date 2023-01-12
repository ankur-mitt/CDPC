import { DeleteIcon, SearchIcon } from "@chakra-ui/icons";
import { ButtonGroup, Flex, IconButton, Spacer } from "@chakra-ui/react";
import Dropdown from "../../common/dropdown";
import { company, jobType, profile, resourceType, year } from "../../data/filters";
import "../styles/filterBar.css";

export default function FilterBar() {
    return (
        <div className="filter-bar">
            <Flex minWidth='max-content' alignItems='center' gap='2'>
                    <Dropdown menuItems={jobType} menuName={'Job Type'} />
                    <Dropdown menuItems={company} menuName={'Company'} />
                    <Dropdown menuItems={year} menuName={'Year'} />
                    <Dropdown menuItems={profile} menuName={'Profile'} />
                    <Dropdown menuItems={resourceType} menuName={'Resource Type'} />
                <Spacer />
                <ButtonGroup gap='2'>
                    <IconButton colorScheme='teal' aria-label='Remove filters' icon={<DeleteIcon />} />
                    <IconButton colorScheme='teal' aria-label='Search database' icon={<SearchIcon />} />
                </ButtonGroup>
            </Flex>
        </div>
    );
};
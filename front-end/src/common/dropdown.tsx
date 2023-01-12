import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'

export default function Dropdown({ menuItems, menuName }:{ menuItems : string[], menuName: string }) {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                { menuName }
            </MenuButton>
            <MenuList>
                {
                    menuItems.map((item: string) => (
                        <MenuItem>{item}</MenuItem>
                    ))
                }
            </MenuList>
        </Menu>
    );
}
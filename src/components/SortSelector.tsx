import { Menu, MenuButton, Button, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {"Order by : Selected Value "}
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        {/* {data.map((platform) => (
      <MenuItem
        key={platform.id}
        onClick={() => onSelectPlatform(platform)}
      >
        {platform.name}
      </MenuItem>
    ))} */}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

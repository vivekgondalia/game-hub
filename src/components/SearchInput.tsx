import {
  Input,
  InputGroup,
  InputLeftElement,
  useMergeRefs,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import React, { useRef } from "react";

//TODO: Passing onSearch two level deep is an ugly practive there is a better way!
interface Props {
  onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;

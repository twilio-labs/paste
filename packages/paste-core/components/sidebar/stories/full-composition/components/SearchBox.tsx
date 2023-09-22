import { Combobox } from "@twilio-paste/combobox";
import { SearchIcon } from "@twilio-paste/icons/esm/SearchIcon";
import * as React from "react";

export const SearchBox: React.FC = () => {
  return (
    <Combobox
      placeholder="Search"
      autocomplete
      insertBefore={<SearchIcon color="colorTextIcon" decorative />}
      labelText="Search application"
      hideVisibleLabel
      items={["one", "two"]}
    />
  );
};

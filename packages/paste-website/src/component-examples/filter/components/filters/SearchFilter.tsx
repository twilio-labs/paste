import { SearchIcon } from "@twilio-paste/icons/esm/SearchIcon";
import { Input } from "@twilio-paste/input";
import { Label } from "@twilio-paste/label";
import React from "react";

export const SearchFilter: React.FC<{
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}> = ({ onChange, value }) => {
  return (
    <>
      <Label htmlFor="search-filter">Search</Label>
      <Input
        id="search-filter"
        type="search"
        insertBefore={<SearchIcon decorative />}
        name="search-filter"
        onChange={onChange}
        value={value}
      />
    </>
  );
};

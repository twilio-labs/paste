/* DISCLAIMER: this is an example, not meant to be used in production */
import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";

import { DefaultFilter } from "./components/DefaultFilter";
import { TABLE_DATA } from "./constants";
import type { FilterListType } from "./types";

const filterList: FilterListType = ["roomType", "participants", "dateCompleted"];

export const DefaultFilterGroupExample = (): JSX.Element => (
  <Box marginBottom="space70" data-cy="filter-group-default-example">
    <DefaultFilter data={TABLE_DATA} filterList={filterList} />
    <Anchor showExternal href="https://codesandbox.io/s/default-filter-group-rloskb?file=/src/App.tsx">
      <strong>View example in CodeSandbox</strong>
    </Anchor>
  </Box>
);

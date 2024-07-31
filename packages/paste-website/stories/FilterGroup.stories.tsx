import * as React from "react";

import { CustomDateFilterGroup } from "../src/component-examples/filter-group/components/CustomDateFilterGroup";
import { DefaultFilterGroup } from "../src/component-examples/filter-group/components/DefaultFilterGroup";
import { SearchFilterGroup } from "../src/component-examples/filter-group/components/SearchFilterGroup";
import { STATIC_TABLE_DATA } from "../src/component-examples/filter-group/constants";

export default {
  title: "Website/FilterGroupExamples",
};

export const DefaultFilterGroupExample = (): JSX.Element => <DefaultFilterGroup data={STATIC_TABLE_DATA} />;

export const SearchFilterGroupExample = (): JSX.Element => <SearchFilterGroup data={STATIC_TABLE_DATA} />;

export const CustomDateFilterGroupExample = (): JSX.Element => <CustomDateFilterGroup data={STATIC_TABLE_DATA} />;

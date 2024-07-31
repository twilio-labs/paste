import * as React from "react";

import { CustomDateFilterGroup } from "../src/component-examples/filter-group/components/CustomDateFilterGroup";
import { DefaultFilterGroup } from "../src/component-examples/filter-group/components/DefaultFilterGroup";
import { STATIC_TABLE_DATA } from "../src/component-examples/filter-group/constants";
import type { FilterListType } from "../src/component-examples/filter-group/types";

export default {
  title: "Website/FilterGroupExamples",
};

export const DefaultFilterGroupExample = (): JSX.Element => {
  const filterList: FilterListType = ["room-type", "participants", "date-time"];
  return <DefaultFilterGroup data={STATIC_TABLE_DATA} filterList={filterList} />;
};

export const SearchFilterGroupExample = (): JSX.Element => {
  const filterList: FilterListType = ["room-type", "participants", "date-time"];
  return <DefaultFilterGroup data={STATIC_TABLE_DATA} withSearch filterList={filterList} />;
};

export const CustomDateFilterGroupExample = (): JSX.Element => <CustomDateFilterGroup data={STATIC_TABLE_DATA} />;

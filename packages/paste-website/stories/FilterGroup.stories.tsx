import * as React from "react";

import { DefaultFilterGroup } from "../src/component-examples/filter-group/components/DefaultFilterGroup";
import { STATIC_TABLE_DATA } from "../src/component-examples/filter-group/constants";
import type { FilterListType } from "../src/component-examples/filter-group/types";

export default {
  title: "Website/FilterGroupExamples",
};

const filterList: FilterListType = ["room-type", "participants", "date-range"];
export const DefaultFilterGroupExample = (): JSX.Element => {
  return <DefaultFilterGroup data={STATIC_TABLE_DATA} filterList={filterList} />;
};

export const SearchFilterGroupExample = (): JSX.Element => {
  return <DefaultFilterGroup data={STATIC_TABLE_DATA} withSearch filterList={filterList} />;
};

export const ConditionalFilterGroupExample = (): JSX.Element => {
  const conditionalFilterList: FilterListType = ["room-type", "participants", "custom"];
  return <DefaultFilterGroup data={STATIC_TABLE_DATA} filterList={conditionalFilterList} />;
};

export const AddFilterGroupExample = (): JSX.Element => {
  const addFilterList: FilterListType = ["room-type", "date-range"];
  const addFiltersList: FilterListType = ["room-sid", "unique-name", "participants"];
  const recommendedFiltersList: FilterListType = ["unique-name", "participants"];
  return (
    <DefaultFilterGroup
      data={STATIC_TABLE_DATA}
      filterList={addFilterList}
      addFiltersList={addFiltersList}
      recommendedFiltersList={recommendedFiltersList}
    />
  );
};

// export const CustomDateFilterGroupExample = (): JSX.Element => <CustomDateFilterGroup data={STATIC_TABLE_DATA} />;

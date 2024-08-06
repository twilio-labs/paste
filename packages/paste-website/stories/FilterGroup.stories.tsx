import * as React from "react";

import { DefaultFilterGroup } from "../src/component-examples/filter/components/DefaultFilterGroup";
import { MoreFilters } from "../src/component-examples/filter/components/filters/MoreFilters";
import { STATIC_TABLE_DATA } from "../src/component-examples/filter/constants";
import type { FilterListType } from "../src/component-examples/filter/types";

export default {
  title: "Website/FilterGroupExamples",
};

const filterList: FilterListType = ["roomType", "participants", "dateCompleted"];
export const DefaultFilterGroupExample = (): JSX.Element => {
  return <DefaultFilterGroup data={STATIC_TABLE_DATA} filterList={filterList} />;
};

DefaultFilterGroupExample.parameters = {
  padding: false,
};

export const SearchFilterGroupExample = (): JSX.Element => {
  return <DefaultFilterGroup data={STATIC_TABLE_DATA} withSearch filterList={filterList} />;
};

SearchFilterGroupExample.parameters = {
  padding: false,
};

export const ConditionalFilterGroupExample = (): JSX.Element => {
  const conditionalFilterList: FilterListType = ["roomType", "participants", "custom"];
  return <DefaultFilterGroup data={STATIC_TABLE_DATA} filterList={conditionalFilterList} />;
};

ConditionalFilterGroupExample.parameters = {
  padding: false,
};

/*
 * export const AddFilterGroupExample = (): JSX.Element => {
 *   const addFilterList: FilterListType = ["room-type", "date-range"];
 *   const addFiltersList: FilterListType = ["room-sid", "unique-name", "participants"];
 *   const recommendedFiltersList: FilterListType = ["unique-name", "participants"];
 *   return (
 *     <DefaultFilterGroup
 *       data={STATIC_TABLE_DATA}
 *       filterList={addFilterList}
 *       addFiltersList={addFiltersList}
 *       recommendedFiltersList={recommendedFiltersList}
 *     />
 *   );
 * };
 */

export const MoreFilterGroupExample = (): JSX.Element => {
  return <MoreFilters />;
};

MoreFilterGroupExample.parameters = {
  padding: false,
};

export const NoResultExample = (): JSX.Element => {
  const noResultList: FilterListType = ["roomType", "participants", "dateCompleted"];
  return (
    <DefaultFilterGroup
      data={STATIC_TABLE_DATA}
      filterList={noResultList}
      selectedFiltersDefault={{
        participants: { min: "100", max: "200" },
      }}
    />
  );
};

NoResultExample.parameters = {
  padding: false,
};

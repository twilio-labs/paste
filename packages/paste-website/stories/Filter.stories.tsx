import * as React from "react";

import { DefaultFilter } from "../src/component-examples/filter/components/DefaultFilter";
import { MoreFilters } from "../src/component-examples/filter/components/filters/MoreFilters";
import { STATIC_TABLE_DATA } from "../src/component-examples/filter/constants";
import type { FilterListType } from "../src/component-examples/filter/types";

export default {
  title: "Website/FilterExamples",
};

const filterList: FilterListType = ["roomType", "participants", "dateCompleted"];
export const DefaultFilterExample = (): JSX.Element => {
  return <DefaultFilter data={STATIC_TABLE_DATA} filterList={filterList} />;
};

DefaultFilterExample.parameters = {
  padding: false,
};

export const SearchFilterExample = (): JSX.Element => {
  return <DefaultFilter data={STATIC_TABLE_DATA} withSearch filterList={filterList} />;
};

SearchFilterExample.parameters = {
  padding: false,
};

export const ConditionalFilterExample = (): JSX.Element => {
  const conditionalFilterList: FilterListType = ["roomType", "participants", "custom"];
  return <DefaultFilter data={STATIC_TABLE_DATA} filterList={conditionalFilterList} />;
};

ConditionalFilterExample.parameters = {
  padding: false,
};

/*
 * export const AddFilterExample = (): JSX.Element => {
 *   const addFilterList: FilterListType = ["room-type", "date-range"];
 *   const addFiltersList: FilterListType = ["room-sid", "unique-name", "participants"];
 *   const recommendedFiltersList: FilterListType = ["unique-name", "participants"];
 *   return (
 *     <DefaultFilter
 *       data={STATIC_TABLE_DATA}
 *       filterList={addFilterList}
 *       addFiltersList={addFiltersList}
 *       recommendedFiltersList={recommendedFiltersList}
 *     />
 *   );
 * };
 */

export const MoreFilterExample = (): JSX.Element => {
  return <MoreFilters />;
};

MoreFilterExample.parameters = {
  padding: false,
};

export const NoResultExample = (): JSX.Element => {
  const noResultList: FilterListType = ["roomType", "participants", "dateCompleted"];
  return (
    <DefaultFilter
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

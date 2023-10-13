import * as React from "react";

import type { TableContextProps } from "./types";

export const TableContext = React.createContext<TableContextProps>({ striped: false });

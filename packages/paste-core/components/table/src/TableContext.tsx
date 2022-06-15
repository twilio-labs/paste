import * as React from 'react';
import {TableContextProps} from './types';

export const TableContext = React.createContext<TableContextProps>({striped: false});

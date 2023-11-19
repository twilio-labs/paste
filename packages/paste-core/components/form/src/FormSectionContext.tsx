import * as React from "react";

interface FormSectionContextProps {
  id?: string;
}

export const FormSectionContext = React.createContext<FormSectionContextProps>({});

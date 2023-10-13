import * as React from "react";

interface FileUploaderContextProps {
  disabled?: boolean;
  name?: string;
  id?: string;
  required?: boolean;
}

export const FileUploaderContext = React.createContext<FileUploaderContextProps>({});

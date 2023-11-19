import * as React from "react";

export interface FileUploaderItemContextProps {
  variant: "default" | "error" | "loading";
}

export const FileUploaderItemContext = React.createContext<FileUploaderItemContextProps>({
  variant: "default",
});

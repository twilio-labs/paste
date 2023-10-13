import * as React from "react";

const Link: React.FC<React.PropsWithChildren> = ({ children, ...props }) => <a {...props}>{children}</a>;

export default Link;

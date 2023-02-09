import * as React from 'react';

const Link: React.FC = ({children, ...props}) => <a {...props}>{children}</a>;

export default Link;

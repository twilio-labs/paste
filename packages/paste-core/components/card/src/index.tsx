import * as React from 'react';

interface CardTitleProps {
  children: React.ReactNode;
}
const CardTitle: React.FunctionComponent<CardTitleProps> = ({children}) => <h4>{children}</h4>;

interface CardBodyProps {
  children: React.ReactNode;
}
const CardBody: React.FunctionComponent<CardBodyProps> = ({children}) => <div>{children}</div>;

interface CardProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Card: React.FunctionComponent<CardProps> = ({children, onClick}) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-tabindex
  <aside onClick={onClick} tabIndex={onClick != null ? 0 : undefined} role={onClick != null ? 'button' : undefined}>
    {children}
  </aside>
);

export {Card, CardBody, CardTitle};

import * as React from 'react';

interface TokensListProps {
  children?: React.ReactElement;
  data?: [
    {
      node: {
        tokens: [
          {
            categoryName: string;
            tokens: [
              {
                name: string;
                value: string;
                comment: string;
              }
            ];
          }
        ];
      };
    }
  ];
}
export const TokensList: React.FC<TokensListProps> = (props: TokensListProps): React.ReactElement => {
  return (
    <>
      {props.data != null &&
        props.data[0].node.tokens.map(cat => {
          return (
            <React.Fragment key={`catname${cat.categoryName}`}>
              <h2>{cat.categoryName}</h2>
              {cat.tokens.map(token => {
                return (
                  <dl key={`token${token.name}`}>
                    <dt>Name</dt>
                    <dd>{token.name}</dd>
                    <dt>Value</dt>
                    <dd>{token.value}</dd>
                    <dt>Comment</dt>
                    <dd>{token.comment}</dd>
                  </dl>
                );
              })}
            </React.Fragment>
          );
        })}
    </>
  );
};

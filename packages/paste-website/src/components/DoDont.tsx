import * as React from 'react';
import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 24px;
`;

interface DoDontProps {
  children?: React.ReactNode;
}

function DoDont(props: DoDontProps) {
  return <StyledWrapper>{props.children}</StyledWrapper>;
}

const StyledChild = styled.div``;

const StyledChildImg: React.FC<ChildProps> = styled.div`
  margin-bottom: 16px;
  border: 1px solid #ccd2dc;
  border-bottom: ${(props: ChildProps) => (props.do ? '2px solid #23bf6e' : '2px solid #ce241a')};
`;

const StyledChildContent = styled.div``;

const StyledChildTitle = styled.h5`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
`;

interface ChildProps {
  children?: React.ReactNode;
  do: boolean;
  image: string;
}

function Child(props: ChildProps) {
  console.log(props);
  return (
    <StyledChild>
      <StyledChildImg {...props}>
        <img src={props.image} alt="" />
      </StyledChildImg>
      <StyledChildContent>
        <StyledChildTitle>{props.do ? 'Do' : `Don't`}</StyledChildTitle>
        {props.children}
      </StyledChildContent>
    </StyledChild>
  );
}

function Do(props: ChildProps) {
  return <Child do={true} {...props} />;
}

function Dont(props: ChildProps) {
  return <Child do={false} {...props} />;
}

export {DoDont, Do, Dont};

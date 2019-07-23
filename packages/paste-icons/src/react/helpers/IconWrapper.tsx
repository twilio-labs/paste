import styled from '@emotion/styled';

export interface IconWrapperProps {
  as?: string;
  size?: number;
  color?: string;
}

const IconWrapper = styled.span`
  ${({size = 24, color = 'currentColor'}: IconWrapperProps) => `
    width: ${size}px;
    height: ${size}px;
    color: ${color};
    display: inline-block;
  `}
`;

export {IconWrapper};

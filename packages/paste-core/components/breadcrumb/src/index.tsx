import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxElementProps} from '@twilio-paste/box';
import {Anchor} from '@twilio-paste/anchor';
import {Text} from '@twilio-paste/text';
import {useUIDSeed} from '@twilio-paste/uid-library';

const BreadcrumbSeparator: React.FC<{element: BoxElementProps['element']}> = ({element}) => (
  <Text
    as="span"
    color="colorTextWeak"
    fontSize="fontSize20"
    lineHeight="lineHeight20"
    paddingLeft="space20"
    paddingRight="space20"
    role="presentation"
    element={`${element}_SEPARATOR`}
  >
    /
  </Text>
);

export interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: NonNullable<React.ReactNode>;
  element?: BoxElementProps['element'];
  href?: string;
  last?: boolean;
}

const BreadcrumbItem = React.forwardRef<HTMLAnchorElement, BreadcrumbItemProps>(
  ({children, element, href, last, ...props}, ref) => {
    const separatorElementName = element || 'BREADCRUMB';
    const elementName = element || 'BREADCRUMB_ITEM';
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        alignItems="center"
        as="li"
        color="colorText"
        display="inline-flex"
        element={elementName}
        fontSize="fontSize20"
        lineHeight="lineHeight20"
      >
        {href ? (
          <Anchor element={`${elementName}_ANCHOR`} href={href} ref={ref}>
            {children}
          </Anchor>
        ) : (
          <Text
            aria-current="page"
            as="span"
            element={`${elementName}_TEXT`}
            fontSize="fontSize20"
            lineHeight="lineHeight20"
            ref={ref}
          >
            {children}
          </Text>
        )}
        {!last && <BreadcrumbSeparator element={separatorElementName} />}
      </Box>
    );
  }
);

BreadcrumbItem.displayName = 'BreadcrumbItem';

if (process.env.NODE_ENV === 'development') {
  BreadcrumbItem.propTypes = {
    children: PropTypes.node.isRequired,
    element: PropTypes.string,
    href: PropTypes.string,
    last: PropTypes.bool,
  };
}

export interface BreadcrumbProps extends React.HTMLAttributes<'nav'> {
  children: NonNullable<React.ReactNode>;
  element?: BoxElementProps['element'];
}

const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
  ({children, element = 'BREADCRUMB', ...props}, ref) => {
    const [childrenCount, validChildren] = React.useMemo(
      () => [
        React.Children.count(children),
        React.Children.toArray(children).filter((child) => React.isValidElement(child) || typeof child === 'string'),
      ],
      [children]
    );
    const keySeed = useUIDSeed();

    return (
      <Box {...safelySpreadBoxProps(props)} aria-label="breadcrumb" as="nav" element={element} ref={ref}>
        <Box alignItems="center" as="ol" display="inline-flex" listStyleType="none" margin="space0" padding="space0">
          {validChildren.map((child, index) =>
            React.cloneElement(child as React.ReactElement<any>, {
              last: childrenCount === index + 1,
              key: keySeed(`breadcrumb-${index}`),
            })
          )}
        </Box>
      </Box>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';

if (process.env.NODE_ENV === 'development') {
  Breadcrumb.propTypes = {
    children: PropTypes.node.isRequired,
    element: PropTypes.string,
  };
}

export {Breadcrumb, BreadcrumbItem};

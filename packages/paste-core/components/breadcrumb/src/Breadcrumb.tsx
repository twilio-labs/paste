import { Anchor } from "@twilio-paste/anchor";
import type { AnchorProps } from "@twilio-paste/anchor";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps, BoxProps } from "@twilio-paste/box";
import { Text, safelySpreadTextProps } from "@twilio-paste/text";
import type { HTMLPasteProps } from "@twilio-paste/types";
import { useUIDSeed } from "@twilio-paste/uid-library";
import * as React from "react";

const BreadcrumbSeparator: React.FC<React.PropsWithChildren<{ element: BoxElementProps["element"] }>> = ({
  element,
}) => (
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

BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

type BreadcrumbItemBaseProps = {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'BREADCRUMB_ITEM'
   * @type {BoxProps['element']}
   * @memberof BreadcrumbItemBaseProps
   */
  element?: BoxProps["element"];
  /**
   * Overrides the default element name of the parent element to apply unique styles with the Customization Provider
   *
   * @default 'BREADCRUMB'
   * @type {BoxProps['element']}
   * @memberof BreadcrumbItemBaseProps
   */
  parentElement?: BoxProps["element"];
  /**
   * Last BreadcrumbItem of the Breadcrumb. Use to omit BreadcrumbSeparator
   *
   * @default false
   * @type {boolean}
   * @memberof BreadcrumbItemBaseProps
   */
  last?: boolean;
};

type BreadcrumbItemAsSpanProps = HTMLPasteProps<"span"> &
  BreadcrumbItemBaseProps & {
    href?: never;
  };

type BreadcrumbItemAsAnchorProps = AnchorProps & BreadcrumbItemBaseProps;

export type BreadcrumbItemProps = BreadcrumbItemAsSpanProps | BreadcrumbItemAsAnchorProps;

const DEFAULT_ELEMENT_NAME = "BREADCRUMB";

const BreadcrumbItem = React.forwardRef<HTMLSpanElement | HTMLAnchorElement, BreadcrumbItemProps>(
  ({ children, element, parentElement, href, last, ...props }, ref) => {
    const elementName = element || parentElement || DEFAULT_ELEMENT_NAME;
    return (
      <Box
        alignItems="center"
        as="li"
        display="inline-flex"
        element={`${elementName}_ITEM`}
        fontSize="fontSize20"
        lineHeight="lineHeight20"
      >
        {href ? (
          <Anchor
            {...(props as Partial<BreadcrumbItemAsAnchorProps>)}
            element={`${elementName}_ANCHOR`}
            href={href}
            ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          >
            {children}
          </Anchor>
        ) : (
          <Text
            {...safelySpreadTextProps(props)}
            aria-current="page"
            as="span"
            color="colorTextWeak"
            element={`${elementName}_TEXT`}
            fontSize="fontSize20"
            lineHeight="lineHeight20"
            ref={ref}
          >
            {children}
          </Text>
        )}
        {!last && <BreadcrumbSeparator element={elementName} />}
      </Box>
    );
  },
);

BreadcrumbItem.displayName = "BreadcrumbItem";

export interface BreadcrumbProps extends HTMLPasteProps<"nav"> {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'BREADCRUMB'
   * @type {BoxProps['element']}
   * @memberof BreadcrumbProps
   */
  element?: BoxElementProps["element"];
}

const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
  ({ children, element = DEFAULT_ELEMENT_NAME, ...props }, ref) => {
    const [childrenCount, validChildren] = React.useMemo(
      () => [
        React.Children.count(children),
        React.Children.toArray(children).filter(
          (child): child is React.ReactElement => React.isValidElement(child) || typeof child === "string",
        ),
      ],
      [children],
    );
    const keySeed = useUIDSeed();

    return (
      <Box aria-label="breadcrumb" {...safelySpreadBoxProps(props)} as="nav" element={element} ref={ref}>
        <Box alignItems="center" as="ol" display="inline-flex" listStyleType="none" margin="space0" padding="space0">
          {validChildren.map((child, index) => {
            return React.cloneElement(child, {
              last: childrenCount === index + 1,
              key: keySeed(`breadcrumb-${index}`),
              parentElement: element,
            } as unknown as React.ReactElement<BreadcrumbItemProps>);
          })}
        </Box>
      </Box>
    );
  },
);

Breadcrumb.displayName = "Breadcrumb";

export { Breadcrumb, BreadcrumbItem };

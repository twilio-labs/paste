import * as React from 'react';
import {render} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';

import {InPageNavigation, InPageNavigationItem} from '../src';

describe('InPageNavigation', () => {
  it('should render a nav with correct aria-label', () => {
    const {getByRole} = render(
      <InPageNavigation aria-label="my-nav">
        <InPageNavigationItem href="#">page 1</InPageNavigationItem>
        <InPageNavigationItem href="#">page 2</InPageNavigationItem>
      </InPageNavigation>
    );

    expect(getByRole('navigation').getAttribute('aria-label')).toBe('my-nav');
  });

  it('should render a list with list items', () => {
    const {getAllByRole} = render(
      <InPageNavigation aria-label="my-nav">
        <InPageNavigationItem href="#">page 1</InPageNavigationItem>
        <InPageNavigationItem href="#">page 2</InPageNavigationItem>
      </InPageNavigation>
    );

    expect(getAllByRole('list')).toHaveLength(1);
    expect(getAllByRole('listitem')).toHaveLength(2);
  });

  it('should render anchors', () => {
    const {getAllByRole} = render(
      <InPageNavigation aria-label="my-nav">
        <InPageNavigationItem href="#">page 1</InPageNavigationItem>
        <InPageNavigationItem href="#">page 2</InPageNavigationItem>
      </InPageNavigation>
    );

    expect(getAllByRole('link')).toHaveLength(2);
  });

  it('should use the currentPage prop to apply aria-current', () => {
    const {getByText} = render(
      <InPageNavigation aria-label="my-nav">
        <InPageNavigationItem href="#">page 1</InPageNavigationItem>
        <InPageNavigationItem currentPage href="#">
          page 2
        </InPageNavigationItem>
      </InPageNavigation>
    );

    expect(getByText('page 2').getAttribute('aria-current')).toBe('page');
  });

  it('should pass props given to InPageNavigationItem onto its Anchor child', () => {
    const {getByText} = render(
      <InPageNavigation aria-label="my-nav">
        <InPageNavigationItem data-test-id="page-1" href="#">
          page 1
        </InPageNavigationItem>
        <InPageNavigationItem currentPage href="#">
          page 2
        </InPageNavigationItem>
      </InPageNavigation>
    );

    expect(getByText('page 1').getAttribute('data-test-id')).toEqual('page-1');
  });
});

describe('Customization', () => {
  it('should set a default element name', () => {
    const {getByRole} = render(
      <InPageNavigation aria-label="my-nav">
        <InPageNavigationItem href="#">page 1</InPageNavigationItem>
      </InPageNavigation>
    );

    expect(getByRole('navigation').getAttribute('data-paste-element')).toEqual('IN_PAGE_NAVIGATION');
    expect(getByRole('list').getAttribute('data-paste-element')).toEqual('IN_PAGE_NAVIGATION_ITEMS');
    expect(getByRole('listitem').getAttribute('data-paste-element')).toEqual('IN_PAGE_NAVIGATION_ITEM');
    expect(getByRole('link').getAttribute('data-paste-element')).toEqual('IN_PAGE_NAVIGATION_ITEM_ANCHOR');
  });

  it('should set a custom element name when provided', () => {
    const {getByRole} = render(
      <InPageNavigation element="MY_IN_PAGE_NAVIGATION" aria-label="my-nav">
        <InPageNavigationItem element="MY_IN_PAGE_NAVIGATION_ITEM" href="#">
          page 1
        </InPageNavigationItem>
      </InPageNavigation>
    );

    expect(getByRole('navigation').getAttribute('data-paste-element')).toEqual('MY_IN_PAGE_NAVIGATION');
    expect(getByRole('list').getAttribute('data-paste-element')).toEqual('MY_IN_PAGE_NAVIGATION_ITEMS');
    expect(getByRole('listitem').getAttribute('data-paste-element')).toEqual('MY_IN_PAGE_NAVIGATION_ITEM');
    expect(getByRole('link').getAttribute('data-paste-element')).toEqual('MY_IN_PAGE_NAVIGATION_ITEM_ANCHOR');
  });

  it('should add custom styles to default element names', () => {
    const {getByRole} = render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{
          IN_PAGE_NAVIGATION: {fontWeight: 'fontWeightLight'},
          IN_PAGE_NAVIGATION_ITEMS: {padding: 'space40'},
          IN_PAGE_NAVIGATION_ITEM: {margin: 'space40'},
          IN_PAGE_NAVIGATION_ITEM_ANCHOR: {fontSize: 'fontSize40'},
        }}
      >
        <InPageNavigation aria-label="my-nav">
          <InPageNavigationItem href="#">page 1</InPageNavigationItem>
        </InPageNavigation>
      </CustomizationProvider>
    );

    expect(getByRole('navigation')).toHaveStyleRule('font-weight', '400');
    expect(getByRole('list')).toHaveStyleRule('padding', '0.75rem');
    expect(getByRole('listitem')).toHaveStyleRule('margin', '0.75rem');
    expect(getByRole('link')).toHaveStyleRule('font-size', '1rem');
  });

  it('should add custom styles to custom element names', () => {
    const {getByRole} = render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{
          MY_IN_PAGE_NAVIGATION: {fontWeight: 'fontWeightLight'},
          MY_IN_PAGE_NAVIGATION_ITEMS: {padding: 'space40'},
          MY_IN_PAGE_NAVIGATION_ITEM: {margin: 'space40'},
          MY_IN_PAGE_NAVIGATION_ITEM_ANCHOR: {fontSize: 'fontSize40'},
        }}
      >
        <InPageNavigation element="MY_IN_PAGE_NAVIGATION" aria-label="my-nav">
          <InPageNavigationItem element="MY_IN_PAGE_NAVIGATION_ITEM" href="#">
            page 1
          </InPageNavigationItem>
        </InPageNavigation>
      </CustomizationProvider>
    );

    expect(getByRole('navigation')).toHaveStyleRule('font-weight', '400');
    expect(getByRole('list')).toHaveStyleRule('padding', '0.75rem');
    expect(getByRole('listitem')).toHaveStyleRule('margin', '0.75rem');
    expect(getByRole('link')).toHaveStyleRule('font-size', '1rem');
  });
});

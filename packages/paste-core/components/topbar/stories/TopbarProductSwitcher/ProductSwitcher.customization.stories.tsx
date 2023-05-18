import * as React from 'react';
import type {StoryFn} from '@storybook/react';
import {CustomizationProvider} from '@twilio-paste/customization';
import {ProductSegmentIcon} from '@twilio-paste/icons/esm/ProductSegmentIcon';
import {ProductFlexIcon} from '@twilio-paste/icons/esm/ProductFlexIcon';
import {ProductEmailAPIIcon} from '@twilio-paste/icons/esm/ProductEmailAPIIcon';
import {LogoTwilioIcon} from '@twilio-paste/icons/esm/LogoTwilioIcon';

import {
  TopbarProductSwitcher,
  TopbarProductSwitcherButton,
  TopbarProductSwitcherItem,
  useTopbarProductSwitcherState,
} from '../../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Topbar/ProductSwitcher/Customization',
};

export const DefaultElementName: StoryFn = () => {
  const productSwitcher = useTopbarProductSwitcherState({visible: true});
  const [product, setProduct] = React.useState('twilio');
  return (
    <CustomizationProvider
      elements={{
        TOPBAR_PRODUCT_SWITCHER_BUTTON: {backgroundColor: 'colorBackgroundPrimary', color: 'colorTextWeakest'},
        TOPBAR_PRODUCT_SWITCHER: {borderColor: 'colorBorderDestructiveStrong'},
        TOPBAR_PRODUCT_SWITCHER_ITEM: {textDecoration: 'underline'},
      }}
    >
      <TopbarProductSwitcherButton {...productSwitcher} i18nButtonLabel="Switch products" />
      <TopbarProductSwitcher {...productSwitcher} aria-label="Avaiable accounts">
        <TopbarProductSwitcherItem
          {...productSwitcher}
          name="product"
          value="twilio"
          checked={product === 'twilio'}
          onChange={(e) => {
            setProduct('twilio');
          }}
          productName="Twilio"
          productStrapline="SMS, Voice & Video"
          productIcon={<LogoTwilioIcon decorative />}
        />
        <TopbarProductSwitcherItem
          {...productSwitcher}
          name="product"
          value="segment"
          checked={product === 'segment'}
          onChange={(e) => {
            setProduct('segment');
          }}
          productName="Segment"
          productStrapline="Customer data platform"
          productIcon={<ProductSegmentIcon decorative />}
        />
        <TopbarProductSwitcherItem
          {...productSwitcher}
          name="product"
          value="flex"
          checked={product === 'flex'}
          onChange={(e) => {
            setProduct('flex');
          }}
          productName="Flex"
          productStrapline="Cloud-based contact center"
          productIcon={<ProductFlexIcon decorative />}
        />
        <TopbarProductSwitcherItem
          {...productSwitcher}
          name="product"
          value="sendgrid"
          checked={product === 'sendgrid'}
          onChange={(e) => {
            setProduct('sendgrid');
          }}
          productName="SendGrid"
          productStrapline="Email delivery and API"
          productIcon={<ProductEmailAPIIcon decorative />}
        />
        <TopbarProductSwitcherItem
          {...productSwitcher}
          name="product"
          value="admin"
          checked={product === 'admin'}
          onChange={(e) => {
            setProduct('admin');
          }}
          productName="Console Admin"
          productStrapline="Admin center"
          productIcon={<LogoTwilioIcon decorative />}
        />
      </TopbarProductSwitcher>
    </CustomizationProvider>
  );
};

export const CustomElementName: StoryFn = () => {
  const productSwitcher = useTopbarProductSwitcherState({visible: true});
  const [product, setProduct] = React.useState('twilio');
  return (
    <CustomizationProvider
      elements={{
        FOO: {backgroundColor: 'colorBackgroundPrimary', color: 'colorTextWeakest'},
        BAR: {borderColor: 'colorBorderDestructiveStrong'},
        BAZ: {textDecoration: 'underline'},
      }}
    >
      <TopbarProductSwitcherButton {...productSwitcher} element="FOO" i18nButtonLabel="Switch products" />
      <TopbarProductSwitcher {...productSwitcher} element="BAR" aria-label="Avaiable accounts">
        <TopbarProductSwitcherItem
          {...productSwitcher}
          element="BAZ"
          name="product"
          value="twilio"
          checked={product === 'twilio'}
          onChange={(e) => {
            setProduct('twilio');
          }}
          productName="Twilio"
          productStrapline="SMS, Voice & Video"
          productIcon={<LogoTwilioIcon decorative />}
        />
        <TopbarProductSwitcherItem
          {...productSwitcher}
          element="BAZ"
          name="product"
          value="segment"
          checked={product === 'segment'}
          onChange={(e) => {
            setProduct('segment');
          }}
          productName="Segment"
          productStrapline="Customer data platform"
          productIcon={<ProductSegmentIcon decorative />}
        />
        <TopbarProductSwitcherItem
          {...productSwitcher}
          element="BAZ"
          name="product"
          value="flex"
          checked={product === 'flex'}
          onChange={(e) => {
            setProduct('flex');
          }}
          productName="Flex"
          productStrapline="Cloud-based contact center"
          productIcon={<ProductFlexIcon decorative />}
        />
        <TopbarProductSwitcherItem
          {...productSwitcher}
          element="BAZ"
          name="product"
          value="sendgrid"
          checked={product === 'sendgrid'}
          onChange={(e) => {
            setProduct('sendgrid');
          }}
          productName="SendGrid"
          productStrapline="Email delivery and API"
          productIcon={<ProductEmailAPIIcon decorative />}
        />
        <TopbarProductSwitcherItem
          {...productSwitcher}
          element="BAZ"
          name="product"
          value="admin"
          checked={product === 'admin'}
          onChange={(e) => {
            setProduct('admin');
          }}
          productName="Console Admin"
          productStrapline="Admin center"
          productIcon={<LogoTwilioIcon decorative />}
        />
      </TopbarProductSwitcher>
    </CustomizationProvider>
  );
};

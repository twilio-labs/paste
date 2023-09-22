import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import { ProductSegmentIcon } from '@twilio-paste/icons/esm/ProductSegmentIcon';
import { ProductFlexIcon } from '@twilio-paste/icons/esm/ProductFlexIcon';
import { ProductEmailAPIIcon } from '@twilio-paste/icons/esm/ProductEmailAPIIcon';
import { LogoTwilioIcon } from '@twilio-paste/icons/esm/LogoTwilioIcon';

import { ProductSwitcher, ProductSwitcherButton, ProductSwitcherItem, useProductSwitcherState } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/ProductSwitcher/Customization',
};

export const DefaultElementName: StoryFn = () => {
  const productSwitcher = useProductSwitcherState({ visible: true });
  const [product, setProduct] = React.useState('twilio');
  return (
    <CustomizationProvider
      elements={{
        PRODUCT_SWITCHER_BUTTON: { backgroundColor: 'colorBackgroundPrimary', color: 'colorTextWeakest' },
        PRODUCT_SWITCHER: { borderColor: 'colorBorderDestructiveStrong' },
        PRODUCT_SWITCHER_ITEM: { textDecoration: 'underline' },
      }}
    >
      <ProductSwitcherButton {...productSwitcher} i18nButtonLabel="Switch products" />
      <ProductSwitcher {...productSwitcher} aria-label="Avaiable accounts">
        <ProductSwitcherItem
          {...productSwitcher}
          name="product"
          value="twilio"
          checked={product === 'twilio'}
          onChange={() => {
            setProduct('twilio');
          }}
          productName="Twilio"
          productStrapline="SMS, Voice & Video"
          productIcon={<LogoTwilioIcon decorative />}
        />
        <ProductSwitcherItem
          {...productSwitcher}
          name="product"
          value="segment"
          checked={product === 'segment'}
          onChange={() => {
            setProduct('segment');
          }}
          productName="Segment"
          productStrapline="Customer data platform"
          productIcon={<ProductSegmentIcon decorative />}
        />
        <ProductSwitcherItem
          {...productSwitcher}
          name="product"
          value="flex"
          checked={product === 'flex'}
          onChange={() => {
            setProduct('flex');
          }}
          productName="Flex"
          productStrapline="Cloud-based contact center"
          productIcon={<ProductFlexIcon decorative />}
        />
        <ProductSwitcherItem
          {...productSwitcher}
          name="product"
          value="sendgrid"
          checked={product === 'sendgrid'}
          onChange={() => {
            setProduct('sendgrid');
          }}
          productName="SendGrid"
          productStrapline="Email delivery and API"
          productIcon={<ProductEmailAPIIcon decorative />}
        />
        <ProductSwitcherItem
          {...productSwitcher}
          name="product"
          value="admin"
          checked={product === 'admin'}
          onChange={() => {
            setProduct('admin');
          }}
          productName="Console Admin"
          productStrapline="Admin center"
          productIcon={<LogoTwilioIcon decorative />}
        />
      </ProductSwitcher>
    </CustomizationProvider>
  );
};

export const CustomElementName: StoryFn = () => {
  const productSwitcher = useProductSwitcherState({ visible: true });
  const [product, setProduct] = React.useState('twilio');
  return (
    <CustomizationProvider
      elements={{
        FOO: { backgroundColor: 'colorBackgroundPrimary', color: 'colorTextWeakest' },
        BAR: { borderColor: 'colorBorderDestructiveStrong' },
        BAZ: { textDecoration: 'underline' },
      }}
    >
      <ProductSwitcherButton {...productSwitcher} element="FOO" i18nButtonLabel="Switch products" />
      <ProductSwitcher {...productSwitcher} element="BAR" aria-label="Avaiable accounts">
        <ProductSwitcherItem
          {...productSwitcher}
          element="BAZ"
          name="product"
          value="twilio"
          checked={product === 'twilio'}
          onChange={() => {
            setProduct('twilio');
          }}
          productName="Twilio"
          productStrapline="SMS, Voice & Video"
          productIcon={<LogoTwilioIcon decorative />}
        />
        <ProductSwitcherItem
          {...productSwitcher}
          element="BAZ"
          name="product"
          value="segment"
          checked={product === 'segment'}
          onChange={() => {
            setProduct('segment');
          }}
          productName="Segment"
          productStrapline="Customer data platform"
          productIcon={<ProductSegmentIcon decorative />}
        />
        <ProductSwitcherItem
          {...productSwitcher}
          element="BAZ"
          name="product"
          value="flex"
          checked={product === 'flex'}
          onChange={() => {
            setProduct('flex');
          }}
          productName="Flex"
          productStrapline="Cloud-based contact center"
          productIcon={<ProductFlexIcon decorative />}
        />
        <ProductSwitcherItem
          {...productSwitcher}
          element="BAZ"
          name="product"
          value="sendgrid"
          checked={product === 'sendgrid'}
          onChange={() => {
            setProduct('sendgrid');
          }}
          productName="SendGrid"
          productStrapline="Email delivery and API"
          productIcon={<ProductEmailAPIIcon decorative />}
        />
        <ProductSwitcherItem
          {...productSwitcher}
          element="BAZ"
          name="product"
          value="admin"
          checked={product === 'admin'}
          onChange={() => {
            setProduct('admin');
          }}
          productName="Console Admin"
          productStrapline="Admin center"
          productIcon={<LogoTwilioIcon decorative />}
        />
      </ProductSwitcher>
    </CustomizationProvider>
  );
};

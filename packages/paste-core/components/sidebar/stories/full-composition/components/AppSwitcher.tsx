import * as React from 'react';
import {
  ProductSwitcher,
  ProductSwitcherButton,
  ProductSwitcherItem,
  useProductSwitcherState,
} from '@twilio-paste/product-switcher';
import {LogoTwilioIcon} from '@twilio-paste/icons/esm/LogoTwilioIcon';
import {ProductSegmentIcon} from '@twilio-paste/icons/esm/ProductSegmentIcon';
import {ProductFlexIcon} from '@twilio-paste/icons/esm/ProductFlexIcon';
import {ProductEmailAPIIcon} from '@twilio-paste/icons/esm/ProductEmailAPIIcon';

export const AppSwitcher: React.FC = () => {
  const productSwitcher = useProductSwitcherState();
  const [product, setProduct] = React.useState('twilio');
  return (
    <>
      <ProductSwitcherButton {...productSwitcher} i18nButtonLabel="Switch products" />
      <ProductSwitcher {...productSwitcher} aria-label="Available products">
        <ProductSwitcherItem
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
        <ProductSwitcherItem
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
        <ProductSwitcherItem
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
        <ProductSwitcherItem
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
        <ProductSwitcherItem
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
      </ProductSwitcher>
    </>
  );
};

import * as React from 'react';
import {InDevelopment} from './InDevelopment';
import {NotBuilt} from './NotBuilt';
import {NotFound} from './NotFound';
import {SidebarCategoryRoutes} from '../../constants';

interface Error404Props {
  pathname: string;
  componentList: {name: string; version: string}[];
  utilitityList: {name: string; version: string}[];
}

const Error404 = ({pathname, componentList, utilitityList}: Error404Props): React.ReactNode => {
  const pathParts = pathname.split('/');
  const pageName = pathParts[pathParts.length - 1];
  const packageName = `@twilio-paste/${pageName}`;
  const packageObj = [...componentList, ...utilitityList].find(({name}) => name === packageName);

  if (packageObj != null) {
    const isInDevelopment = packageObj.version !== '0.0.0';

    if (pathname.includes(SidebarCategoryRoutes.COMPONENTS)) {
      if (isInDevelopment) {
        return <InDevelopment type="component" name={pageName} />;
      }
      return <NotBuilt type="component" name={pageName} />;
    }

    if (pathname.includes(SidebarCategoryRoutes.UTILITIES)) {
      if (isInDevelopment) {
        return <InDevelopment type="utility" name={pageName} />;
      }
      return <NotBuilt type="utility" name={pageName} />;
    }
  }

  /* 
  // TODO populate graphql first
  if (pathname.includes(SidebarCategoryRoutes.PRIMITIVES) && primitiveList.includes(packageName)) {
      <NotBuilt type="primitive" name={name} />;
  }
  */

  return <NotFound />;
};

export {Error404};

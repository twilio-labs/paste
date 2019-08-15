import * as React from 'react';
import {NotBuilt} from './NotBuilt';
import {NotFound} from './NotFound';
import {SidebarCategoryRoutes} from '../../constants';

interface Error404Props {
  pathname: string;
  componentList: string[];
  utilitityList: string[];
}

const Error404 = ({pathname, componentList, utilitityList}: Error404Props): React.ReactNode => {
  const pathParts = pathname.split('/');
  const name = pathParts[pathParts.length - 1];
  const packageName = `@twilio-paste/${name}`;

  if (pathname.includes(SidebarCategoryRoutes.COMPONENTS) && componentList.includes(packageName)) {
    return <NotBuilt type="component" name={name} />;
  }

  if (pathname.includes(SidebarCategoryRoutes.UTILITIES) && utilitityList.includes(packageName)) {
    return <NotBuilt type="utility" name={name} />;
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

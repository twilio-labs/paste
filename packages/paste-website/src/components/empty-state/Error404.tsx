import * as React from 'react';
import {InDevelopment} from './InDevelopment';
import {NotBuilt} from './NotBuilt';
import {NotFound} from './NotFound';
import {SidebarCategoryRoutes, PackageStatus} from '../../constants';

interface Error404Props {
  pathname: string;
  componentList: {name: string; status: string}[];
  layoutList: {name: string; status: string}[];
  primitiveList: {name: string; status: string}[];
}

const Error404 = ({pathname, componentList, layoutList, primitiveList}: Error404Props): React.ReactNode => {
  const pathParts = pathname.split('/');
  const pageName = pathParts[pathParts.length - 1];
  const packageName = `@twilio-paste/${pageName}`;
  const packageObj = [...componentList, ...layoutList, ...primitiveList].find(({name}) => name === packageName);

  if (packageObj != null) {
    const isInDevelopment = packageObj.status !== PackageStatus.BACKLOG;

    if (pathname.includes(SidebarCategoryRoutes.COMPONENTS)) {
      if (isInDevelopment) {
        return <InDevelopment type="component" name={pageName} />;
      }
      return <NotBuilt type="component" name={pageName} />;
    }

    if (pathname.includes(SidebarCategoryRoutes.PRIMITIVES)) {
      if (isInDevelopment) {
        return <InDevelopment type="primitive" name={pageName} />;
      }
      return <NotBuilt type="primitive" name={pageName} />;
    }
  }

  return <NotFound />;
};

export {Error404};

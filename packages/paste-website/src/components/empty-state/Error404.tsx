import { useRouter } from 'next/router';
import * as React from 'react';

import { PackageStatus, SidebarCategoryRoutes } from '../../constants';
import { InDevelopment } from './InDevelopment';
import { NotFound } from './NotFound';

interface Error404Props {
  componentList: { name: string; status: string }[];
  layoutList: { name: string; status: string }[];
  primitiveList: { name: string; status: string }[];
}

const Error404 = ({ componentList, layoutList, primitiveList }: Error404Props): React.ReactNode => {
  const router = useRouter();
  const pathParts = router.asPath.split('/');
  const pageName = pathParts[pathParts.length - 1];
  const packageName = `@twilio-paste/${pageName}`;
  const packageObj = [...componentList, ...layoutList, ...primitiveList].find(({ name }) => name === packageName);
  if (packageObj != null) {
    const isInDevelopment = packageObj.status !== PackageStatus.BACKLOG;

    if (isInDevelopment) {
      if (router.asPath.includes(SidebarCategoryRoutes.COMPONENTS)) {
        return <InDevelopment type="component" name={pageName} />;
      }
      if (router.asPath.includes(SidebarCategoryRoutes.PRIMITIVES)) {
        return <InDevelopment type="primitive" name={pageName} />;
      }
    }
  }

  return <NotFound />;
};

export { Error404 };

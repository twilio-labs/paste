import * as React from "react";

import { NavigationContext } from "../../context/NavigationContext";
import type { NavigationQuery } from "../../context/NavigationContext";
import { SiteBody } from "./SiteBody";

export interface SiteWrapperProps {
  navigationData: NavigationQuery;
}

const SiteWrapper: React.FC<React.PropsWithChildren<SiteWrapperProps>> = ({ children, navigationData }) => {
  return (
    /*
     * TODO: move to server components and app directory to remove this provider.
     * Removes the need for page level getNavigationData() in getStaticProps. Do it once for the whole app, not everypage
     */
    <NavigationContext.Provider value={navigationData}>
      <SiteBody>{children}</SiteBody>
    </NavigationContext.Provider>
  );
};

export const getServerSideProps = async () => {
  return {};
};

export { SiteWrapper };

import { Breadcrumb, BreadcrumbItem } from "@twilio-paste/core/breadcrumb";
import * as React from "react";
import type { JSX } from "react";

const BreadcrumbPreview = (): JSX.Element => {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="#">Phone Numbers</BreadcrumbItem>
      <BreadcrumbItem href="#">Active Numbers</BreadcrumbItem>
    </Breadcrumb>
  );
};

export { BreadcrumbPreview };

import {Breadcrumb, BreadcrumbItem} from '@twilio-paste/core/breadcrumb';

const BreadcrumbPreview = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="#">Phone Numbers</BreadcrumbItem>
      <BreadcrumbItem href="#">Active Numbers</BreadcrumbItem>
    </Breadcrumb>
  );
};

export {BreadcrumbPreview};

export type PackageStatusObject = [
  {
    node: {
      data: {
        Documentation: boolean;
        Figma: string;
        Design_committee_review: string;
        Engineer_committee_review: string;
        Code: string;
        status: string;
        Product_suitability: ['Console' | 'SendGrid' | 'Flex'];
      };
    };
  }
];

export interface ComponentNode {
  name: string;
  packageName?: string;
  version?: string;
  status?: string;
}

export interface AirTableComponentNode {
  node: {
    data: {
      Feature: string;
      Documentation: boolean;
      Figma: string;
      Design_committee_review: string;
      Engineer_committee_review: string;
      status: string;
      Code: string;
    };
  };
}

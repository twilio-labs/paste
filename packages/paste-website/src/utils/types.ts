export type PackageStatusObject = [
  {
    node: {
      data: {
        Documentation: boolean;
        Figma: string;
        Design_committee_review: string;
        Engineer_committee_review: string;
        Code: string;
      };
    };
  }
];

export interface ComponentNode {
  node: {
    name: string;
    version: string;
    status: string;
  };
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

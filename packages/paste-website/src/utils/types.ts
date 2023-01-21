export type PackageStatusObject = [
  {
    node: {
      data: {
        Documentation: boolean;
        Figma: string;
        'Design committee review': string;
        'Engineer committee review': string;
        Code: string;
        status: string;
        'Product suitability': ['Console' | 'SendGrid' | 'Flex'];
      };
    };
  }
];

export interface ComponentNode {
  name: string;
  packageName?: string;
  version?: string;
  packageStatus?: string;
}

export interface AirTableComponentNode {
  Feature: string;
  Documentation: boolean;
  Figma: string;
  'Design committee review': string;
  'Engineer committee review': string;
  status: string;
  Code: string;
}

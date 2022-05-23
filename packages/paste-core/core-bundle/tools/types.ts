export interface PackageShape {
  name: string;
  version: string;
  private: boolean;
  location: string;
}

export type PackageList = PackageShape[];

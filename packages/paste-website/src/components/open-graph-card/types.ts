import type { Feature, Package } from '../../utils/api';

export type PackageData = Package & Feature & { type: string };

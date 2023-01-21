import type {ValueOf} from '@twilio-paste/types';

import type {Statuses} from './constants';

export type StatusTypes = ValueOf<typeof Statuses>;

export interface RoadmapProps {
  data: [
    {
      release: string;
      data: {
        'Public Description (from System)': string[];
        'Release Description': string;
        'Release feature name': string;
        Status: StatusTypes;
      };
    }
  ];
}

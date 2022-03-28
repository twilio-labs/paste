import type {ValueOf} from '@twilio-paste/types';
import type {Statuses} from './constants';

export type StatusTypes = ValueOf<typeof Statuses>;

export interface RoadmapProps {
  data: [
    {
      release: string;
      edges: [
        {
          node: {
            data: {
              Public_Description__from_System_: string[];
              Release_Description: string;
              Release_feature_name: string;
              Status: StatusTypes;
            };
          };
        }
      ];
    }
  ];
}

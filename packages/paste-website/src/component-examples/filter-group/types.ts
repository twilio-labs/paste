export type RoomTypes = 'All' | 'Group' | 'WebRTC Go' | 'Peer to Peer';
export type DateRanges = 'all' | 'day' | 'oneWeek' | 'twoWeeks';

export interface TableDataRow {
  sid: string;
  uniqueName: string;
  roomType: RoomTypes;
  participants: number;
  dateCompleted: Date;
}

export interface FilterGroupProps {
  children?: never;
  defaultRoomType?: RoomTypes;
  defaultDateRange?: DateRanges;
}

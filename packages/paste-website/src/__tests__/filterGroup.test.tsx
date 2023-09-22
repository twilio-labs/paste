import { add } from 'date-fns';

import {
  filterBySearchString,
  filterByRoomType,
  filterByDateRange,
  filterByDateTimeRange,
  dateDifference,
  isEndDateBeforeStartDate,
} from '../component-examples/filter-group/helpers';

describe('filterBySearchString', () => {
  it('should filter by unique name', () => {
    const result = filterBySearchString('Test Room', '', 'test');
    expect(result).toBeTruthy();
  });

  it('should filter by sid', () => {
    const result = filterBySearchString('', 'RM76426b3e9986878d6316a22bf02d6fc3', '7642');
    expect(result).toBeTruthy();
  });

  it('should exclude elements based on unique name and sid', () => {
    const result = filterBySearchString('Test Room', 'RM76426b3e9986878d6316a22bf02d6fc3', 'sdfasdfa');
    expect(result).toBeFalsy();
  });
});

describe('filterByRoomType', () => {
  it('should filter by room type', () => {
    const result = filterByRoomType('Group', 'Group');
    expect(result).toBeTruthy();
  });

  it('should exclude by room type', () => {
    const result = filterByRoomType('Peer to Peer', 'Group');
    expect(result).toBeFalsy();
  });

  it('should always include if the filter is All', () => {
    const result = filterByRoomType('Peer to Peer', 'All');
    expect(result).toBeTruthy();
  });
});

describe('filterByDateRange', () => {
  describe('dateDifference', () => {
    it('should find the number of days between 2 dates', () => {
      const today = new Date();
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

      const difference = dateDifference(today, oneWeekAgo);
      expect(difference).toEqual(7);
    });
  });

  it('should include the date if it is less than the filter', () => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const result = filterByDateRange(oneWeekAgo, 'twoWeeks');
    expect(result).toBeTruthy();
  });

  it('should include the date if it is equal to the filter', () => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const result = filterByDateRange(oneWeekAgo, 'oneWeek');
    expect(result).toBeTruthy();
  });

  it('should exclude the date if it is greater than the filter', () => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const result = filterByDateRange(oneWeekAgo, 'day');
    expect(result).toBeFalsy();
  });
});

describe('filterByDateTimeRange', () => {
  it('should include the date if it is within the custom date/time range', () => {
    const sampleDate = new Date('2022-04-22');

    const result = filterByDateTimeRange(sampleDate, 'custom', '2022-04-20', '00:00:00', '2022-04-26', '00:00:00');
    expect(result).toBeTruthy();
  });

  it('should exclude the date if it is outside the custom date/time range', () => {
    const sampleDate = new Date('2022-04-10');

    const result = filterByDateTimeRange(sampleDate, 'custom', '2022-04-20', '00:00:00', '2022-04-26', '00:00:00');
    expect(result).toBeFalsy();
  });

  it('should include the date if it is after the filter', () => {
    const twoDaysAgo = add(new Date(), { days: -2 });

    const result = filterByDateTimeRange(twoDaysAgo, 'threeDays', '', '', '', '');
    expect(result).toBeTruthy();
  });

  it('should exclude the date if it is before the filter', () => {
    const twoDaysAgo = add(new Date(), { days: -2 });

    const result = filterByDateTimeRange(twoDaysAgo, '12hours', '', '', '', '');
    expect(result).toBeFalsy();
  });
});

describe('isEndDateBeforeStartDate', () => {
  it('should return true if the end date is before the start date', () => {
    const result = isEndDateBeforeStartDate('2022-04-20', '00:00:00', '2022-04-10', '00:00:00');
    expect(result).toBeTruthy();
  });

  it('should return false if the end date is after the start date', () => {
    const result = isEndDateBeforeStartDate('2022-04-20', '00:00:00', '2022-04-26', '00:00:00');
    expect(result).toBeFalsy();
  });
});

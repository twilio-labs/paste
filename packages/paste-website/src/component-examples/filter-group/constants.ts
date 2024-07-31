/* DISCLAIMER: this is an example, not meant to be used in production */

import { formatDate } from "./helpers";
import type { DateTimeFormValues, TableDataRow } from "./types";

export const ROOM_TYPES = ["All", "Group", "WebRTC Go", "Peer to Peer"];
export const DATE_RANGES = [
  { name: "Last 24 hours", value: "1" },
  { name: "Last 7 days", value: "7" },
  { name: "Last 14 days", value: "14" },
  { name: "Custom", value: "custom" },
];
export const DATE_TIME_RANGES = [
  { name: "All", value: "all" },
  { name: "Last 12 hours", value: "12hours" },
  { name: "Last 24 hours", value: "day" },
  { name: "Last 3 days", value: "threeDays" },
  { name: "Custom", value: "custom" },
];
export const TABLE_HEADERS = ["Room SID", "Unique Name", "Room Type", "Participants", "Date Completed"];

const today = new Date();
const fourteenHoursAgo = new Date();
fourteenHoursAgo.setHours(fourteenHoursAgo.getHours() - 14);
const twoDaysAgo = new Date();
twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
const oneWeekAgo = new Date();
oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
const twoWeeksAgo = new Date();
twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
const fourWeeksAgo = new Date();
fourWeeksAgo.setDate(fourWeeksAgo.getDate() - 28);

export const FORM_DEFAULT_VALUES: DateTimeFormValues = {
  search: "",
  type: "Group",
  range: "all",
  customDate: {
    startDate: formatDate(today),
    startTime: "00:00",
    endDate: formatDate(today),
    endTime: "23:59",
  },
};

export const TABLE_DATA: TableDataRow[] = [
  {
    sid: "RM76426b3e9986878d6316a22bf02d6fc3",
    uniqueName: "Test Room",
    roomType: "Group",
    participants: 50,
    dateCompleted: today,
  },
  {
    sid: "RMmg889qwslt6bijmzfjxleq4fn3eyxwdj6",
    uniqueName: "Quick Sync",
    roomType: "Peer to Peer",
    participants: 3,
    dateCompleted: fourWeeksAgo,
  },
  {
    sid: "RM8fcu56sr0tz6cf9a2phf5zo8vv5m65697",
    uniqueName: "My 1:1",
    roomType: "WebRTC Go",
    participants: 2,
    dateCompleted: today,
  },
  {
    sid: "RM1z17xfzcjdgwf254jk3k0gtu3r7xzxo0l",
    uniqueName: "Team Meeting",
    roomType: "Group",
    participants: 23,
    dateCompleted: oneWeekAgo,
  },
  {
    sid: "RMx2fw108pgls48zzf4oh6uzl4ly4s4j6b8",
    uniqueName: "All Hands",
    roomType: "Group",
    participants: 41,
    dateCompleted: twoWeeksAgo,
  },
  {
    sid: "RMwwxh0rskqqy2wzg7t7f3ha4haavymbnqt",
    uniqueName: "Project Meeting",
    roomType: "Group",
    participants: 6,
    dateCompleted: twoWeeksAgo,
  },
  {
    sid: "RMi2or733rf2vd6lziwe8g66smzykqkoplf",
    uniqueName: "Test Room 2",
    roomType: "WebRTC Go",
    participants: 1,
    dateCompleted: fourWeeksAgo,
  },
];

export const DATE_TIME_TABLE_DATA: TableDataRow[] = [
  {
    sid: "RM76426b3e9986878d6316a22bf02d6fc3",
    uniqueName: "Test Room",
    roomType: "Group",
    participants: 50,
    dateCompleted: today,
  },
  {
    sid: "RMmg889qwslt6bijmzfjxleq4fn3eyxwdj6",
    uniqueName: "Quick Sync",
    roomType: "Peer to Peer",
    participants: 3,
    dateCompleted: fourteenHoursAgo,
  },
  {
    sid: "RM8fcu56sr0tz6cf9a2phf5zo8vv5m65697",
    uniqueName: "My 1:1",
    roomType: "WebRTC Go",
    participants: 2,
    dateCompleted: today,
  },
  {
    sid: "RM1z17xfzcjdgwf254jk3k0gtu3r7xzxo0l",
    uniqueName: "Team Meeting",
    roomType: "Group",
    participants: 23,
    dateCompleted: oneWeekAgo,
  },
  {
    sid: "RMx2fw108pgls48zzf4oh6uzl4ly4s4j6b8",
    uniqueName: "All Hands",
    roomType: "Group",
    participants: 41,
    dateCompleted: twoDaysAgo,
  },
  {
    sid: "RMwwxh0rskqqy2wzg7t7f3ha4haavymbnqt",
    uniqueName: "Project Meeting",
    roomType: "Group",
    participants: 6,
    dateCompleted: twoDaysAgo,
  },
  {
    sid: "RMi2or733rf2vd6lziwe8g66smzykqkoplf",
    uniqueName: "Test Room 2",
    roomType: "WebRTC Go",
    participants: 1,
    dateCompleted: fourteenHoursAgo,
  },
];

export const STATIC_TABLE_DATA: TableDataRow[] = [
  {
    sid: "RM76426b3e9986878d6316a22bf02d6fc3",
    uniqueName: "Test Room",
    roomType: "Group",
    participants: 50,
    dateCompleted: new Date(2024, 6, 1, 8, 39, 25),
  },
  {
    sid: "RMmg889qwslt6bijmzfjxleq4fn3eyxwdj6",
    uniqueName: "Quick Sync",
    roomType: "Peer to Peer",
    participants: 3,
    dateCompleted: new Date(2024, 6, 1, 18, 39, 25),
  },
  {
    sid: "RM8fcu56sr0tz6cf9a2phf5zo8vv5m65697",
    uniqueName: "My 1:1",
    roomType: "WebRTC Go",
    participants: 2,
    dateCompleted: new Date(2024, 7, 1, 8, 39, 25),
  },
  {
    sid: "RM1z17xfzcjdgwf254jk3k0gtu3r7xzxo0l",
    uniqueName: "Team Meeting",
    roomType: "Group",
    participants: 23,
    dateCompleted: new Date(2024, 6, 22, 8, 39, 25),
  },
  {
    sid: "RMx2fw108pgls48zzf4oh6uzl4ly4s4j6b8",
    uniqueName: "All Hands",
    roomType: "Group",
    participants: 41,
    dateCompleted: new Date(2024, 6, 15, 8, 39, 25),
  },
  {
    sid: "RMwwxh0rskqqy2wzg7t7f3ha4haavymbnqt",
    uniqueName: "Project Meeting",
    roomType: "Group",
    participants: 6,
    dateCompleted: new Date(2024, 6, 15, 8, 39, 25),
  },
  {
    sid: "RMi2or733rf2vd6lziwe8g66smzykqkoplf",
    uniqueName: "Test Room 2",
    roomType: "WebRTC Go",
    participants: 1,
    dateCompleted: new Date(2024, 6, 1, 18, 39, 25),
  },
];

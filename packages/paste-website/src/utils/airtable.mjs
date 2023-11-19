import Airtable from "airtable";

if (!process.env.AIRTABLE_APIKEY) {
  throw new Error("AIRTABLE_APIKEY is not set");
}
if (!process.env.AIRTABLE_BASEID) {
  throw new Error("AIRTABLE_BASEID is not set");
}

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_APIKEY });
const base = airtable.base(process.env.AIRTABLE_BASEID);

export const systemTable = base("System");
export const roadmapTable = base("Roadmap");
export const bpmTable = base("BPM");

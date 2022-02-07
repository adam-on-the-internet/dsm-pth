export interface ResourceItem {
  text: string;
  link?: string;
  details?: string;
}

export const RESOURCES: ResourceItem[] = [
  {
    link: "https://iowamutualaid.org/",
    text: "Iowa Mutual Aid Network",
  },
  {
    link: "https://webapp.iecdb.iowa.gov/PublicView/?d=county%2fPolk%2fCity_Candidate",
    text: "Campaign Disclosure Reports for Polk County City Candidates",
  },
  {
    link: "https://native-land.ca/",
    text: "Native Land Digital",
  },
  {
    link: "https://www.legis.iowa.gov/Ombudsman/mission/",
    text: "Office of Ombudsman (Iowa)",
  },
  {
    link: "https://corpaccountabilitylab.org/calblog/2020/8/5/private-companies-producing-with-us-prison-labor-in-2020-prison-labor-in-the-us-part-ii",
    text: "Private Companies with US Prison Labor in 2020",
  },
  {
    text: "Phone Number for Broadlawns Mobile Crisis Unit",
    details: "(515) 282-5752",
  },
];

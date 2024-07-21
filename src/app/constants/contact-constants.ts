import {ContactInfo, SimpleContact} from "../models/ContactInfo.model";

export const SPECIAL_CONTACTS: SimpleContact[] = [];

export const WARD_4_REP = {
  role: "Council Member: Ward 4",
  name: "Joe Gatto",
  email: "Joegatto@dmgov.org",
  phoneNumber: "515-402-2626",
  note: "Although Joe Gatto represents Ward 4, he lives elsewhere. Read about how he was approved to represent Ward 4 anyway by Mayor Cownie and others: https://tinyurl.com/2876huf5"
};
export const WARD_3_REP = {
  role: "Council Member: Ward 3",
  name: "Josh Mandelbaum",
  email: "Joshmandelbaum@dmgov.org",
  phoneNumber: "515-250-3384",
};
export const WARD_2_REP = {
  role: "Council Member: Ward 2",
  name: "Linda Westergaard",
  email: "LindaW@dmgov.org",
  phoneNumber: "515-988-4288",
};
export const WARD_1_REP = {
  role: "Council Member: Ward 1",
  name: "Chris Coleman",
  email: "chriscoleman@dmgov.org",
  phoneNumber: "515-202-8845",
};
export const AT_LARGE_REP_ONE = {
  role: "Council Member: At Large",
  name: "Mike Simonson",
  email: "MikeSimonson@dmgov.org",
  phoneNumber: "515-238-0874",
};
export const AT_LARGE_REP_TWO = {
  role: "Council Member: At Large",
  name: "Carl Voss",
  email: "carlvoss@dmgov.org",
  phoneNumber: "515-210-0237",
};
export const AT_LARGE_REPS = [AT_LARGE_REP_ONE, AT_LARGE_REP_TWO];
export const MAYOR = {
  role: "Mayor",
  name: "Connie Boesen",
  email: "ConnieBoesen@dmgov.org",
  phoneNumber: "515-283-4944 & 515-240-7929",
};
export const MAYOR_AND_COUNCIL_CONTACTS: ContactInfo[] = [
  MAYOR,
  ...AT_LARGE_REPS,
  WARD_1_REP,
  WARD_2_REP,
  WARD_3_REP,
  WARD_4_REP,
];
export const OPEN_RECORDS_COORDINATOR = {
  role: "Open Records Coordinator (FOIA Office)",
  name: "Lisa Mickey",
  email: "LMMickey@dmgov.org",
  phoneNumber: "515-283-4566",
};
export const CITY_MANAGER = {
  role: "City Manager",
  name: "Scott Sanders",
  email: "Citymanager@dmgov.org",
  phoneNumber: "515-283-4141",
  note: "Scott Sanders is unelected and serves at the pleasure of City Council.",
};
export const CITY_ATTORNEY = {
  role: "City Attorney",
  name: "Jeff Lester",
  email: "Jdlester@dmgov.org",
  phoneNumber: "515-283-4130",
};
export const CITY_CLERK = {
  role: "City Clerk",
  name: "Laura Baumgartner",
  email: "CityClerk@dmgov.org",
  phoneNumber: "515-283-4209",
};
export const ZONING_ENFORCEMENT = {
  role: "Zoning Enforcement",
  name: "SuAnn Donovan",
  email: "smdonovan@dmgov.org",
  phoneNumber: null,
};
export const POLICE_CHIEF = {
  role: "Police Chief",
  name: "Dana Wingert",
  email: null,
  emailLink: null,
  phoneNumber: null,
};
export const UNELECTED_CONTACTS: ContactInfo[] = [
  CITY_MANAGER,
  CITY_ATTORNEY,
  CITY_CLERK,
  ZONING_ENFORCEMENT,
  POLICE_CHIEF,
  OPEN_RECORDS_COORDINATOR,
];
export const ALL_CITY_CONTACTS: ContactInfo[] = [
  ...MAYOR_AND_COUNCIL_CONTACTS,
  ...UNELECTED_CONTACTS,
];
// contact council & mayor
export const CORE_EMAILS = `${MAYOR.email},${AT_LARGE_REP_ONE.email},${AT_LARGE_REP_TWO.email},${WARD_1_REP.email},${WARD_2_REP.email},${WARD_3_REP.email},${WARD_4_REP.email},${CITY_MANAGER.email}`;
export const CONTACT_COUNCIL_AND_MAYOR = `mailto:${CORE_EMAILS}`

export const CONTACT_GROUPS: SimpleContact[] = [
  {
    name: "Contact All Elected Representatives & City Manager",
    emailLink: CONTACT_COUNCIL_AND_MAYOR,
  },
];

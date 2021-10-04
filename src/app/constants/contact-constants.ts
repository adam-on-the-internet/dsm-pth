import {ContactInfo, SimpleContact} from "../models/ContactInfo.model";

// contact mayor frank
export const CONTACT_MAYOR = "https://tinyurl.com/ad53ynnk";
// contact ward 1 bill
export const CONTACT_WARD_1 = "https://tinyurl.com/jw99whe7";
// contact ward 2 linda
export const CONTACT_WARD_2 = "https://tinyurl.com/2kj8x4yj";
// contact ward 3 josh
export const CONTACT_WARD_3 = "https://tinyurl.com/4mbx47cv";
// contact ward 4 joe
export const CONTACT_WARD_4 = "https://tinyurl.com/6p78v94w";
// contact at large 1 connie
export const CONTACT_AT_LARGE_1 = "https://tinyurl.com/38sxufxa";
// contact at large 2 carl
export const CONTACT_AT_LARGE_2 = "https://tinyurl.com/59zz84bf";
// contact city clerk
export const CONTACT_CLERK = "https://tinyurl.com/299rm4bd";
// contact city attorney
export const CONTACT_ATTORNEY = "https://tinyurl.com/rrcurb44";
// contact city manager
export const CONTACT_MANAGER = "https://tinyurl.com/w22h3rp7";
// contact zoning enforcement
export const CONTACT_ZONING = "https://tinyurl.com/8ae4jcuu";
// contact council & mayor
export const CONTACT_COUNCIL_AND_MAYOR = "https://tinyurl.com/sf8p5bnh";
// contact for ward 1 + AL + M
export const CONTACT_WARD_1_REPS = "https://tinyurl.com/49hjaafj";
// contact for ward 2 + AL + M
export const CONTACT_WARD_2_REPS = "https://tinyurl.com/hhhbye4j";
// contact for ward 3 + AL + M
export const CONTACT_WARD_3_REPS = "https://tinyurl.com/2kdez3na";
// contact for ward 4 + AL + M
export const CONTACT_WARD_4_REPS = "https://tinyurl.com/mtzmn9hf";
// contact at large
export const CONTACT_WARD_AT_LARGE_REPS = "https://tinyurl.com/23pakxu3";
// request consent item be pulled
export const CONTACT_CLERK_CONSENT = "https://tinyurl.com/5dbeyt6h";

export const CONTACT_GROUPS: SimpleContact[] = [
  {
    name: "Contact All Elected Representatives",
    emailLink: CONTACT_COUNCIL_AND_MAYOR,
  },
  {
    name: "Contact All Ward One Representatives",
    emailLink: CONTACT_WARD_1_REPS,
  },
  {
    name: "Contact All Ward Two Representatives",
    emailLink: CONTACT_WARD_2_REPS,
  },
  {
    name: "Contact All Ward Three Representatives",
    emailLink: CONTACT_WARD_3_REPS,
  },
  {
    name: "Contact All Ward Four Representatives",
    emailLink: CONTACT_WARD_4_REPS,
  },
  {
    name: "Contact At Large Representatives",
    emailLink: CONTACT_WARD_AT_LARGE_REPS,
  },
];
export const SPECIAL_CONTACTS: SimpleContact[] = [
  {
    name: "Request an item be removed from the Consent Agenda",
    emailLink: CONTACT_CLERK_CONSENT,
  },
];

export const MAYOR_AND_COUNCIL_CONTACTS: ContactInfo[] = [{
  role: "Mayor",
  name: "T.M. Franklin Cownie",
  email: "Fcownie@dmgov.org",
  emailLink: CONTACT_MAYOR,
  phoneNumber: "515-283-4944",
},
  {
    role: "Council Member: At Large",
    name: "Connie Boesen",
    email: "Connieboesen@dmgov.org",
    emailLink: CONTACT_AT_LARGE_1,
    phoneNumber: "515-240-7929",
  },
  {
    role: "Council Member: At Large",
    name: "Carl Voss",
    email: "carlvoss@dmgov.org",
    emailLink: CONTACT_AT_LARGE_2,
    phoneNumber: "515-210-0237",
  },
  {
    role: "Council Member: Ward 1",
    name: "Bill Gray",
    email: "Billgray@dmgov.org",
    emailLink: CONTACT_WARD_1,
    phoneNumber: "515-274-0077",
  },
  {
    role: "Council Member: Ward 2",
    name: "Linda Westergaard",
    email: "LindaW@dmgov.org",
    emailLink: CONTACT_WARD_2,
    phoneNumber: "515-988-4288",
  },
  {
    role: "Council Member: Ward 3",
    name: "Josh Mandelbaum",
    email: "Joshmandelbaum@dmgov.org",
    emailLink: CONTACT_WARD_3,
    phoneNumber: "515-250-3384",
  },
  {
    role: "Council Member: Ward 4",
    name: "Joe Gatto",
    email: "Joegatto@dmgov.org",
    emailLink: CONTACT_WARD_4,
    phoneNumber: "515-402-2626",
    note: "Although Joe Gatto represents Ward 4, he lives elsewhere. Read about how he was approved to represent Ward 4 anyway by Mayor Cownie and others: https://tinyurl.com/2876huf5"
  },
  {
    role: "City Manager",
    name: "Scott Sanders",
    email: "Citymanager@dmgov.org",
    emailLink: CONTACT_MANAGER,
    phoneNumber: "515-283-4141",
  }];
export const UNELECTED_CONTACTS: ContactInfo[] = [
  {
    role: "City Attorney",
    name: "Jeff Lester",
    email: "Jdlester@dmgov.org",
    emailLink: CONTACT_ATTORNEY,
    phoneNumber: "515-283-4130",
  },
  {
    role: "City Clerk",
    name: "P. Kay Clemik",
    email: "CityClerk@dmgov.org",
    emailLink: CONTACT_CLERK,
    phoneNumber: "515-283-4209",
  },
  {
    role: "Zoning Enforcement",
    name: "SuAnn Donovan",
    email: "smdonovan@dmgov.org",
    emailLink: CONTACT_ZONING,
    phoneNumber: null,
  },
  {
    role: "Police Chief",
    name: "Dana Wingert",
    email: null,
    emailLink: null,
    phoneNumber: null,
    note: "We do not recommend contacting Dana Wingert."
  },
];
export const ALL_CITY_CONTACTS: ContactInfo[] = [
  ...MAYOR_AND_COUNCIL_CONTACTS,
  ...UNELECTED_CONTACTS,
];
export const BEYOND_CITY: ContactInfo[] = [
  {
    role: "Congresswoman: 3rd District of Iowa",
    name: "Cindy Axne",
    email: "",
    emailLink: "",
    phoneNumber: "515-400-8180",
  },
];

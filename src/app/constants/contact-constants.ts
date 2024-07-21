import {ContactInfo, SimpleContact} from "../models/ContactInfo.model";

// contact council & mayor
export const CONTACT_COUNCIL_AND_MAYOR = "https://tinyurl.com/4rx8hbrc";

export const CONTACT_GROUPS: SimpleContact[] = [
  {
    name: "Contact All Elected Representatives",
    emailLink: CONTACT_COUNCIL_AND_MAYOR,
  },
];
export const SPECIAL_CONTACTS: SimpleContact[] = [];

export const WARD_4_REP = {
  role: "Council Member: Ward 4",
  name: "Joe Gatto",
  email: "Joegatto@dmgov.org",
  emailLink: "mailto:JoeGatto@dmgov.org",
  phoneNumber: "515-402-2626",
  note: "Although Joe Gatto represents Ward 4, he lives elsewhere. Read about how he was approved to represent Ward 4 anyway by Mayor Cownie and others: https://tinyurl.com/2876huf5"
};
export const WARD_3_REP = {
  role: "Council Member: Ward 3",
  name: "Josh Mandelbaum",
  email: "Joshmandelbaum@dmgov.org",
  emailLink: "mailto:Joshmandelbaum@dmgov.org",
  phoneNumber: "515-250-3384",
};
export const WARD_2_REP = {
  role: "Council Member: Ward 2",
  name: "Linda Westergaard",
  email: "LindaW@dmgov.org",
  emailLink: "mailto:LindaW@dmgov.org",
  phoneNumber: "515-988-4288",
};
export const WARD_1_REP = {
  role: "Council Member: Ward 1",
  name: "Chris Coleman",
  email: "chriscoleman@dmgov.org",
  emailLink: "mailto:chriscoleman@dmgov.org",
  phoneNumber: "515-202-8845",
};
export const AT_LARGE_REPS = [
  {
    role: "Council Member: At Large",
    name: "Mike Simonson",
    email: "MikeSimonson@dmgov.org",
    emailLink: "mailto:MikeSimonson@dmgov.org",
    phoneNumber: "515-238-0874",
  },
  {
    role: "Council Member: At Large",
    name: "Carl Voss",
    email: "carlvoss@dmgov.org",
    emailLink: "mailto:carlvoss@dmgov.org",
    phoneNumber: "515-210-0237",
  }
];
export const MAYOR = {
  role: "Mayor",
  name: "Connie Boesen",
  email: "ConnieBoesen@dmgov.org",
  emailLink: "mailto:ConnieBoesen@dmgov.org",
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
  emailLink: "mailto:LMMickey@dmgov.org",
  phoneNumber: "515-283-4566",
};
export const CITY_MANAGER = {
  role: "City Manager",
  name: "Scott Sanders",
  email: "Citymanager@dmgov.org",
  emailLink: "mailto:Citymanager@dmgov.org",
  phoneNumber: "515-283-4141",
  note: "Scott Sanders is unelected and serves at the pleasure of City Council.",
};
export const CITY_ATTORNEY = {
  role: "City Attorney",
  name: "Jeff Lester",
  email: "Jdlester@dmgov.org",
  emailLink: "mailto:Jdlester@dmgov.org",
  phoneNumber: "515-283-4130",
};
export const CITY_CLERK = {
  role: "City Clerk",
  name: "Laura Baumgartner",
  email: "CityClerk@dmgov.org",
  emailLink: "mailto:CityClerk@dmgov.org",
  phoneNumber: "515-283-4209",
};
export const ZONING_ENFORCEMENT = {
  role: "Zoning Enforcement",
  name: "SuAnn Donovan",
  email: "smdonovan@dmgov.org",
  emailLink: "mailto:smdonovan@dmgov.org",
  phoneNumber: null,
};
export const POLICE_CHIEF = {
  role: "Police Chief",
  name: "Dana Wingert",
  email: null,
  emailLink: null,
  phoneNumber: null,
};
export const CITY_MANAGERS_OFFICE = [{
  role: "Deputy City Manager",
  name: "Matthew Anderson",
  email: "maanderson@dmgov.org",
  emailLink: "mailto:maanderson@dmgov.org",
  phoneNumber: "515-283-4141",
  note: "The Deputy City Manager also serves as the Ethics Officer for any complaints over City Council Members. View the Council Ethics Code here: https://library.municode.com/ia/des_moines/codes/code_of_ordinances?nodeId=MUCO_CH2AD_ARTIIICICO_DIV3CICOETCO"
},
  {
    role: "Assistant City Manager",
    name: "Pam Cooksey",
    email: "pscooksey@dmgov.org",
    emailLink: "mailto:pscooksey@dmgov.org",
    phoneNumber: "515-283-4141",
    salaryLink: "https://govsalaries.com/cooksey-pamela-112610982",
    salary: "$183,404",
  },
  {
    role: "Assistant City Manager",
    name: "Malcolm Hankins",
    email: "mahankins@dmgov.org",
    emailLink: "mailto:mahankins@dmgov.org",
    phoneNumber: "515-283-4141",
    salaryLink: "https://govsalaries.com/hankins-malcolm-112610989",
    salary: "$170,000",
  },
  {
    role: "Assistant City Manager",
    name: "Jennifer Schulte",
    email: "JLSchulte@dmgov.org",
    emailLink: "mailto:JLSchulte@dmgov.org",
    phoneNumber: "515-283-4058",
    salaryLink: "https://govsalaries.com/schulte-jennifer-7193695",
    salary: "$104,728",
  }];
export const CHIEF_EQUITY_OFFICER = {
  role: "LGBTQ Liaison/Chief Equity Officer",
  name: "Manisha Paudel",
  email: "mpaudel@dmgov.org",
  emailLink: "mailto:mpaudel@dmgov.org",
  phoneNumber: "515-237-1483",
  salaryLink: "",
  salary: "",
};
export const UNELECTED_CONTACTS: ContactInfo[] = [
  CITY_MANAGER,
  CITY_ATTORNEY,
  CITY_CLERK,
  ZONING_ENFORCEMENT,
  POLICE_CHIEF,
  CHIEF_EQUITY_OFFICER,
  OPEN_RECORDS_COORDINATOR,
];
export const ALL_CITY_CONTACTS: ContactInfo[] = [
  ...MAYOR_AND_COUNCIL_CONTACTS,
  ...UNELECTED_CONTACTS,
];

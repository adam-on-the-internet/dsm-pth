import {ContactInfo, SimpleContact} from "../models/ContactInfo.model";

// contact mayor frank
export const CONTACT_MAYOR = "https://tinyurl.com/ad53ynnk";
// contact ward 1 indira
export const CONTACT_WARD_1 = "mailto:chriscoleman@dmgov.org";
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
export const CONTACT_COUNCIL_AND_MAYOR = "https://tinyurl.com/4rx8hbrc";
// contact for ward 1 + AL + M
export const CONTACT_WARD_1_REPS = "https://tinyurl.com/3bc56p7t";
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

export const WARD_4_REP = {
  role: "Council Member: Ward 4",
  name: "Joe Gatto",
  email: "Joegatto@dmgov.org",
  emailLink: CONTACT_WARD_4,
  phoneNumber: "515-402-2626",
  term: "Elected 2014, term expires 2024. Up for election in 2023.",
  campaignDisclosureLink: "https://webapp.iecdb.iowa.gov/PublicView/?d=county%2fPolk%2fCity_Candidate%2fGatto_Joseph",
  salary: "$28,880",
  salaryLink: "https://www.desmoinesregister.com/story/news/2019/09/23/des-moines-city-council-gives-first-ok-raising-mayor-council-salaries/2418831001/",
  note: "Although Joe Gatto represents Ward 4, he lives elsewhere. Read about how he was approved to represent Ward 4 anyway by Mayor Cownie and others: https://tinyurl.com/2876huf5"
};
export const WARD_3_REP = {
  role: "Council Member: Ward 3",
  name: "Josh Mandelbaum",
  email: "Joshmandelbaum@dmgov.org",
  emailLink: CONTACT_WARD_3,
  phoneNumber: "515-250-3384",
  term: "Elected 2018, term expires 2026.",
  campaignDisclosureLink: "https://webapp.iecdb.iowa.gov/PublicView/?d=county%2fPolk%2fCity_Candidate%2fMandelbaum_Joshua",
  salary: "$28,880",
  salaryLink: "https://www.desmoinesregister.com/story/news/2019/09/23/des-moines-city-council-gives-first-ok-raising-mayor-council-salaries/2418831001/",
};
export const WARD_2_REP = {
  role: "Council Member: Ward 2",
  name: "Linda Westergaard",
  email: "LindaW@dmgov.org",
  emailLink: CONTACT_WARD_2,
  phoneNumber: "515-988-4288",
  term: "Elected 2016, term expires 2024. Up for election in 2023.",
  campaignDisclosureLink: "https://webapp.iecdb.iowa.gov/PublicView/?d=county%2fPolk%2fCity_Candidate%2fWestergaard_Linda",
  salary: "$28,880",
  salaryLink: "https://www.desmoinesregister.com/story/news/2019/09/23/des-moines-city-council-gives-first-ok-raising-mayor-council-salaries/2418831001/",
};
export const WARD_1_REP = {
  role: "Council Member: Ward 1",
  name: "Chris Coleman",
  email: "chriscoleman@dmgov.org",
  emailLink: CONTACT_WARD_1,
  phoneNumber: "515-202-8845",
  // campaignDisclosureLink: "",
  salary: "$28,880",
  salaryLink: "https://www.desmoinesregister.com/story/news/2019/09/23/des-moines-city-council-gives-first-ok-raising-mayor-council-salaries/2418831001/",
  term: "Elected 2021, sworn in on 1/10/22. Term expires 2026."
};
export const AT_LARGE_REPS = [{
  role: "Council Member: At Large",
  name: "Connie Boesen",
  email: "Connieboesen@dmgov.org",
  emailLink: CONTACT_AT_LARGE_1,
  phoneNumber: "515-240-7929",
  campaignDisclosureLink: "https://webapp.iecdb.iowa.gov/PublicView/?d=county%2fPolk%2fCity_Candidate%2fboesen_connie",
  salary: "$28,880",
  salaryLink: "https://www.desmoinesregister.com/story/news/2019/09/23/des-moines-city-council-gives-first-ok-raising-mayor-council-salaries/2418831001/",
  term: "Elected 2018, term expires 2026."
},
  {
    role: "Council Member: At Large",
    name: "Carl Voss",
    email: "carlvoss@dmgov.org",
    emailLink: CONTACT_AT_LARGE_2,
    phoneNumber: "515-210-0237",
    salary: "$28,880",
    salaryLink: "https://www.desmoinesregister.com/story/news/2019/09/23/des-moines-city-council-gives-first-ok-raising-mayor-council-salaries/2418831001/",
    campaignDisclosureLink: "https://webapp.iecdb.iowa.gov/PublicView/?d=county%2fPolk%2fCity_Candidate%2fVoss_Carl",
    term: "Elected 2019, term expires 2024. Up for election in 2023."
  }];
export const MAYOR = {
  role: "Mayor",
  name: "T.M. Franklin Cownie",
  email: "Fcownie@dmgov.org",
  emailLink: CONTACT_MAYOR,
  phoneNumber: "515-283-4944",
  campaignDisclosureLink: "https://webapp.iecdb.iowa.gov/PublicView/?d=county%2fPolk%2fCity_Candidate%2fCownie_Frank",
  salary: "$57,760",
  salaryLink: "https://www.desmoinesregister.com/story/news/2019/09/23/des-moines-city-council-gives-first-ok-raising-mayor-council-salaries/2418831001/",
  term: "Elected 2004, term expires 2024. Up for election in 2023."
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
  salaryLink: "https://govsalaries.com/mickey-lisa-7278173",
  salary: "$68,786",
};
export const CITY_MANAGER = {
  role: "City Manager",
  name: "Scott Sanders",
  email: "Citymanager@dmgov.org",
  emailLink: CONTACT_MANAGER,
  phoneNumber: "515-283-4141",
  salary: "$310,427",
  salaryLink: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjetZOTndf0AhUHOs0KHcMpCpwQFnoECAMQAQ&url=https%3A%2F%2Fwww.axios.com%2Flocal%2Fdes-moines%2F2021%2F07%2F21%2Fdes-moines-city-manager-clerk-attorney-raise-bonus&usg=AOvVaw26ZYn_0nACVZfPh0wbQioN",
  note: "Scott Sanders is unelected and serves at the pleasure of City Council.",
};
export const CITY_ATTORNEY = {
  role: "City Attorney",
  name: "Jeff Lester",
  email: "Jdlester@dmgov.org",
  emailLink: CONTACT_ATTORNEY,
  phoneNumber: "515-283-4130",
  salary: "$243,216",
  salaryLink: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjetZOTndf0AhUHOs0KHcMpCpwQFnoECAMQAQ&url=https%3A%2F%2Fwww.axios.com%2Flocal%2Fdes-moines%2F2021%2F07%2F21%2Fdes-moines-city-manager-clerk-attorney-raise-bonus&usg=AOvVaw26ZYn_0nACVZfPh0wbQioN",
};
export const CITY_CLERK = {
  role: "City Clerk",
  name: "Laura Baumgartner",
  email: "CityClerk@dmgov.org",
  emailLink: CONTACT_CLERK,
  phoneNumber: "515-283-4209",
  salary: "$139,335",
  salaryLink: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjetZOTndf0AhUHOs0KHcMpCpwQFnoECAMQAQ&url=https%3A%2F%2Fwww.axios.com%2Flocal%2Fdes-moines%2F2021%2F07%2F21%2Fdes-moines-city-manager-clerk-attorney-raise-bonus&usg=AOvVaw26ZYn_0nACVZfPh0wbQioN",
};
export const ZONING_ENFORCEMENT = {
  role: "Zoning Enforcement",
  name: "SuAnn Donovan",
  email: "smdonovan@dmgov.org",
  emailLink: CONTACT_ZONING,
  phoneNumber: null,
  salaryLink: "https://govsalaries.com/donovan-suann-7188989",
  salary: "$112,195"
};
export const POLICE_CHIEF = {
  role: "Police Chief",
  name: "Dana Wingert",
  email: null,
  emailLink: null,
  phoneNumber: null,
  salaryLink: "https://www.kwwl.com/news/cedar-rapids/a-look-at-police-chief-salaries-across-iowa/article_9db2dbee-705c-5797-891a-314291eff189.html",
  salary: "$183,404",
};
export const CITY_MANAGERS_OFFICE = [{
  role: "Deputy City Manager",
  name: "Matthew Anderson",
  email: "maanderson@dmgov.org",
  emailLink: "mailto:maanderson@dmgov.org",
  phoneNumber: "515-283-4141",
  salaryLink: "https://govsalaries.com/anderson-matthew-112610979",
  salary: "$187,181",
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
  ...CITY_MANAGERS_OFFICE,
  CHIEF_EQUITY_OFFICER,
  OPEN_RECORDS_COORDINATOR,
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

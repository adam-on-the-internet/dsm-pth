import {ContactInfo, SimpleContact} from "../models/ContactInfo.model";

// contact mayor frank
export const CONTACT_MAYOR = "https://tinyurl.com/ad53ynnk";
// contact ward 1 bill
export const CONTACT_WARD_1 = "https://tinyurl.com/jw99whe7"; // changed
// contact ward 2 linda
export const CONTACT_WARD_2 = "https://tinyurl.com/2kj8x4yj";
// contact ward 3 josh
export const CONTACT_WARD_3 = "https://tinyurl.com/4mbx47cv";
// contact ward 4 joe
export const CONTACT_WARD_4 = "https://tinyurl.com/6p78v94w";
// contact at large 1 connie
export const CONTACT_AT_LARGE_1 = "https://tinyurl.com/38sxufxa"; // changed
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
export const CONTACT_COUNCIL_AND_MAYOR = "https://tinyurl.com/sf8p5bnh"; // changed
// contact for ward 1 + AL + M
export const CONTACT_WARD_1_REPS = "https://tinyurl.com/49hjaafj"; // changed
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

export const MAYOR_AND_COUNCIL_CONTACTS: ContactInfo[] = [
  {
    role: "Mayor",
    name: "T.M. Franklin Cownie",
    email: "Fcownie@dmgov.org",
    emailLink: CONTACT_MAYOR,
    phoneNumber: "515-283-4944",
    salary: "$57,760",
    salaryLink: "https://www.desmoinesregister.com/story/news/2019/09/23/des-moines-city-council-gives-first-ok-raising-mayor-council-salaries/2418831001/",
    term: "Elected 2004, term expires 2024. Up for election in 2023."
  },
  {
    role: "Council Member: At Large",
    name: "Connie Boesen",
    email: "Connieboesen@dmgov.org",
    emailLink: CONTACT_AT_LARGE_1,
    phoneNumber: "515-240-7929",
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

    term: "Elected 2019, term expires 2024. Up for election in 2023."
  },
  {
    role: "Council Member Elect: Ward 1",
    name: "Indira Sheumaker",
    email: "indiras@dmgov.org",
    emailLink: CONTACT_WARD_1,
    phoneNumber: "515-979-2619",
    salary: "$28,880",
    salaryLink: "https://www.desmoinesregister.com/story/news/2019/09/23/des-moines-city-council-gives-first-ok-raising-mayor-council-salaries/2418831001/",
    term: "Elected 2021, sworn in on 1/10/22. Term expires 2026."
  },
  {
    role: "Council Member: Ward 2",
    name: "Linda Westergaard",
    email: "LindaW@dmgov.org",
    emailLink: CONTACT_WARD_2,
    phoneNumber: "515-988-4288",
    term: "Elected 2016, term expires 2024. Up for election in 2023.",
    salary: "$28,880",
    salaryLink: "https://www.desmoinesregister.com/story/news/2019/09/23/des-moines-city-council-gives-first-ok-raising-mayor-council-salaries/2418831001/",
  },
  {
    role: "Council Member: Ward 3",
    name: "Josh Mandelbaum",
    email: "Joshmandelbaum@dmgov.org",
    emailLink: CONTACT_WARD_3,
    phoneNumber: "515-250-3384",
    term: "Elected 2018, term expires 2026.",
    salary: "$28,880",
    salaryLink: "https://www.desmoinesregister.com/story/news/2019/09/23/des-moines-city-council-gives-first-ok-raising-mayor-council-salaries/2418831001/",
  },
  {
    role: "Council Member: Ward 4",
    name: "Joe Gatto",
    email: "Joegatto@dmgov.org",
    emailLink: CONTACT_WARD_4,
    phoneNumber: "515-402-2626",
    term: "Elected 2014, term expires 2024. Up for election in 2023.",
    salary: "$28,880",
    salaryLink: "https://www.desmoinesregister.com/story/news/2019/09/23/des-moines-city-council-gives-first-ok-raising-mayor-council-salaries/2418831001/",
    note: "Although Joe Gatto represents Ward 4, he lives elsewhere. Read about how he was approved to represent Ward 4 anyway by Mayor Cownie and others: https://tinyurl.com/2876huf5"
  },
];
export const UNELECTED_CONTACTS: ContactInfo[] = [
  {
    role: "City Manager",
    name: "Scott Sanders",
    email: "Citymanager@dmgov.org",
    emailLink: CONTACT_MANAGER,
    phoneNumber: "515-283-4141",
    salary: "$284,268",
    salaryLink: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjetZOTndf0AhUHOs0KHcMpCpwQFnoECAMQAQ&url=https%3A%2F%2Fwww.axios.com%2Flocal%2Fdes-moines%2F2021%2F07%2F21%2Fdes-moines-city-manager-clerk-attorney-raise-bonus&usg=AOvVaw26ZYn_0nACVZfPh0wbQioN",
    note: "Scott Sanders is unelected and serves at the pleasure of City Council.",
  },
  {
    role: "City Attorney",
    name: "Jeff Lester",
    email: "Jdlester@dmgov.org",
    emailLink: CONTACT_ATTORNEY,
    phoneNumber: "515-283-4130",
    salary: "$222,720",
    salaryLink: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjetZOTndf0AhUHOs0KHcMpCpwQFnoECAMQAQ&url=https%3A%2F%2Fwww.axios.com%2Flocal%2Fdes-moines%2F2021%2F07%2F21%2Fdes-moines-city-manager-clerk-attorney-raise-bonus&usg=AOvVaw26ZYn_0nACVZfPh0wbQioN",
  },
  {
    role: "City Clerk",
    name: "P. Kay Clemik",
    email: "CityClerk@dmgov.org",
    emailLink: CONTACT_CLERK,
    phoneNumber: "515-283-4209",
    salary: "$121,713",
    salaryLink: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjetZOTndf0AhUHOs0KHcMpCpwQFnoECAMQAQ&url=https%3A%2F%2Fwww.axios.com%2Flocal%2Fdes-moines%2F2021%2F07%2F21%2Fdes-moines-city-manager-clerk-attorney-raise-bonus&usg=AOvVaw26ZYn_0nACVZfPh0wbQioN",

  },
  {
    role: "Zoning Enforcement",
    name: "SuAnn Donovan",
    email: "smdonovan@dmgov.org",
    emailLink: CONTACT_ZONING,
    phoneNumber: null,
    salaryLink: "https://govsalaries.com/donovan-suann-7188989",
    salary: "$112,195"
  },
  {
    role: "Police Chief",
    name: "Dana Wingert",
    email: null,
    emailLink: null,
    phoneNumber: null,
    salaryLink: "https://www.kwwl.com/news/cedar-rapids/a-look-at-police-chief-salaries-across-iowa/article_9db2dbee-705c-5797-891a-314291eff189.html",
    salary: "$183,404",
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

import {ContactInfo} from "../models/ContactInfo.model";

export const MAIN_CITY_CONTACTS = [{
  role: "Mayor",
  name: "T.M. Franklin Cownie",
  email: "Fcownie@dmgov.org",
  phoneNumber: "515-283-4944",
},
  {
    role: "Council Member: At Large",
    name: "Carl Voss",
    email: "carlvoss@dmgov.org",
    phoneNumber: "515-210-0237",
  },
  {
    role: "Council Member: At Large",
    name: "Connie Boesen",
    email: "Connieboesen@dmgov.org",
    phoneNumber: "515-240-7929",
  },
  {
    role: "Council Member: Ward 1",
    name: "Bill Gray",
    email: "Billgray@dmgov.org",
    phoneNumber: "515-274-0077",
  },
  {
    role: "Council Member: Ward 2",
    name: "Linda Westergaard",
    email: "LindaW@dmgov.org",
    phoneNumber: "515-988-4288",
  },
  {
    role: "Council Member: Ward 3",
    name: "Josh Mandelbaum",
    email: "Joshmandelbaum@dmgov.org",
    phoneNumber: "515-250-3384",
  },
  {
    role: "Council Member: Ward 4*",
    name: "Joe Gatto",
    email: "Joegatto@dmgov.org",
    phoneNumber: "515-402-2626",
  },
  {
    role: "City Manager",
    name: "Scott Sanders",
    email: "Citymanager@dmgov.org",
    phoneNumber: "515-283-4141",
  }];
export const CONTACTS: ContactInfo[] = [
  ...MAIN_CITY_CONTACTS,
  {
    role: "City Attorney",
    name: "Jeff Lester",
    email: "Jdlester@dmgov.org",
    phoneNumber: "515-283-4130",
  },
  {
    role: "City Clerk",
    name: "P. Kay Clemik",
    email: "CityClerk@dmgov.org",
    phoneNumber: "515-283-4209",
  },
  {
    role: "Police Chief",
    name: "Dana Wingert",
    email: "PoliceChief@dmgov.org",
    phoneNumber: "",
  },
  {
    role: "Zoning Enforcement",
    name: "SuAnn Donovan",
    email: "smdonovan@dmgov.org",
    phoneNumber: "",
  },
  {
    role: "Congresswoman: 3rd District of Iowa",
    name: "Cindy Axne",
    email: "",
    phoneNumber: "515-400-8180",
  },
];

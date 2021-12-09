export interface SimpleContact {
  name: string;
  emailLink: string;
  term?: string;
  note?: string;
}

export interface ContactInfo extends SimpleContact {
  role: string;
  phoneNumber: string;
  email: string;
}

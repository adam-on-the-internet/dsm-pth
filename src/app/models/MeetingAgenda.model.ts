export interface MeetingAgenda {
  _id: string;
  name: string;
  time: string;
  type: string;
  place: string;
  links: LinkItem[];
  tags: string[];
  highlights: string[];
  description: string;
  subtitle: string;
  dateAdded?;
}

export interface MeetingAgendaComplete extends MeetingAgenda {
  agendaItems: AgendaItem[];
}

export interface AgendaItem {
  _id: string;
  name: string;
  cityText: string;
  section: string;
  meetingAgendaId: string;
  ourText: string;
  ourPriority: number;
  tags: string[];
  ourComments: string[];
  cityAttachments: LinkItem[];
  ourLinks: LinkItem[];
  dateAdded?;
}

export interface LinkItem {
  text: string;
  url: string;
  details?: string;
}

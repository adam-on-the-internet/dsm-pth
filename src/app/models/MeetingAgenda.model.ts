export interface MeetingAgenda {
  _id: string;
  name: string;
  time: string;
  type: string;
  place: string;
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
}

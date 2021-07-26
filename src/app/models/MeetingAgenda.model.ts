export interface MeetingAgenda {
  _id: string;
  name: string;
  time: string;
  type: string;
  place: string;
}

export interface MeetingAgendaComplete extends MeetingAgenda {
  agendaItems: string[];
}

export interface AgendaItem {
  _id: string;
  name: string;
}

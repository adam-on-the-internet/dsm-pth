export interface MeetingAgenda {
  name: string;
}

export interface MeetingAgendaComplete extends MeetingAgenda {
  agendaItems: string[];
}

export interface AgendaItem {
  name: string;
}

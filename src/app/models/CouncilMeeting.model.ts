export interface CouncilMeetingDTO {
  year: string;
  month: string;
  day: string;
  time: string;
  type: string;
  featured: boolean;
  show: boolean;
  subtitle?: string;
}

export interface CouncilMeeting extends CouncilMeetingDTO {
  readableDate: string;
  readableType: string;
  link: string;
}

export interface CouncilMeetingYear {
  year: number;
  councilMeetings: CouncilMeeting[];
}

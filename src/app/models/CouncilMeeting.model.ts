export interface CouncilMeetingDTO {
  fileName: string;
  year: string;
  month: string;
  day: string;
  time: string;
  type: string;
  featured: boolean;
}

export interface CouncilMeeting extends CouncilMeetingDTO {
  readableDate: string;
  readableType: string;
  link: string;
}

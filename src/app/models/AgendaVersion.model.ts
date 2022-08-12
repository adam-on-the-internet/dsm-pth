export interface AgendaVersion {
  meeting_code: string;
  plaintext: string;
  version: number;

  checked: boolean;
  check_message: string;
  check_message_log: string[];
  found_date: string;
  _id: string;
}

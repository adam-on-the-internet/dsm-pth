import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CouncilMeetingService {
  public meetingYears: any[] = [
    {
      year: 2021,
      months: [
        {
          month: "December",
          dates: [
            {
              date: "2021_12_20",
              meetings: [
                {
                  type: "WS",
                  time: "7:30am",
                },
                {
                  type: "RM",
                  time: "5:00pm",
                },
              ],
            },
            {
              date: "2021_12_06",
              meetings: [
                {
                  type: "WS",
                  time: "7:30am",
                },
                {
                  type: "RM",
                  time: "5:00pm",
                },
              ],
            },
          ],
        }
      ],
    }
  ];
}

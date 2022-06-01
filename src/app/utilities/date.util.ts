export abstract class DateHelper {
  public static getMonthName(monthNumber) {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[monthNumber];
  }

  public static convertMDYtoDisplayDate(date: string): string {
    // ex: 6/13/2022 to June 13, 2022
    const datePieces = date.split("/");
    const year = datePieces[2];
    const dayOfMonth = datePieces[1];
    const monthNumber = datePieces[0];
    const monthName = DateHelper.getMonthName(Number(monthNumber) - 1);
    return `${monthName} ${dayOfMonth}, ${year}`;
  }

  public static convertToIowaTime(date) {
    return date.toLocaleString('en-US', {timeZone: 'America/Chicago'});
  }

  public static subtractDays(initialDate: string, numberOfDays: number) {
    const initialDateParsed = Date.parse(initialDate);
    const adjustedDate = new Date(initialDateParsed - (numberOfDays * 24 * 60 * 60 * 1000));
    return DateHelper.convertToIowaTime(adjustedDate).split(",")[0];
  }
}

import {StringHelper} from "./string.util";

export abstract class MailUtil {
  public static buildMailto(to: string, subject: string, body: string, cc: string = "", bcc: string = ""): string {
    subject = encodeURIComponent(subject);
    body = StringHelper.removeHtml(body);
    body = encodeURIComponent(body);
    if (cc) {
      cc = `&cc=${cc}`
    }
    if (bcc) {
      bcc = `&bcc=${bcc}`
    }
    const params = `?subject=${subject}${cc}${bcc}&body=${body}`;
    return `mailto:${to}${params}`;
  }
}

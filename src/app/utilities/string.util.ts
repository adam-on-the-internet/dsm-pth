export abstract class StringHelper {
  public static toTitleCase(text) {
    return text.toLowerCase()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");
  }
  public static fromHtmlToLabel(text) {
    const spacedName = text.replaceAll("-", " ");
    return StringHelper.toTitleCase(spacedName);
  }
  public static removeHtml(string: string): string {
    string = string.replace(/<p>/g, "");
    string = string.replace(/<\/p>/g, "");
    return string.replace(/<br>/g, "");
  }
}

export const podcastInquiryCategory = "Podcast Outreach and Guest Opportunities";

export function buildInquiryMailto(fd: FormData) {
  const subject = encodeURIComponent(String(fd.get("subject") || "New discovery inquiry"));
  const category = fd.get("category");
  const body = encodeURIComponent(
    `Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\nBook Title: ${fd.get("book") || ", "}\nGenre: ${fd.get("genre") || ", "}\nStage: ${fd.get("stage") || ", "}\nBudget Tier: ${fd.get("budget") || ", "}${category ? `\nInquiry Type: ${category}` : ""}\n\nMessage:\n${fd.get("message")}`
  );
  return `mailto:growthsparkimpact@gmail.com?subject=${subject}&body=${body}`;
}

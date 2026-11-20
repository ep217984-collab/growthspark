import { describe, expect, test } from "bun:test";
import { buildInquiryMailto, podcastInquiryCategory } from "./contact-inquiry";
import { teamDrafts } from "./team-drafts";
import { team } from "./team";

describe("inquiry email handoff", () => {
  test("carries the selected podcast inquiry category and author input", () => {
    const data = new FormData();
    data.set("name", "Test Author");
    data.set("email", "author@example.test");
    data.set("subject", "Podcast inquiry");
    data.set("message", "Please explore relevant shows for my book.");
    data.set("category", podcastInquiryCategory);
    const url = new URL(buildInquiryMailto(data));
    expect(url.pathname).toBe("growthsparkimpact@gmail.com");
    expect(url.searchParams.get("subject")).toBe("Podcast inquiry");
    expect(url.searchParams.get("body")).toContain("Inquiry Type: Podcast Outreach and Guest Opportunities");
    expect(url.searchParams.get("body")).toContain("Please explore relevant shows for my book.");
  });

  test("preserves existing inquiries without a category", () => {
    const data = new FormData();
    data.set("subject", "Existing subject");
    data.set("book", "Existing book");
    const url = new URL(buildInquiryMailto(data));
    expect(url.searchParams.get("subject")).toBe("Existing subject");
    expect(url.searchParams.get("body")).toContain("Book Title: Existing book");
    expect(url.searchParams.get("body")).not.toContain("Inquiry Type:");
  });
});

test("Sunday David is published once with his approved role and division, without a photo", () => {
  expect(teamDrafts.find((p) => p.name === "Sunday David")).toBeUndefined();
  const members = team.filter((m) => m.name === "Sunday David");
  expect(members.length).toBe(1);
  expect(members[0].role).toBe("Director of Business Development & Strategic Partnerships");
  expect(members[0].division).toBe("Business Development & Strategic Partnerships Division");
  expect(members[0].photo).toBeUndefined();
});

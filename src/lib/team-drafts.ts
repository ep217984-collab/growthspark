/** Unpublished profiles. Do not render in the public team or leadership lists. */
export type TeamDraft = {
  name: string;
  status: "unpublished";
  role: string | null;
  division: string | null;
  bio: string | null;
  responsibilities: string[] | null;
  photo: string | null;
};

export const teamDrafts: TeamDraft[] = [];

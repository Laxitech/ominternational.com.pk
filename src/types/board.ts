export type BoardType = "governing" | "advisory";

export type BoardTier = "lead" | "member";

export type BoardPortfolioItem = {
  role: string;
  organization: string;
  description?: string;
};

export type BoardHighlightItem = {
  label: string;
  value: string;
};

export type BoardBookItem = {
  title: string;
  bestSeller?: boolean;
};

export type BoardMemberProfile = {
  qualification?: string;
  headline?: string;
  email?: string;
  specializations?: string[];
  bio?: string[];
  portfolio?: BoardPortfolioItem[];
  highlights?: BoardHighlightItem[];
  books?: BoardBookItem[];
  governmentsAdvised?: string[];
};

export type BoardMember = {
  slug: string;
  name: string;
  role?: string; // optional, hide when missing, never invent
  board: BoardType;
  tier: BoardTier; // lead = larger card
  photo?: string; // path under /images/board/; fall back to the placeholder when missing
  profile?: BoardMemberProfile;
};

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BoardMemberProfile from "@/components/board/board-member-profile";
import { boardMembers } from "@/data/board";
import type { BoardMember } from "@/types/board";

interface ProfilePageProps {
  params: Promise<{ slug: string }>;
}

function getMemberBySlug(slug: string): BoardMember | undefined {
  if (slug === "mian-masood-ahmed" || slug === "mian-masood") {
    return boardMembers.find((member) => member.slug === "mian-masood-ahmad");
  }
  if (slug === "prof-dr-omar-masood" || slug === "omar-masood") {
    return boardMembers.find((member) => member.slug === "dr-omar-masood");
  }
  if (slug === "muhammad-maqbool") {
    return boardMembers.find((member) => member.slug === "mohammad-maqbool");
  }
  if (slug === "malik-mumtaz") {
    return boardMembers.find((member) => member.slug === "prof-malik-mumtaz");
  }
  return boardMembers.find((member) => member.slug === slug);
}

export function generateStaticParams() {
  const params = boardMembers.map((member) => ({
    slug: member.slug,
  }));

  params.push({ slug: "mian-masood-ahmed" });
  params.push({ slug: "mian-masood" });
  params.push({ slug: "prof-dr-omar-masood" });
  params.push({ slug: "omar-masood" });
  params.push({ slug: "muhammad-maqbool" });
  params.push({ slug: "malik-mumtaz" });

  return params;
}

export async function generateMetadata({
  params,
}: ProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getMemberBySlug(slug);

  if (!member) {
    return {
      title: "Board Member Not Found | OM International",
    };
  }

  const role = member.role || "Board Member";
  const title = `${member.name} – ${role} | OM International`;
  const description = member.profile?.bio?.[0]
    ? `${member.name} – ${role}. ${member.profile.bio[0]}`.slice(0, 155)
    : `Profile of ${member.name}, ${role} of the OM International Board.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "profile",
    },
  };
}

export default async function BoardMemberProfilePage({
  params,
}: ProfilePageProps) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  return <BoardMemberProfile member={member} />;
}

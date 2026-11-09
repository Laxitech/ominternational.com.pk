import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BoardMemberProfile from "@/components/board/board-member-profile";
import { boardMembers } from "@/data/board";
import type { BoardMember } from "@/types/board";

interface ProfilePageProps {
  params: Promise<{ slug: string }>;
}

function getMemberBySlug(slug: string): BoardMember | undefined {
  if (
    slug === "brigadier-tahir-malik" ||
    slug === "tahir-malik" ||
    slug === "brig-dr-tahir-nawaz"
  ) {
    return boardMembers.find(
      (member) => member.slug === "brigadier-tahir-malik",
    );
  }
  if (
    slug === "dr-kiran-javaria" ||
    slug === "kiran-javaria" ||
    slug === "dr-kiran"
  ) {
    return boardMembers.find(
      (member) => member.slug === "dr-kiran-javaria",
    );
  }
  return boardMembers.find((member) => member.slug === slug);
}

export function generateStaticParams() {
  const params = boardMembers.map((member) => ({
    slug: member.slug,
  }));

  params.push({ slug: "tahir-malik" });
  params.push({ slug: "brig-dr-tahir-nawaz" });
  params.push({ slug: "kiran-javaria" });
  params.push({ slug: "dr-kiran" });

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

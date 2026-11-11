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
    slug === "mian-masood-ahmed" ||
    slug === "masood-ahmed" ||
    slug === "mian-masood" ||
    slug === "mian-masood-ahmad" ||
    slug === "masood-ahmad"
  ) {
    return boardMembers.find(
      (member) => member.slug === "mian-masood-ahmed",
    );
  }
  if (
    slug === "prof-dr-omar-masood" ||
    slug === "dr-omar-masood" ||
    slug === "omar-masood" ||
    slug === "dr-omer-masood" ||
    slug === "dr-omer"
  ) {
    return boardMembers.find(
      (member) => member.slug === "prof-dr-omar-masood",
    );
  }
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

  params.push({ slug: "masood-ahmed" });
  params.push({ slug: "mian-masood" });
  params.push({ slug: "masood-ahmad" });
  params.push({ slug: "mian-masood-ahmad" });
  params.push({ slug: "dr-omar-masood" });
  params.push({ slug: "omar-masood" });
  params.push({ slug: "dr-omer-masood" });
  params.push({ slug: "dr-omer" });
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

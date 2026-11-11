import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BoardMemberProfile from "@/components/board/board-member-profile";
import { boardMembers } from "@/data/board";
import type { BoardMember } from "@/types/board";

interface ProfilePageProps {
  params: Promise<{ slug: string }>;
}

function getMemberBySlug(slug: string): BoardMember | undefined {
  if (slug === "asad-shamim" || slug === "asadshamim") {
    return boardMembers.find((member) => member.slug === "asad-shamim");
  }
  if (
    slug === "dr-gokhan-bora-aktan" ||
    slug === "dr-gokhan" ||
    slug === "gokhan-bora-aktan" ||
    slug === "gokhan-aktan"
  ) {
    return boardMembers.find(
      (member) => member.slug === "dr-gokhan-bora-aktan",
    );
  }
  if (
    slug === "dr-shazaib-butt" ||
    slug === "dr-shazaib" ||
    slug === "shazaib-butt"
  ) {
    return boardMembers.find((member) => member.slug === "dr-shazaib-butt");
  }
  if (
    slug === "prof-dr-muhammad-sarwar" ||
    slug === "dr-muhammad-sarwar" ||
    slug === "muhammad-sarwar" ||
    slug === "dr-sarwar"
  ) {
    return boardMembers.find(
      (member) => member.slug === "prof-dr-muhammad-sarwar",
    );
  }
  if (
    slug === "brig-dr-muhammad-tahir-nawaz" ||
    slug === "dr-muhammad-tahir-nawaz" ||
    slug === "tahir-nawaz" ||
    slug === "tahir-nazaz"
  ) {
    return boardMembers.find(
      (member) => member.slug === "brig-dr-muhammad-tahir-nawaz",
    );
  }
  return boardMembers.find((member) => member.slug === slug);
}

export function generateStaticParams() {
  const advisoryMembers = boardMembers.filter((m) => m.board === "advisory");
  const params = advisoryMembers.map((member) => ({
    slug: member.slug,
  }));

  params.push({ slug: "asadshamim" });
  params.push({ slug: "dr-gokhan" });
  params.push({ slug: "gokhan-bora-aktan" });
  params.push({ slug: "dr-shazaib" });
  params.push({ slug: "shazaib-butt" });
  params.push({ slug: "dr-muhammad-sarwar" });
  params.push({ slug: "muhammad-sarwar" });
  params.push({ slug: "dr-muhammad-tahir-nawaz" });
  params.push({ slug: "tahir-nawaz" });
  params.push({ slug: "tahir-nazaz" });

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

  const role = member.role || "Advisory Board Member";
  const title = `${member.name} – ${role} | OM International`;
  const description = member.profile?.bio?.[0]
    ? `${member.name} – ${role}. ${member.profile.bio[0]}`.slice(0, 155)
    : `Profile of ${member.name}, ${role} of OM International.`;

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

export default async function AdvisoryMemberProfilePage({
  params,
}: ProfilePageProps) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  return <BoardMemberProfile member={member} />;
}

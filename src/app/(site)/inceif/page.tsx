import type { Metadata } from "next";
import InceifContent from "./inceif-content";

export const metadata: Metadata = {
  title: "INCEIF Collaboration | OM International",
  description:
    "An online postgraduate-style Certificate in Islamic Finance by OM International, in exclusive collaboration with INCEIF University, Malaysia, through ISRA Associates.",
};

export default function InceifPage() {
  return <InceifContent />;
}
